const removeFromArray = function(arr) {
    for (let i = 0; i <= arr.length; i++) {
        for (let j = 1; j <= arguments.length; j++) {
            if (arr[i] === arguments[j]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}

module.exports = removeFromArray
