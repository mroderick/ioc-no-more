exports.makeHello = function makeHello(g) {
    const pi = 3.1415;

    return function hello(person) {
        return `${g} ${person}`;
    }
}
