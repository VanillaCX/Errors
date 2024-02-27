
const errorCodes = {
    INVALID_SYNTAX: 1,
    TOO_LONG: 2,
    TOO_SHORT: 3,
    TYPE_MISMATCH: 4,
    MISSING_REQUIRED: 5,
    UNKNOWN: 6
}

errorDescriptions = {
    1: ["Invalid Syntax.", "You put something in that is wrong :)"],
    2: ["Too Long.", "You put something in that is wrong :)"],
    3: ["Too Short.", "You put something in that is wrong :)"],
    4: ["Type Mismatch.", "You put something in that is wrong :)"],
    5: ["Missing Required.", "You put something in that is wrong :)"],
    6: ["Unknown", "You put something in that is wrong :)"]
}


const description = (code, verbose = false) => {
    if (!errorDescriptions[code]) {
        return errorDescriptions[errorCodes.UNKNOWN][0]
    }

    return (verbose) ? errorDescriptions[code][1] : errorDescriptions[code][0] + " (see e.verbose for more info...)"

}



module.exports = {...errorCodes, description}