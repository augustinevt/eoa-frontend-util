function* bubbleSort() {
  const data = [4,3,2];
  const newArray = [4,3,2];

  for (let i in data) {
// console.log('a', a)
    for (let j in data) {
      let a = data[j];
      let foo = parseInt(j) + 1;
// console.log(foo);



//       let b = data[j];
// console.log(`${a} and ${b}`)
//       if (a === b) {
// console.log(`${a} is equal to ${b}`)
//       } else if (a > b) {
//         newArray[j] = a;
//         newArray[j - 1] = b;
// console.log(`${a} is greater than ${b}`)
//       } else if ( a < b ) {
// console.log(`${a} is less than ${b}`)
//         // newArray[i] = b;
//         // newArray[i - 1] = a;
//     }
      yield data;
    }
  }

  return;
};

export default bubbleSort;
