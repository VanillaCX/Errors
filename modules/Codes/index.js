
const errorCodes = {
    UNKNOWN: 0,
    SYNTAX: 1,
    TOO_LONG: 2,
    TOO_SHORT: 3,
    TYPE: 4,
    MISSING: 5,
    RESERVED: 6,
}

errorDescriptions = {
    0: ["Unknown", "You put something in that is wrong :)"],
    1: ["Invalid Syntax.", "You put something in that is wrong :)"],
    2: ["Too Long.", "You put something in that is wrong :)"],
    3: ["Too Short.", "You put something in that is wrong :)"],
    4: ["Type Mismatch.", "You put something in that is wrong :)"],
    5: ["Missing Required.", "You put something in that is wrong :)"],
    6: ["Reserved Word.", "You put something in that is wrong :)"],
}


const description = (code, verbose = false) => {
    if (!errorDescriptions[code]) {
        return errorDescriptions[errorCodes.UNKNOWN][0]
    }

    return (verbose) ? errorDescriptions[code][1] : errorDescriptions[code][0] + " (see e.verbose for more info...)"

}



module.exports = {...errorCodes, description}