const {MISSING: ERROR_CODE} = require("../Codes")
const {QuietError} = require("../QuietError")

class ErrorMissing extends QuietError {
    constructor(message){
        super(message, ERROR_CODE)
        
        this.name = "ErrorMissing"

    }

    static get code(){
        return ERROR_CODE
    }
}

module.exports = {ErrorMissing}