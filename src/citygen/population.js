import { StayingActivity }  from './activity.js';

class Person {
    constructor(city, personMeshTemplate) {
        const startLocation = city.getRandomBuilding();
        this.x = startLocation.x;
        this.y = startLocation.y;
        this.mesh = personMeshTemplate.clone();
        
        startLocation.enter();
        this.activity = new StayingActivity();
    }

    tick(time, city, sizeScale) {
        this.activity = this.activity.tick(time, this, city);
        this.mesh.position.x = this.x * sizeScale;
        this.mesh.position.y = this.y * sizeScale;
    }
}


export class Population {
    constructor(city) {
        this.city = city;
        this.people = [];
    }

    generate(personMeshTemplate, count = 1) {
        for (let i = 0; i < count; i++) {
            let person = new Person(this.city, personMeshTemplate);
            this.people.push(person);
        }
    }

    tick(time, sizeScale) {
        this.people.forEach(person => {
            person.tick(time, this.city, sizeScale);
        });
    }
}

