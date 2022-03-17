class HotDog {
    constructor(public bun: string,
                public ketchup: boolean,
                public mustard: boolean,
                public kraut: boolean) {
    }
}

// it's hard to keep track of all of the arguments of constructor:
new HotDog('wheat', false, true, true);

////////////// builder pattern:
class HotDogWithBuilderPattern {
    constructor(public breed: string,
                public ketchup?: boolean,
                public mustard?: boolean,
                public kraut?: boolean) {
    }

    addKetchup() {
        this.ketchup = true;
        return this;
    }

    addMustard() {
        this.mustard = true;
        return this;
    }

    addKraut() {
        this.kraut = true;
        return this;
    }
}

const myLunch = new HotDogWithBuilderPattern('gluten free');
myLunch.addKetchup().addMustard().addKraut();
