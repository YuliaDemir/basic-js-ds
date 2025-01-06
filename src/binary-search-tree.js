const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	start = null;

	addAll (node) {
		if (node) {
			node.add(node.data);
			if (node.left) 
				this.addAll(node.left);
			if (node.right)
				this.addAll(node.right);
		}
	}

	findParent (data) {
		let current = this.start;
		for (;;) {
			if (current.data === data) 
				return current;
			if (current.data > data) {
				if (current.left) {
					current = current.left;
				}
				else {
					return current;
				}
			}
			if (current.data < data) {
				if (current.right) {
					current = current.right;
				}
				else {
					return current;
				}
			}
		}
	}

	root() {
	  return this.start;
	}
  
	add(data) {
		const newNode = new Node(data);
		if (!this.start) {
			start = newNode;
		}
		else {
			const parent = findParent(data);
			if (parent.data > data) {
				parent.left = newNode;
			}
			else if (parent.data < data) {
				parent.right = newNode;
			}
		}
	}
  
	has(data) {
		return findParent(data).data === data ? true : false;
	}
  
	find(data) {
		const parent = findParent(data);
		if (parent.data === data) 
			return parent;
		return null;
	}
  
	remove(data) {
		let currentParent = this.start;
		for (;;) {
			if (current.data === data) 
				curent;
			if (currentParent.data > data) {
				if (current.left) {
					current = current.left;
				}
				else {
					return current;
				}
			}
			if (current.data < data) {
				if (current.right) {
					current = current.right;
				}
				else {
					return current;
				}
			}
		}
		const parent = findParent(data);
		if (parent?.right.data === data) {
			addAll (parent.left);
			addAll (parent.right);
		}		
	}
  
	min() {
		let current = this.start;
	  while (current.left) {
		current = current.left;
	  }
	}
  
	max() {
		let current = this.start;
		while (current.right) {
		  current = current.right;
	}
  }
}

module.exports = {
  BinarySearchTree
};