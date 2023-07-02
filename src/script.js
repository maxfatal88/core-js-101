/**
 *    const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
 *    const p = chainPromises(promises, (a, b) => a + b);
 *    p.then((res) => {
 *      console.log(res) // => 6
 *    });
 *
 */

// const arr = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

// function chainPromises(/* array, action */) {
//   throw new Error('Not implemented');
//   return Promise.all(array).then((res) => res.reduce(action, 0)).then((res) => res);
// }

// const action = (a, b) => a + b;

// eslint-disable-next-line semi
// console.log(chainPromises(arr, action));
