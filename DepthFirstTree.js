class Node{
	constructor(data){
		this.data = data;
		this.children = [];
	}

	add(data){
		return this.children.push(new Node(data));
	}
}

class Tree{
	constructor(){
		this.root= null;
	}

	traverseDF(fn){
		var arr = [this.root];

		while(arr.length){
			const node = arr.shift();

			arr.unshift(...node.children);
			fn(node);
		}
	}
}

var node =new Node(3);
node.add(8);

var tree = new Tree();
tree.root = node;