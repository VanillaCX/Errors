const {ErrorMissing} = require("../index.js")



const throwAnError = () => {
    throw new ErrorMissing("username")
}


console.log(ErrorMissing.code)



try {
    throwAnError();
} catch(e) {
    console.log(e)
    
}