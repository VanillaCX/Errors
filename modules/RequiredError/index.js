const {MISSING_REQUIRED, describeError} = require("../Codes")
const {QuietError} = require("../QuietError")

class RequiredError extends QuietError {
    constructor(message){
        super(message, MISSING_REQUIRED)
        
        this.name = "RequiredError"

    }
}

module.exports = {RequiredError}