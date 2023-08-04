import * as THREE from 'three';
import { mergeBufferGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils';
import { generateWithRiver } from './layout';
import { Population } from './population';
import { City } from './city';
import { genTrees } from './tree.js';

const BLOCKSIZE = 2;
const CITYSIZE = 15;

export class CityAnimation {
    roadMaterial: THREE.MeshLambertMaterial;
    bridgeMaterial: THREE.MeshLambertMaterial;
    bridgeMaterialHandles: THREE.MeshLambertMaterial;
    buildingMaterial: THREE.MeshLambertMaterial;
    parkMaterial: THREE.MeshLambertMaterial;
    waterMaterial: THREE.MeshLambertMaterial;

    canvas: HTMLCanvasElement;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;

    population: Population | undefined;
    canvasHeight = 0;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            5,
            window.innerWidth / window.innerHeight,
            10,
            1000
        );
        this.camera.position.x = -400;
        this.camera.position.y = -400;
        this.camera.position.z = 400;
        this.camera.up = new THREE.Vector3(0, 0, 1);
        this.camera.lookAt(new THREE.Vector3(CITYSIZE * BLOCKSIZE, CITYSIZE * BLOCKSIZE, 0));
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            powerPreference: 'high-performance',
        });
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.roadMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
        this.bridgeMaterial = new THREE.MeshLambertMaterial({ color: 0xffaa00 });
        this.bridgeMaterialHandles = new THREE.MeshLambertMaterial({
            color: 0xcc8800,
        });
        this.buildingMaterial = new THREE.MeshLambertMaterial({ color: 0xdddddd });
        this.parkMaterial = new THREE.MeshLambertMaterial({ color: 0x55ff55 });
        this.waterMaterial = new THREE.MeshLambertMaterial({ color: 0x00ffff });

        let time = 0;
        const animate = () => {
            requestAnimationFrame(animate);
            if (this.population) this.population.tick(time, BLOCKSIZE);
            this.renderer.render(this.scene, this.camera);
            time++;
        };
        animate();

        this.canvas.onclick = () => {
            this.dispose();
            this.generate();
        };

        const prompt = document.getElementById('clickPrompt');
        if (prompt)
            prompt.onclick = () => {
                this.dispose();
                this.generate();
            };
    }

    generate() {
        const grid = generateWithRiver(CITYSIZE, CITYSIZE);
        const roads: THREE.BoxGeometry[] = [];
        const bridges: THREE.BoxGeometry[] = [];
        const buildings: THREE.BoxGeometry[] = [];
        const bridgeHandles: THREE.BoxGeometry[] = [];
        const parks: THREE.BoxGeometry[] = [];
        const waters: THREE.BoxGeometry[] = [];
        this.generateBlocks(grid, buildings, roads, parks, waters, bridges, bridgeHandles);
        const road = mergeBufferGeometries(roads);
        const roadMesh = new THREE.Mesh(road, this.roadMaterial);
        this.scene.add(roadMesh);

        this.generateBridge(bridges, bridgeHandles);
        this.generateBuildings(buildings);
        this.generatePark(parks);
        this.generateWater(waters);
        this.generateTrees(grid);
        this.setupLights();

        const personMesh = this.generateDots();
        this.generatePopulation(grid, personMesh);
    }

    private generatePopulation(
        grid: any[][],
        personMesh: THREE.Mesh<THREE.BoxGeometry, THREE.MeshLambertMaterial>
    ) {
        const city = new City(grid);
        this.population = new Population(city);
        this.population.generate(personMesh, 40);
        for (let i = 0; i < this.population.people.length; i++) {
            this.scene.add(this.population.people[i].mesh);
        }
    }

    private generateDots() {
        const personMesh = new THREE.Mesh(
            new THREE.BoxGeometry(BLOCKSIZE * 0.3, BLOCKSIZE * 0.3, BLOCKSIZE * 0.3, 1, 1, 1),
            new THREE.MeshLambertMaterial({ color: 0xff0000 })
        );
        personMesh.position.z = BLOCKSIZE;
        return personMesh;
    }

    private generateBridge(bridges: THREE.BoxGeometry[], bridgeHandles: THREE.BoxGeometry[]) {
        if (bridges.length > 0) {
            const bridge = mergeBufferGeometries(bridges);
            const bridgeMesh = new THREE.Mesh(bridge, this.bridgeMaterial);
            this.scene.add(bridgeMesh);

            const bridgeHandle = mergeBufferGeometries(bridgeHandles);
            const bridgeHandlesMesh = new THREE.Mesh(bridgeHandle, this.bridgeMaterialHandles);
            this.scene.add(bridgeHandlesMesh);
        }
    }

    private generateBuildings(buildings: THREE.BoxGeometry[]) {
        const building = mergeBufferGeometries(buildings);
        const buildingMesh = new THREE.Mesh(building, this.buildingMaterial);
        this.scene.add(buildingMesh);
    }

    private generatePark(parks: THREE.BoxGeometry[]) {
        const park = mergeBufferGeometries(parks);
        const parkMesh = new THREE.Mesh(park, this.parkMaterial);
        this.scene.add(parkMesh);
    }

    private generateWater(waters: THREE.BoxGeometry[]) {
        const water = mergeBufferGeometries(waters);
        const waterMesh = new THREE.Mesh(water, this.waterMaterial);
        this.scene.add(waterMesh);
    }

    private generateTrees(grid: any[][]) {
        const trees = genTrees(grid, BLOCKSIZE * 0.5, BLOCKSIZE);
        this.scene.add(trees);
    }

    private setupLights() {
        const light = new THREE.DirectionalLight(0xffffff, 0.5);
        light.position.set(0, -100, 120);
        this.scene.add(light);
        const ambience = new THREE.AmbientLight(0xffffff, 0.7);
        this.scene.add(ambience);
    }

    private generateBlocks(
        grid: any[][],
        buildings: THREE.BoxGeometry[],
        roads: THREE.BoxGeometry[],
        parks: THREE.BoxGeometry[],
        waters: THREE.BoxGeometry[],
        bridges: THREE.BoxGeometry[],
        bridgeHandles: THREE.BoxGeometry[]
    ) {
        let geometry;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                switch (grid[i][j]) {
                    case 'B':
                        const height = (Math.random() * 0.5 + 2) * BLOCKSIZE;
                        geometry = this.generateBlock(height);
                        geometry.translate(
                            i * BLOCKSIZE,
                            j * BLOCKSIZE,
                            height * 0.5 - BLOCKSIZE * 0.5
                        );
                        buildings.push(geometry);
                        break;
                    case 'R':
                        geometry = this.generateBlock();
                        geometry.translate(i * BLOCKSIZE, j * BLOCKSIZE, 0);
                        roads.push(geometry);
                        break;
                    case 'P':
                        geometry = this.generateBlock();
                        geometry.translate(i * BLOCKSIZE, j * BLOCKSIZE, 0);
                        parks.push(geometry);
                        break;
                    case 'W':
                        geometry = this.generateBlock();
                        geometry.translate(i * BLOCKSIZE, j * BLOCKSIZE, 0);
                        waters.push(geometry);
                        break;
                    case 'M':
                        geometry = this.generateBlock();
                        geometry.translate(i * BLOCKSIZE, j * BLOCKSIZE, 0);
                        bridges.push(geometry);

                        const sideA = this.generateBlock();
                        sideA.scale(1, 0.1, 0.4);
                        sideA.translate(i * BLOCKSIZE, (j - 0.5) * BLOCKSIZE, BLOCKSIZE * 0.5);
                        bridgeHandles.push(sideA);

                        const sideB = this.generateBlock();
                        sideB.scale(1, 0.1, 0.4);
                        sideB.translate(i * BLOCKSIZE, (j + 0.5) * BLOCKSIZE, BLOCKSIZE * 0.5);
                        bridgeHandles.push(sideB);
                }
            }
        }
    }

    private generateBlock(height?: number) {
        return new THREE.BoxGeometry(BLOCKSIZE, BLOCKSIZE, height ?? BLOCKSIZE, 1, 1, 1);
    }

    resize() {
        const sizes = this.canvas.parentElement?.getBoundingClientRect();
        const w = sizes?.width || window.innerWidth;

        if (this.canvasHeight === 0) this.canvasHeight = sizes?.height || window.innerHeight;

        this.camera.aspect = w / this.canvasHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(w, this.canvasHeight);
    }

    dispose() {
        for (let i = this.scene.children.length - 1; i >= 0; i--) {
            const obj = this.scene.children[i];
            this.scene.remove(obj);
        }
    }
}
