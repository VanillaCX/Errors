const errorCodes = require("./modules/Codes");
const {ErrorMissing} = require("./modules/ErrorMissing");
const {ErrorSyntax} = require("./modules/ErrorSyntax");
const {ErrorTooLong} = require("./modules/ErrorTooLong");
const {ErrorTooShort} = require("./modules/ErrorTooShort");
const {ErrorType} = require("./modules/ErrorType");

module.exports = {
    errorCodes,
    ErrorMissing,
    ErrorSyntax,
    ErrorTooLong,
    ErrorTooShort,
    ErrorType
}