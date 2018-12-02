class Node{
	constructor(data){
		this.data = data;
		this.children = [];
	}

	add(data){
		this.children.push(new Node(data));
	}

	remove(data){
		this.children = this.children.filter(node => {
			return node.data !== data;
		});
	}
}



class Tree{
	constructor(){
		this.root = null;
	}
}

var node = new Node(8);
node.add(4);

console.log(node);

var tree = new Tree();
tree.root= node;