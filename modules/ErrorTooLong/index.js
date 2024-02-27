const {TOO_LONG: ERROR_CODE} = require("../Codes")
const {QuietError} = require("../QuietError")

class ErrorTooLong extends QuietError {
    constructor(message){
        super(message, ERROR_CODE)
        
        this.name = "ErrorTooLong"

    }

    static get code(){
        return ERROR_CODE
    }
}

module.exports = {ErrorTooLong}