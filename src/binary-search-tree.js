const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root() {
    throw new NotImplementedError('Not implemented');
  }

  add(data) {
    throw new NotImplementedError('Not implemented');
   /* if (!this.root) {
      this.root = new Node(data);
    } else {
      let node = this.root;
      let newNode = new Node(data);

      while (node) {
        if (data > node.data) {
          if (!node.right) {
            break;
          }
          node = node.right;
        } else {
          if (!node.left) {
            break;
          }
          node = node.left;
        }
      }

      if (data > node.data) {
        node.right = newNode;
      } else {
        node.left = newNode;
      }



    }*/
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  print(root = this.root) {
    if (!root) {
      return;
    }
    console.log(root.data);
    this.print(root.left);
    this.print(root.right);
  }
}



module.exports = {
  BinarySearchTree
};