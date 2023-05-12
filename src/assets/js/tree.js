// 树的遍历
const tree = {
  name: 'root',
  children: [
    {
      name: 'a',
      children: [
        { name: 'b', children: [{ name: 'e' }] },
        { name: 'c', children: [{ name: 'f' }] },
        { name: 'd', children: [{ name: 'g' }] },
      ],
    },
    {
      name: 'a2',
      children: [
        { name: 'b2', children: [{ name: 'e2' }] },
        { name: 'c2', children: [{ name: 'f2' }] },
        { name: 'd2', children: [{ name: 'g2' }] },
      ],
    },
  ],
};

// 深度优先 递归
const deepSearch = function (treeNode) {
  if (!treeNode) {
    return;
  }
  console.log(treeNode.name);
  treeNode.children && treeNode.children.forEach(deepSearch);
};
// 深度优先 栈
const deepSearchStacks = function (treeNode) {
  if (!treeNode) {
    return;
  }
  let queue = [treeNode];
  while (queue.length > 0) {
    const nextNode = queue.shift();
    // 输出
    console.log(nextNode.name);
    if (nextNode.children) {
      // 取出节点后检查是否有子节点，有则推入前栈
      queue = [...nextNode.children, ...queue];
    }
  }
};

// 广度优先 栈
const wideSearch = function (treeNode) {
  if (!treeNode) {
    return;
  }
  const queue = [treeNode];

  while (queue.length > 0) {
    const nextNode = queue.shift();
    // 输出
    console.log(nextNode.name);
    if (nextNode.children) {
      nextNode.children.forEach((node) => queue.push(node));
    }
  }
};

// deepSearch(tree)
// wideSearch(tree)
// deepSearchStacks(tree)
