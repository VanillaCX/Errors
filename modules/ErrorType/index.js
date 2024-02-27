const {TYPE: ERROR_CODE} = require("../Codes")
const {QuietError} = require("../QuietError")

class ErrorType extends QuietError {
    constructor(message){
        super(message, ERROR_CODE)
        
        this.name = "ErrorType"

    }

    static get code(){
        return ERROR_CODE
    }
}

module.exports = {ErrorType}