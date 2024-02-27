const {description} = require("../Codes")

class QuietError extends Error {
    constructor(message, code){
        super(message)
        this.stack = null

        this.code = code
        this.description = description(code)

    }

    get verbose(){
        return QuietError
    }

    static get verbose(){
        return description(this.code, true)
    }
}

module.exports = {QuietError}