function getElementIndex(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return i;
    }
  }

  return -1;
}

function printUniqueElements(ip) {
  let op = [];
  for (let i = 0; i < ip.length; i++) {
    index = getElementIndex(op, ip[i]);
    if (index === -1) {
      op.push(ip[i]);
    }
  }

  console.log("Unique numbers are:" + op);
}

a = [2, 14, 34, 56, 12, 2, 14, 34, 6, 8, 7, 4, 12];
printUniqueElements(a);

b = [56, 12, 2, 14, 34, 55, 67, 89];
printUniqueElements(b);
