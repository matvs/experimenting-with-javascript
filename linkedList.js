//Experiments with generators and iterable protocol

var List = function(){
  var self = this;
  var HEAD = last = null;
  
  var ListEntry = function(value, prev){
    var that = this;
    that.value = value;
    that.prev = prev
  }

  self.append = function(value){
    last = new ListEntry(value, last);
    if(!HEAD){
      HEAD = last;
    }
    return self;
  }

  self.every = function*(){
    prev = last;
    while(prev){
      yield prev.value;
      prev = prev.prev;
    }
  }
  
  self[Symbol.iterator] = function(){
    return {
      prev: last,
      next: function(){
        if(this.prev){
          var el = this.prev;
          this.prev = el.prev;
          return { value:el.value,done:false}
        }
        return {value: undefined, done:true}
      }
    }
  }
}


//example
var list = new List();
list.append(0).append(5).append(8).append(13);

console.log('Using iterable protocol')
for(let el of list){
  console.log(el)
}

console.log('Using generator')
for(let el of list.every()){
  console.log(el)
}

console.log('Using iterable protocol')
for(let el of list){
  console.log(el)
}

console.log('Using generator')
for(let el of list.every()){
  console.log(el)
}
