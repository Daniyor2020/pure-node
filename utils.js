function generateRandomString(length) {
    return Math.random().toString(20).substr(2, length);
}

module.exports = {
    generateRandomString
}