const jsonwebtoken = require('jsonwebtoken');

const createToken = () => {
    const token = jsonwebtoken.sign({}, 'secret');
    return token
}
module.exports = createToken