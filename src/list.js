let createList = (value) => {
  return createNode(value);
};
let createNode = (value) => {
  return {
    data: value,
    next: null,
  };
};
let appendList = (list, value) => {
  let node = createNode(value);
  let x = list;
  if (x.next) {
    x = x.next;
  }
  x.next = node;
  return node;
};

let removeFromList = (list, node) => {
  let x = list;
  let p = node;
  while (x !== p && x !== null) {
    p = x;
    x = x.next;
  }
  if (x === null) {
    return false;
  } else if (x === p) {
    x = x.next;
  } else {
    p.next = x.next;
    return list;
  }
};

const travelList = (list, fn) => {
  let x = list;
  if (list !== null) {
    fn(x);
    x = x.next;
  }
};

const list = createList(10);
const node2 = appendList(list, 20);
const node3 = appendList(list, 30);
const node4 = appendList(list, 40);
console.log(list);
travelList(list, (node) => {
  console.log(node.data);
});
// removeFromList(list, 30);
