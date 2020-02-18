
const driver = {};

    //this function should take in three arguments: a driver Object, a key and a value. This function should not mutate the driver and should return a new driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(driver, key, value)
      // Alternate using ES6 Spread operators:
      // return { ...driver, ...{ [key]: value } }
    { return Object.assign({}, driver, { [key]: value});}


      //this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
    {driver[key] = value;
     return driver;}


     //this function should take in a driver Object and a key. It should delete the key/value pair for the key that was passed in from the driver Object. This should all not actually mutate the driver passed in.
function deleteFromDriverByKey(driver, key)
  // Alternate using ES6 Spread operators:
  // const newObj = { ...driver }
        { const newObj = Object.assign({}, driver);
            delete newObj[key];
            return newObj; }

function destructivelyDeleteFromDriverByKey(driver, key)
        { delete driver[key];
            return driver; }