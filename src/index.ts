const doubleAfter2Seconds = (x: number) => {
  return new Promise((resolve) => {
    console.log("waiting 2s");
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
};

// doubleAfter2Seconds(20).then((result) => {
//   console.log(result);
// });

const addPromise = (x) => {
  return new Promise((resolve) => {
    doubleAfter2Seconds(10).then((a) => {
      doubleAfter2Seconds(20).then((b) => {
        doubleAfter2Seconds(30).then((c) => {
          resolve(x + a + b + c);
        });
      });
    });
  });
};

// addPromise(10).then((sum) => {
//   console.log(sum);
// });

const addAsync = async (x: number) => {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);

  return x + a + b + c;
};

// addAsync(10).then((result) => {
//   console.log(result);
// });

//async within a promise

const asyncWpromise = (x: number) => {
  return new Promise(async (resolve) => {
    console.log("before await, should wait 2s");
    await doubleAfter2Seconds(x);
    console.log("after await");
    resolve("done!");
  });
};

asyncWpromise(10).then((result) => {
  console.log(result);
});
