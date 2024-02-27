const {SYNTAX: ERROR_CODE} = require("../Codes")
const {QuietError} = require("../QuietError")

class ErrorSyntax extends QuietError {
    constructor(message){
        super(message, ERROR_CODE)
        
        this.name = "ErrorSyntax"

    }

    static get code(){
        return ERROR_CODE
    }
}

module.exports = {ErrorSyntax}