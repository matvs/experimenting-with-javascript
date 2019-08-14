let createPromise = ms => new Promise((resolve, reject) => {
  setTimeout(() => resolve(ms), ms) 
});

let log = info => console.log(info);

let promise1 = createPromise(1);
let promise2 = createPromise(2);
let promise3 = createPromise(3);
let promise4 = createPromise(4);

let allThen = () => Promise.all([promise3, promise4]).then(() => {})
let all = () => Promise.all([promise3, promise4])

promise1.then(data => {
  log(data);
  return promise2;
}).then(log)

promise1.then(data => {
  log(data);
  return promise2.then(data => {
    log(data);
    return promise3;
  });
}).then(log)

promise1.then(data => {
  log(data);
  return promise2.then(data => {
    log(data);
    return 'fixed value';
  });
}).then(log)

promise1.then(data => {
  log(data);
  return promise2.then(data => {
    log(data);
    return 'fixed value';
  });
}).then(log)
  .then(() => promise3)
  .then(log)

promise1.then(data => {
  log(data);
  return promise2.then(data => {
    log(data);
    return allThen();
  });
}).then(log)


promise1.then(data => {
  log(data);
  return promise2.then(data => {
    log(data);
    return all();
  });
}).then(log)

Promise.all([promise1, promise2, all()]).then(log)

promise1.then(data => {
  log(data);
  return promise2.then(data => {
    log(data);
    if(data == 3){
	return Promise.reject()
    }
  });
}).then(log)

promise1.then(data => {
  log(data);
  return promise2.then(data => {
    log(data);
    if(data == 3){
	return Promise.reject()
    }
    return Promise.resolve()
  });
}).then(log)

promise1.then(data => {
  log(data);
  return promise3.then(data => {
    log(data);
    if(data == 3){
	return Promise.reject()
    }
  });
}).then(log)

