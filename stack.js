class Stack{
	constructor(){
		this.data = [];
		this.isEmpty = function(){
			return this.data.length == 0;
		}
	}

	add(records){
		this.data.push(records);
	}

	remove(){
		if(this.isEmpty())
			return "Queue is empty"

		return this.data.pop();
	}

	peek(){
		if(this.isEmpty())
			return "Queue is empty";

		return this.data[this.data.length-1];
	}
}

var stack = new Stack();
stack.add(3);
stack.add(7);
stack.add(9);
stack.add(1);

console.log(stack);