import * as THREE from 'three';
import { mergeBufferGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils';
import { Layout, generateWithRiver } from './layout';
import { Population } from './population';
import { City } from './city';

window.onload = () => {
    const grid = generateWithRiver(15, 15);
    const canvas = document.getElementById('citycanvas') as HTMLCanvasElement;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 10, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    renderer.setClearColor(0xffffff, 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(0, -100, 120);
    scene.add(light);
    const ambience = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambience);

    const roadMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const bridgeMaterial = new THREE.MeshLambertMaterial({ color: 0xFFAA00 });
    const bridgeMaterialHandles = new THREE.MeshLambertMaterial({ color: 0xCC8800 });
    const buildingMaterial = new THREE.MeshLambertMaterial({ color: 0xdddddd });
    const parkMaterial = new THREE.MeshLambertMaterial({ color: 0x55FF55 });
    const waterMaterial = new THREE.MeshLambertMaterial({ color: 0x00FFFF });
    
    const BLOCKSIZE = 2;

    const roads = [];
    const bridges = [];
    const buildings = [];
    const bridgeHandles = [];
    const parks = [];
    const waters = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 'B') {
                const height = (Math.random() * 0.2 + 2) * BLOCKSIZE;
                const geometry = new THREE.BoxGeometry(BLOCKSIZE, BLOCKSIZE, height, 1, 1, 1);
                geometry.translate(i * BLOCKSIZE, j * BLOCKSIZE, height * 0.5 - BLOCKSIZE * 0.5);
                buildings.push(geometry);
            } else if (grid[i][j] === 'R') {
                const geometry = new THREE.BoxGeometry(BLOCKSIZE, BLOCKSIZE, BLOCKSIZE, 1, 1, 1);
                geometry.translate(i * BLOCKSIZE, j * BLOCKSIZE, 0);
                roads.push(geometry);
            } else if (grid[i][j] === 'P') {
                const geometry = new THREE.BoxGeometry(BLOCKSIZE, BLOCKSIZE, BLOCKSIZE, 1, 1, 1);
                geometry.translate(i * BLOCKSIZE, j * BLOCKSIZE, 0);
                parks.push(geometry);
            } else if (grid[i][j] === 'W') {
                const geometry = new THREE.BoxGeometry(BLOCKSIZE, BLOCKSIZE, BLOCKSIZE, 1, 1, 1);
                geometry.translate(i * BLOCKSIZE, j * BLOCKSIZE, 0);
                waters.push(geometry);
            } else if (grid[i][j] === 'M') {
                const geometry = new THREE.BoxGeometry(BLOCKSIZE, BLOCKSIZE, BLOCKSIZE, 1, 1, 1);
                geometry.translate(i * BLOCKSIZE, j * BLOCKSIZE, 0);
                bridges.push(geometry);

                const sideA = new THREE.BoxGeometry(BLOCKSIZE, BLOCKSIZE, BLOCKSIZE, 1, 1, 1);
                sideA.scale(1, 0.1, 0.4);
                sideA.translate(i * BLOCKSIZE, (j - 0.5) * BLOCKSIZE, BLOCKSIZE * 0.5);
                bridgeHandles.push(sideA);

                const sideB  = new THREE.BoxGeometry(BLOCKSIZE, BLOCKSIZE, BLOCKSIZE, 1, 1, 1);
                sideB.scale(1, 0.1, 0.4);
                sideB.translate(i * BLOCKSIZE, (j + 0.5) * BLOCKSIZE, BLOCKSIZE * 0.5);
                bridgeHandles.push(sideB);
            }
        }
    }

    const road = mergeBufferGeometries(roads);
    const roadMesh = new THREE.Mesh(road, roadMaterial);
    scene.add(roadMesh);

    if (bridges.length > 0) {
        const bridge = mergeBufferGeometries(bridges);
        const bridgeMesh = new THREE.Mesh(bridge, bridgeMaterial);
        scene.add(bridgeMesh);

        const bridgeHandle = mergeBufferGeometries(bridgeHandles);
        const bridgeHandlesMesh = new THREE.Mesh(bridgeHandle, bridgeMaterialHandles);
        scene.add(bridgeHandlesMesh);
    }

    const building = mergeBufferGeometries(buildings);
    const buildingMesh = new THREE.Mesh(building, buildingMaterial);
    scene.add(buildingMesh);

    const park = mergeBufferGeometries(parks);
    const parkMesh = new THREE.Mesh(park, parkMaterial);
    scene.add(parkMesh);

    const water = mergeBufferGeometries(waters);
    const waterMesh = new THREE.Mesh(water, waterMaterial);
    scene.add(waterMesh);

    
    const sceneCenter = new THREE.Vector3(30, 30, 0);
    camera.position.x = -500;
    camera.position.y = -500;
    camera.position.z = 500;
    camera.up = new THREE.Vector3(0, 0, 1);
    camera.lookAt(sceneCenter);


    const personMesh = new THREE.Mesh(new THREE.BoxGeometry(BLOCKSIZE * 0.3, BLOCKSIZE * 0.3, BLOCKSIZE * 0.3, 1, 1, 1), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    
    personMesh.position.z = BLOCKSIZE;
    
    const city = new City(grid);
    const population = new Population(city);
    population.generate(personMesh, 20);
    for (let i = 0; i < population.people.length; i++) {
        scene.add(population.people[i].mesh);
    }

    let time = 0;
    let changed = true;
    const animate = () => {
        requestAnimationFrame(animate);
        population.tick(time, BLOCKSIZE);

        //if (changed) {
            renderer.render(scene, camera);
            changed = false;
        //}
        

        time++;
    }
    animate();

    const resize = () => {
        const w = Math.min(window.innerWidth, 1920);
        camera.aspect = w / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(w, window.innerHeight);
        scene.position.x = -Math.max(Math.min(window.innerWidth - 1200, 0), -25);
        scene.position.y = -Math.max(Math.min(window.innerWidth - 1200, 0), -25);

        changed = true;
    }

    window.onresize = resize;
    resize();

    
}
