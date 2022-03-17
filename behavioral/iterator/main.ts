// let's implement our own iterator pattern:
function range(start: number, end: number, step = 1) {
    return {
        next() {
            if (start < end) {
                start = start + step;
                return {done: false, value: start};
            }
            return {done: true, value: end}; // this tells JS to stop iterating
        },
        [Symbol.iterator]() { // allows us to say: for (n of range(0, 20, 5)) {}
            return this;
        }
    };
}

