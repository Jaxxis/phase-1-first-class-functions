function receivesAFunction(cb) {
    return cb()
}

function returnsANamedFunction(){
    return function namedFunction() {
        console.log("Check out this named function")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Check out this Anonymous function")
    }
}