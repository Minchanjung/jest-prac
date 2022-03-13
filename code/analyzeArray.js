const analyzeArray = (array) => {
    return {'average': findAverage(array),
            'min': findMin(array), 
            'max': findMax(array),
            'length': findLength(array)}
}

const findAverage = (array) => {
    let total = 0;
    for (let i=0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}

const findMin = (array) => {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

const findMax = (array) => {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

const findLength = (array) => {
    return array.length;
}

export { analyzeArray, findAverage, findMin, findMax, findLength };