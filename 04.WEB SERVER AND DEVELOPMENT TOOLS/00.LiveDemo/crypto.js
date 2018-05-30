const crypto = require('crypto');

function generateSalt(){
    return crypto.randomBytes(128).toString('base64');
}

function generateHash(salt,pwd){
    let hmac = crypto.createHmac('sha1',salt);
    return hmac.update(pwd).digest('hex');
}

const salt = 'mNq2y3Z2opZxuXeOTYxZA7/i+QMa/i80l1c8xhA5v' +
  'k26eI7pmzLQ6lgZimCpNaa2qs2Xvc8NhE+16Trjj9soRs07/H3B1Wwyb' +
  '3G3DcHqNnhn47JIkFHZ3Cd+5erArVB51r1D6VV1JRm45z6hOpNsresYX7FWhCYoEdjkBSFlnAI=';

const password = "pesho1";

const hashed = generateHash(salt,password);


console.log(hashed);