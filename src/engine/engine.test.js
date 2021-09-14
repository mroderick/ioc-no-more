const { Engine } = require("./engine");

function test(){
    const engine = new Engine([
        sinon.fake(),
        sinon.fake()
    ]);
}
