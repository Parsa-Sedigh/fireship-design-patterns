class Airplane {
    land() {}
}

class Runway {
    clear: boolean;
}

class Tower {
    clearForLanding(runway: Runway, plane: Airplane) {
        if (runway.clear) {
            console.log(`Plane ${plane} is clear for landing`);
        }
    }
}

const runway25A = new Runway();
const runway25B = new Runway();
const a = new Airplane();
const b = new Airplane();
const c = new Airplane();
