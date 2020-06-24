let driver = {}

let destructivelyUpdateDriverWithKeyAndValue = function(driver, key, value){
    driver[key] = value
    return driver
}

let deleteFromDriverByKey = function(driver, key){
    let newDriver = {...driver}
    delete newDriver[key]
    return newDriver
}

let destructivelyDeleteFromDriverByKey = function(driver, key){
    delete driver[key]
    return driver
}

let updateDriverWithKeyAndValue = function(driver, key, value){
    let newDriver = {...driver}
    newDriver[key] = value
    return newDriver
}