const { makeHello } = require('./make-hello');
const { say } = require('./say')  ;

exports.api = {
    h: makeHello('h'),
    s: say.bind(null, 's')
};
