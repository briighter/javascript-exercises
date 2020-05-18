const sumAll = function(x, y) {
    if ((isNaN(x) || isNaN(y)) || ((x || y) < 0)) {
        return "ERROR"
    } else if (x < y) {
        sum = x;
        tracker = x + 1;
        while (tracker <= y) {
            sum+=tracker
            tracker++
        }
    } else if (x > y) {
        sum = y;
        tracker = y + 1;
        while (tracker <= x) {
            sum+=tracker
            tracker++
        }
    }

    return sum;
}

module.exports = sumAll
