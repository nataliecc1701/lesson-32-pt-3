// balances brackets

const openBracks = ["(", "[", "{"];
const closeBracks = [")", "]", "}"];

// check to see if a string is balanced
function balance(str, bracks = []) {
    // skip through the string until you hit a bracket
    let i = 0;
    while (openBracks.indexOf(str[i]) === -1
        && closeBracks.indexOf(str[i]) === -1
        && i < str.length) {i++}
    if(openBracks.indexOf(str[i]) > -1) {
        return balance(str.slice(i+1), bracks.concat(str[i]))
    }
    if(closeBracks.indexOf(str[i]) > -1) {
        // return false if there's a close-bracket mismarch
        if (openBracks.indexOf(bracks[bracks.length-1]) != closeBracks.indexOf(str[i])) return false
        return balance(str.slice(i+1), bracks.slice(0, bracks.length-1))
    }
    if(i === str.length) {
        return bracks.length === 0
    }
}