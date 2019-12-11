var arrayOfObjects = [ { prop: 1 }, { prop: 2 }, { prop: 3 } ]
var copyOfArrayOfObjects = arrayOfObjects.slice()

arrayOfObjects.push(3)
arrayOfObjects[0].prop = "NEW VALUE"
print();

arrayOfObjects[0] = null;
var myObject = arrayOfObjects[1];
myObject.prop = "Yet another new value";
print();

Object.assign(arrayOfObjects[2], {newProp: 'Elo'});

function print(){
  console.log(arrayOfObjects);
  console.log(copyOfArrayOfObjects);
}
