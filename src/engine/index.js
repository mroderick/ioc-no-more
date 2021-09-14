const { makePiston } = require("../piston");
const { Engine } = require('./engine');

exports.makeEngine = function makeEngine(){
    const pistons = [makePiston(), makePiston()];

    return new Engine(pistons);
}
