import * as THREE from 'three';
import { mergeBufferGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils';


function genUnitTreeGeometry() {
    const TRUNKH = 0.3;
    const CROWNH = 0.5;
    const crownGeometry = new THREE.BoxGeometry(0.5, 0.5, CROWNH, 1, 1, 1);
    const rnd = (Math.random() - 0.5) * 0.5 + 1;
    crownGeometry.scale(rnd, rnd, rnd);
    crownGeometry.translate(0, 0, TRUNKH + 0.5 * CROWNH);
    const colorBuffer = new THREE.BufferAttribute(new Float32Array(crownGeometry.attributes.position.count * 3), 3);
    const color = Math.random() * 0.3 + 0.5;
    for (let i = 0; i < crownGeometry.attributes.position.count; i++) {
        colorBuffer.setXYZ(i, 0, color, 0);
    }
    crownGeometry.setAttribute('color', colorBuffer);
    
    const trunkGeometry = new THREE.BoxGeometry(0.1, 0.1, TRUNKH, 1, 1, 1);
    trunkGeometry.translate(0, 0, 0.5 * TRUNKH);
    const colorBuffer2 = new THREE.BufferAttribute(new Float32Array(trunkGeometry.attributes.position.count * 3), 3);
    for (let i = 0; i < trunkGeometry.attributes.position.count; i++) {
        colorBuffer2.setXYZ(i, 1, 0.5, 0);
    }
    trunkGeometry.setAttribute('color', colorBuffer2);

    const geometry = mergeBufferGeometries([crownGeometry, trunkGeometry]);
    return geometry;
}

function genTreesMesh(positions, groundLevel, scale) {
    const trees = [];
    for (let i = 0; i < positions.length; i++) {
        let tree = genUnitTreeGeometry();
        tree.scale(scale, scale, scale);
        tree.translate(positions[i].x, positions[i].y, groundLevel);
        trees.push(tree);
    }

    const mergedGeometry = mergeBufferGeometries(trees);
    const mesh = new THREE.Mesh(mergedGeometry, new THREE.MeshLambertMaterial({ vertexColors: true }));
    return mesh;
}

function genTreesPositions(grid, scale) {
    const positions = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            //if it is a park
            if (grid[i][j] === 'P') {
                if (Math.random() < 0.5) {
                positions.push(new THREE.Vector2(i * scale + (Math.random() - 0.5) * 0.2 * scale, j * scale + (Math.random() - 0.5) * 0.2 * scale));
                }
            }
        }
    }
    return positions;
}


export function genTrees(grid, groundLevel, scale) {
    const positions = genTreesPositions(grid, scale);
    console.log(positions);
    const mesh = genTreesMesh(positions, groundLevel, scale);
    return mesh;
}