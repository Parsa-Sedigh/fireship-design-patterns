interface State {
    think(): string;
}

class HappyState implements State {
    think() {
        return 'happy';
    }
}

class SadState implements State {
    think() {
        return 'sad';
    }
}

class Human {
    state: State;

    constructor() {
        this.state = new HappyState();
    }

    think() {
        return this.state.think();
    }

    changeState(state) {
        this.state = state;
    }
}
