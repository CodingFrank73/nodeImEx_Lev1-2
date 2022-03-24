

function firstElementFromArray(data) {
    return data[0]
}

function allButNotTheLast(data) {

    let result = "";

    for (let i = 0; i < data.length - 1; i++) {
        result += data[i];

    }
    return result
}

function lastElementFromArray(data) {
    return data[data.length - 1]
}

function getElementFromPosition(data, position) {

    if (position < 0 || position > data.length) {
        return data[data.length - 1]
    } else {
        return data[position]
    }

}

function removeElementFromArray(data, value) {

    data.forEach(e => {
        if (e === value) {
            data.splice(data.indexOf(e), 1)
        }
    });

    return data
}

function removeDoubles(data) {

    let result = [];
    let sum = 0;

    data.forEach((e) => {
        if (!result.includes(e)) {
            result.push(e)
            sum += e;
        }
    })

    return [result, sum]
}

function randomBetween(numA, numB) {
    return Math.floor(Math.random() * (numB - numA + 1) + numA)
}

function capitalise(value) {
    let text = value.slice(0, 1).toUpperCase()
    let rest = value.slice(1, value.length)

    return text + rest
}

function allToUpper(value) {
    return value.toUpperCase()
}

function matchParam(value, param) {
    let lastLetter = value.charAt(value.length - 1);
    if (param === lastLetter) {
        return true
    } else {
        return false
    }

}



module.exports = {
    firstElementFromArray,
    allButNotTheLast,
    lastElementFromArray,
    getElementFromPosition,
    removeElementFromArray,
    removeDoubles,
    randomBetween,
    capitalise,
    allToUpper,
    matchParam
}