# Errors

|Name|Notes|
|:--|:--|
|ErrorMissing| Used when a **required** key or value is *missing*|
|ErrorSyntax| Used when a value is *incorrectly formatted*|
|ErrorTooLong| Used when a value is *too long*|
|ErrorTooShort| Used when a value is *too short*|
|ErrorType| Used when a value is of an *incorrect type*|
## Examples
#### Throwing an error

```

    const {ErrorMissing} = require("@VanillaCX/Errors");

    const test = () => {
        throw new ErrorMissing("username")
    }


    try {
        test();
    } catch(e) {
        console.log(e)
        console.log(e.verbose)
        console.log(e.code)
        console.log(e.description)
        
    }

```

#### Getting Error Codes

```

    const {ErrorMissing} = require("@VanillaCX/Errors");

    const setTag = (key, value) => {
        const errors = {}
        const sanitised = {}

        if (!value) {
            errors[key] = ErrorMissing.code
        } else {
            sanitised[key] = value
        }
    }



    try {
        setTag("name");

    } catch(e) {
        console.log(e)
        console.log(e.verbose)
        console.log(e.code)
        console.log(e.description)
        
    }

```