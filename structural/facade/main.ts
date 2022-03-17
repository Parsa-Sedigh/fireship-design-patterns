// complex stuff going on in this class
class PlumbingSystem {
    // low level access to plumbing access
    setPressure(v: number) {}
    turnOn() {}
    turnOff() {}
}

// complex stuff going on in this class
class ElectricalSystem {
    // low level access to electrical access
    setVoltage(v: number) {}
    turnOn() {}
    turnOff() {}
}

// ugly details are hidden in this class:
class House {
    private plumbing = new PlumbingSystem();
    private electrical = new ElectricalSystem();

    public turnOnSystems() {
        this.electrical.setVoltage(120);
        this.electrical.turnOn();
        this.plumbing.setPressure(500);
        this.plumbing.turnOn();
    }

    public shutDown() {
        this.plumbing.turnOff();
        this.electrical.turnOff();
    }
}

const client = new House();
client.turnOnSystems();
client.shutDown();
