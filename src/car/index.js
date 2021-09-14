const { makeEngine } = require("../engine");
const { Car } = require("./car");

exports.makeCar = function makeCar() {
    return new Car(makeEngine());
}
