import { RoadTile, BuildingTile, ParkTile } from './tiles.js';

const SENSING_RADIUS = 3;

export class City {
    constructor(grid) {
        this.dimX = grid.length;
        this.dimY = grid[0].length;
        this.tiles = new Array(this.dimX * this.dimY);
        console.log(grid);

        for (let x = 0; x < this.dimX; x++) {
            for (let y = 0; y < this.dimY; y++) {
                let tile = grid[x][y];
                if (tile === 'R' || tile === 'M') {
                    this.setTile(x, y, new RoadTile(x, y));
                } else if (tile === 'B') {
                    this.setTile(x, y, new BuildingTile(x, y));
                } else if (tile === 'P') {
                    this.setTile(x, y, new ParkTile(x, y));
                }
            }
        }

    }

    getTile(x, y) {
        if (x < 0 || x >= this.dimX || y < 0 || y >= this.dimY)
            return null;
        return this.tiles[x + y * this.dimX];
    }

    setTile(x, y, tile) {
        this.tiles[x + y * this.dimX] = tile;
    }

    heuristic(startTile, endTile) {
        return Math.abs(startTile.x - endTile.x) + Math.abs(startTile.y - endTile.y);
    }

    getNeighbors(tile) {
        let neighbors = [];
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                if (Math.abs(x) === Math.abs(y))
                    continue;

                let neighbor = this.getTile(tile.x + x, tile.y + y);
                if (neighbor && neighbor instanceof RoadTile) {
                    neighbors.push(neighbor);
                }
            }
        }
        return neighbors;
    }

    reconstructPath(cameFrom, current, target) {
        let totalPath = [current];
        while (cameFrom[current.x + "," + current.y]) {
            current = cameFrom[current.x + "," + current.y];
            totalPath.push(current);
        }
        return totalPath.reverse().concat([target]);
    }

    getRandomBuilding() {
        let buildingTiles = this.tiles.filter(tile => tile instanceof BuildingTile);
        let randomIndex = Math.floor(Math.random() * buildingTiles.length);
        return buildingTiles[randomIndex];
    }


    findPath(startTile, endTile, avoidTiles = []) {
        let openSet = [startTile];
        let closedSet = [];
        let cameFrom = {};
        let gScore = {};
        let fScore = {};
        gScore[startTile.x + "," + startTile.y] = 0;
        fScore[startTile.x + "," + startTile.y] = this.heuristic(startTile, endTile);

        while (openSet.length > 0) {
            let current = openSet.reduce((a, b) => fScore[a.x + "," + a.y] < fScore[b.x + "," + b.y] ? a : b);

            const dx = current.x - endTile.x;
            const dy = current.y - endTile.y;

            if (Math.abs(dx) + Math.abs(dy) === 1) {
                return this.reconstructPath(cameFrom, current, endTile);
            }

            openSet = openSet.filter(tile => tile !== current);
            closedSet.push(current);

            let neighbors = this.getNeighbors(current, avoidTiles, startTile);
            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];

                if (avoidTiles.includes(neighbor))
                    continue;

                if (startTile.distance(neighbor) < SENSING_RADIUS)
                    if (!neighbor.canEnter())
                        continue;

                if (closedSet.includes(neighbor)) {
                    continue;
                }

                let tentativeGScore = gScore[current.x + "," + current.y] + 1;
                if (!openSet.includes(neighbor) || tentativeGScore < gScore[neighbor.x + "," + neighbor.y]) {
                    cameFrom[neighbor.x + "," + neighbor.y] = current;
                    gScore[neighbor.x + "," + neighbor.y] = tentativeGScore;
                    fScore[neighbor.x + "," + neighbor.y] = gScore[neighbor.x + "," + neighbor.y] + this.heuristic(neighbor, endTile);

                    if (!openSet.includes(neighbor)) {
                        openSet.push(neighbor);
                    }
                }
            }
        }
        return [];
    }

}

