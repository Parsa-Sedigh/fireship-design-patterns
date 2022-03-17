const zombie = {
    eatBrains() {
        return 'yum brain';
    }
};

const chad = Object.create(zombie, {name: {value: 'chad'}}); // the clone
console.log(chad);

console.log(chad.__proto__);
console.log(Object.getPrototypeOf(chad));

// extending a class is a bad practice in JS:
Array.prototype.bad = function () {
    console.log('Im bad');
}

[].bad();
