const {TOO_SHORT: ERROR_CODE} = require("../Codes")
const {QuietError} = require("../QuietError")

class ErrorTooShort extends QuietError {
    constructor(message){
        super(message, ERROR_CODE)
        
        this.name = "ErrorTooShort"

    }

    static get code(){
        return ERROR_CODE
    }
}

module.exports = {ErrorTooShort}