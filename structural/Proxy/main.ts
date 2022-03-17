const original = {name: 'Parsa'};
const reactive = new Proxy(original, {
    // whenever a property is accessed on the object, this code will run:
    get(target, key) {
        console.log('tracking: ', key);
        return target[key];
    },
    // whenever a property is changed, this code will run:
    set(target, key, value) {
        console.log('updating UI ...');
        return Reflect.set(target, key, value);
    }
});

reactive.name;
reactive.name = 'Parsa 2';
