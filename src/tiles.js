


class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance(other) {
        return Math.abs(this.x - other.x) + Math.abs(this.y - other.y);
    }
};

export class RoadTile extends Tile {
    constructor(x, y) {
        super(x, y);
        this.capacity = 1;
    }

    enter() {
        if (this.capacity > 0){
            this.capacity--;
            return true;
        }
        return false;
    }

    leave() {
        this.capacity++;
        return true;
    }

    canEnter() {
        return this.capacity > 0;
    }
}

export class BuildingTile extends Tile {
    constructor(x, y) {
        super(x, y);
        this.occupants = 0;
    }
    
    enter() {
        this.occupants++;
        return true;
    }

    leave() {
        this.occupants--;
        return true;
    }

    canEnter() {
        return true;
    }
}


export class ParkTile extends Tile {
    constructor(x, y) {
        super(x, y);
    }
}





