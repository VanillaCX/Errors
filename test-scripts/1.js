const {RequiredError} = require("../index.js")



const throwAnError = () => {
    throw new RequiredError("Missing User Name")
}






try {
    throwAnError();
} catch(e) {
    console.log(e)
    
}