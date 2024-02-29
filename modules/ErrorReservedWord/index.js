const {RESERVED: ERROR_CODE} = require("../Codes")
const {QuietError} = require("../QuietError")

class ErrorReservedWord extends QuietError {
    constructor(message){
        super(message, ERROR_CODE)
        
        this.name = "ErrorReservedWord"

    }

    static get code(){
        return ERROR_CODE
    }
}

module.exports = {ErrorReservedWord}