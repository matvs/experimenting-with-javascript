let arrayOfObjects = [ { prop: 1 }, { prop: 2 }, { prop: 3 } ]
let copyOfArrayOfObjects = arrayOfObjects.slice()
arrayOfObjects.push(3)
arrayOfObjects[0].prop = "NEW VALUE"
