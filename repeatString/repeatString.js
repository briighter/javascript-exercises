const repeatString = function(msg, nbr) {
    if (nbr < 0) {
        return "ERROR";
    } else {
        return msg.repeat(nbr);
    }
}

module.exports = repeatString
