/**
 * This function is responsible for generating fixed random number
 * @param {*} from - min number lower bound
 * @param {*} to   - max number upper bound
 */
 function getRandomNumber(from, to) {

    let upperBound = (to - from);

    // let result =  Math.ceil((Math.random() * upperBound) + from);
    // return result;

    return Math.ceil((Math.random() * upperBound) + from);
}