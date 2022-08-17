

function strReverse(str) {
    return str.split('').reverse().join('');
}

function random(list) {
    return list[Math.floor(Math.random() * list.length)];
}

class LayoutTile {
    constructor(code, up, right, down, left) {
        this.code = code;
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
    }

    rotate() {
        this.code = this.code.substring(1) + this.code.charAt(0);
        const temp = this.up;
        this.up = this.right;
        this.right = this.down;
        this.down = this.left;
        this.left = temp;
        return this;
    }

    clone() {
        return new LayoutTile(this.code, this.up, this.right, this.down, this.left);
    }

    canHaveBellow(tile) {
        return this.down === strReverse(tile.up);
    }

    canHaveAbove(tile) {
        return this.up === strReverse(tile.down);
    }

    canHaveLeft(tile) {
        return this.left === strReverse(tile.right);
    }

    canHaveRight(tile) {
        return this.right === strReverse(tile.left);
    }
}


const tiles = [
    new LayoutTile('BRRB', 'BR', 'RR', 'RB', 'BB'),
    new LayoutTile('BRRR', 'BR', 'RR', 'RR', 'RB'),
    new LayoutTile('BBRB', 'BB', 'BR', 'RB', 'BB'),

    new LayoutTile('PRRR', 'PR', 'RR', 'RR', 'RP'),
    new LayoutTile('PRRP', 'PR', 'RR', 'RP', 'PP'),
    //new LayoutTile('PPRP', 'PP', 'PR', 'RP', 'PP'),
    new LayoutTile('PPPP', 'BB', 'BB', 'BB', 'BB'),

    //new LayoutTile('RWWR', 'RW', 'WW', 'WR', 'RR'),
    //new LayoutTile('BWWB', 'BW', 'WW', 'WB', 'BB'),
    //new LayoutTile('PWWP', 'PW', 'WW', 'WP', 'PP'),
    //new LayoutTile('BWWR', 'BW', 'WW', 'WR', 'RB'),
    //new LayoutTile('RWWB', 'RW', 'WW', 'WB', 'BR'),
    //new LayoutTile('RRWR', 'RR', 'RW', 'WR', 'RR'),
    //new LayoutTile('BWWP', 'BW', 'WW', 'WP', 'PB'),
    //new LayoutTile('PWWB', 'PW', 'WW', 'WB', 'BP'),
    //new LayoutTile('RRRR', 'RR', 'WW', 'RR', 'WW'),
    //new LayoutTile('RWWR', 'RW', 'WW', 'WR', 'RR'),
    //new LayoutTile('RRWB', 'RR', 'RW', 'WB', 'BR'),
    //new LayoutTile('BWRR', 'BW', 'WR', 'RR', 'RB'),
    //new LayoutTile('RRWR', 'RR', 'RW', 'WR', 'RR'),
];

const colors = {
    //'P': [84, 186, 185],
    'P': [158, 210, 198],
    'R': [255, 255, 255],
    'B': [233, 218, 193],
}


class TileList {
    constructor(tiles) {
        this.tiles = tiles;
        this.changed = false;
    }

    evaluateTileBellow(otherTiles) {
        let len = this.tiles.length;
        this.tiles = this.tiles.filter(option => otherTiles.some((tile => option.canHaveBellow(tile))));
        this.changed = this.tiles.length !== len;
    }

    evaluateTileAbove(otherTiles) {
        let len = this.tiles.length;
        this.tiles = this.tiles.filter(option => otherTiles.some((tile => option.canHaveAbove(tile))));
        this.changed = this.tiles.length !== len;
    }

    evaluateTileLeft(otherTiles) {
        let len = this.tiles.length;
        this.tiles = this.tiles.filter(option => otherTiles.some((tile => option.canHaveLeft(tile))));
        this.changed = this.tiles.length !== len;
    }

    evaluateTileRight(otherTiles) {
        let len = this.tiles.length;
        this.tiles = this.tiles.filter(option => otherTiles.some((tile => option.canHaveRight(tile))));
        this.changed = this.tiles.length !== len;
    }

    get converged() {
        return this.tiles.length === 1;
    }

    converge() {
        this.tiles = [random(this.tiles)];
    }

    get failed() {
        return this.tiles.length === 0;
    }

    draw(x, y) {
        //stroke(0);
        //rect(x * 20, y * 20, 20, 20);
        if (!this.converged)
            return;

        const tile = this.tile;
        noStroke();
        fill(colors[tile.code.charAt(0)]);
        rect(x * 20, y * 20, 10, 10);
        fill(colors[tile.code.charAt(1)]);
        rect(x * 20 + 10, y * 20, 10, 10);
        fill(colors[tile.code.charAt(2)]);
        rect(x * 20 + 10, y * 20 + 10, 10, 10);
        fill(colors[tile.code.charAt(3)]);
        rect(x * 20, y * 20 + 10, 10, 10);
    }

    get length() {
        return this.tiles.length;
    }

    get tile() {
        return this.tiles[0];
    }

    clone() {
        return new TileList(this.tiles.map(tile => tile.clone()));
    }
}

const CONVERGED = 1;
const FAILED = 2;
const NOTCOVERGED = 0;

export class Layout {
    constructor(dimX, dimY) {
        this.options = [];
        for (let i = 0; i < tiles.length; i++) {
            for (let r = 0; r < 4; r++)
                this.options.push(tiles[i].rotate().clone());
        }

        this.init(dimX, dimY);
        this.status = NOTCOVERGED;
        this.reinit();
    }

    init(dimX, dimY) {
        this.arr = [];
        for (let i = 0; i < dimX; i++) {
            this.arr.push(new Array(dimY).fill(null));
        }
    }

    reinit() {
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < this.arr[i].length; j++) {
                this.arr[i][j] = new TileList(this.options.map(option => option));
            }
        }

        //force water in the middle
        //const coords = {x: Math.floor(this.arr.length / 2), y: Math.floor(this.arr[0].length / 2)};
        //this.arr[coords.x][coords.y].tiles = [this.options[this.options.length - 1]];
        //this.propagate(coords);
    }


    generateStep() {
        if(this.status === FAILED) {
            this.reinit();
        }

        const tileCoord = this.coordWithLeastPosibilities();
        const tile = this.arr[tileCoord.x][tileCoord.y];
        tile.converge();
        this.propagate(tileCoord);
        this.status = this.convergedOrFailed();
    }

    get converged() {
        return this.status === CONVERGED;
    }


    generate() {
        while (!this.converged) {
            this.generateStep();
        }
    }

    coordWithLeastPosibilities() {
        let min = Infinity;
        let coord = { x: Infinity, y: Infinity };
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < this.arr[i].length; j++) {
                const copts = this.arr[i][j].length;
                if (copts < min && copts > 1) {
                    min = copts;
                    coord = { x: i, y: j };
                }
            }
        }
        return coord;
    }

    printArrState() {
        const state = [];
        for(let i = 0; i < this.arr.length; i++) {
            const row = [];
            for(let j = 0; j < this.arr[i].length; j++) {
                row.push(this.arr[i][j].tiles.map(tile => tile.code));
            }
            state.push(row);
        }
    }

    propagate(tileCoord) {
        const inQueue = new Set();
        const queue = [tileCoord];

        while (queue.length > 0) {
            const coords = queue.shift();
            const tilesList = this.arr[coords.x][coords.y];
            inQueue.delete(tilesList);

            if (coords.y > 0) {
                const above = this.arr[coords.x][coords.y - 1];
                above.evaluateTileBellow(tilesList.tiles);
                if (above.failed)
                    return;
                if (above.changed && !inQueue.has(above)) {
                    queue.push({ x: coords.x, y: coords.y - 1 });
                    inQueue.add(above);
                }
            }

            if (coords.y < this.arr[coords.x].length - 1) {
                const below = this.arr[coords.x][coords.y + 1];
                below.evaluateTileAbove(tilesList.tiles);
                if (below.failed)
                    return;
                
                if (below.changed && !inQueue.has(below)) {
                    queue.push({ x: coords.x, y: coords.y + 1 });
                    inQueue.add(below);
                }
            }

            if (coords.x > 0) {
                const left = this.arr[coords.x - 1][coords.y];
                left.evaluateTileRight(tilesList.tiles);
                if (left.failed)
                    return;

                if (left.changed && !inQueue.has(left)) {
                    queue.push({ x: coords.x - 1, y: coords.y });
                    inQueue.add(left);
                }
            }

            if (coords.x < this.arr.length - 1) {
                const right = this.arr[coords.x + 1][coords.y];
                right.evaluateTileLeft(tilesList.tiles);
                if (right.failed)
                    return;

                if (right.changed && !inQueue.has(right)) {
                    queue.push({ x: coords.x + 1, y: coords.y });
                    inQueue.add(right);
                };
            }
        }
    }

    convergedOrFailed() {
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < this.arr[i].length; j++) {
                if (this.arr[i][j].failed) {
                    return FAILED;
                }

                if (!this.arr[i][j].converged)
                    return NOTCOVERGED;
            }
        }
        return CONVERGED;
    }

    draw() {
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < this.arr[i].length; j++) {
                this.arr[i][j].draw(i, j);
            }
        }
    }

    toGrid() {
        const grid = [];
        for (let i = 0; i < this.arr.length; i++) {
            const rowL = [];
            const rowR = [];
            for (let j = 0; j < this.arr[i].length; j++) {
                rowL.push(this.arr[i][j].tile.code[0]);
                rowL.push(this.arr[i][j].tile.code[3]);
                rowR.push(this.arr[i][j].tile.code[1]);
                rowR.push(this.arr[i][j].tile.code[2]);
            }
            grid.push(rowL);
            grid.push(rowR);
        }
        return grid;
    }
}


function validSize(index, size) {
    return index >= 0 && index < size;
}

function reachedBorder(index, size) {
    return index < 0 || index == size;
}

function addRiver(grid) {
    let pos = [Math.floor(grid.length / 2), 0];
    let next;
    let sizeX = grid.length;
    let sizeY = grid[0].length;
    let stp = 0;

    do {
        grid[pos[0]][pos[1]] = 'W';
        grid[pos[0] + 1][pos[1]] = 'W';
        grid[pos[0] + 2][pos[1]] = 'W';
        grid[pos[0] + 3][pos[1]] = 'W';
        //TODO check boundries


        next = [pos[0], pos[1] + 1];
        
        if (stp % 8 === 0) {
            do {
                const moveDir = Math.round(Math.random()) * 2 - 1;
                next = [pos[0], pos[1]];
                next[0] += moveDir;
            } while(!validSize(next[0], sizeX) || !validSize(next[1], sizeY));
        }

        pos = next;
        stp++;
    } while(!reachedBorder(pos[0], sizeX) && !reachedBorder(pos[1], sizeY));
}

function addBridgeAlongYAxis(grid) {
    let lastBefore, firstAfter, waterEncoutered;
    for(let i = Math.min(5, grid[0].length - 1); i < grid[0].length; i++) {
        lastBefore = grid[0][i];
        waterEncoutered = false;
        firstAfter = null;
        
        for(let j = 0; j < grid.length; j++) {
            if (grid[j][i] == 'W') {
                waterEncoutered = true;
            } else if (!waterEncoutered) {
                lastBefore = grid[j][i];
            } else {
                firstAfter = grid[j][i];
                break;
            }
        }

        if (waterEncoutered && (lastBefore == 'R' && firstAfter == 'R')) {
            for(let j = 0; j < grid.length; j++) {
                if (grid[j][i] == 'W') {
                    grid[j][i] = 'M';
                } 
            }
            return;
        }
    }
}


export function generateWithRiver(x, y) {
    const layout = new Layout(x, y);
    layout.generate();
    let grid = layout.toGrid();
    addRiver(grid);
    addBridgeAlongYAxis(grid);
    return grid;
}