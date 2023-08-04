class Activity {
    //...
}

export class StayingActivity extends Activity {
    constructor() {
        super();
        this.sleep = 10;

    }

    tick(time, person, city) {
        if (this.sleep > 0){
            this.sleep--;
            return this;
        }

        const target = city.getRandomBuilding();
        const currentTile = city.getTile(person.x, person.y);
        const act = new WalkingActivity(city, currentTile, target)
        return act;
    }
}

const FRAMES_TO_TRANSITION = 15;
const EPS = 1 / FRAMES_TO_TRANSITION * 0.5;

export class WalkingActivity extends Activity {
    constructor(city, startTile, endTile) {
        super();
        this.startTile = startTile;
        this.endTile = endTile;
        this.nextTile = null;
        this.planPath(city, startTile, endTile);
    }

    planPath(city, startTile, endTile, avoidTiles = []) {
        const path = city.findPath(startTile, endTile, avoidTiles);
        if (path.length > 0) {
            this.path = path;
            this.pathIndex = 0;
            this.nextTile = this.path[this.pathIndex];
        } 
    }

    tick(time, person, city) {
        if (!this.path) {
            //change end
            this.endTile = city.getRandomBuilding();
            this.planPath(city, this.startTile, this.endTile);
            return this;
        }

        if (this.reachedNextTile(person, this.nextTile))
        {
            this.pathIndex++;
            this.startTile = this.nextTile;
            this.nextTile = this.path[this.pathIndex];

            if (this.pathIndex >= this.path.length) {
                return new StayingActivity();
            }
    
            //TODO wait a bit and then replan
            if (this.nextTile.enter()){
                this.startTile.leave();
            } else {
                this.path = null;
                return new WaitingActivity(this, Math.floor(Math.random() * 10), (time, person, city) => {
                    this.planPath(city, this.startTile, this.endTile);
                });
                
            }
        } 

        const dx = (this.nextTile.x - this.startTile.x) / FRAMES_TO_TRANSITION;
        const dy = (this.nextTile.y - this.startTile.y) / FRAMES_TO_TRANSITION;
        person.x += dx;
        person.y += dy;
        return this;
    }

    reachedNextTile(person, nextTile) {
        if (Math.abs(person.x - nextTile.x) < EPS && Math.abs(person.y - nextTile.y) < EPS)
        {
            person.x = nextTile.x;
            person.y = nextTile.y;
            return true;
        }
        return false;
    }
}


export class WaitingActivity extends Activity {
    constructor(activity, timeOut, beforeReturn) {
        super();
        this.activity = activity;
        this.timeOut = timeOut;
        this.beforeReturn = beforeReturn;
    }

    tick(time, person, city) {
        this.timeOut--;



        if (this.timeOut <= 0) 
        {
            if (this.beforeReturn) {
                this.beforeReturn(time, person, city);
            }
            return this.activity;
        }
        return this;
    }
}