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


class Queue{

	constructor(){
		this.first = new Stack();
		this.second = new Stack();
	}

	add(record){
		this.first.add(record);
	}
	remove(){
		var record;
		while(this.first.peek()){
			this.second.add(this.first.remove());
		}
		if(this.second.isEmpty())
			return "Stack is empty";
		else{
			record =  this.second.remove();
			while(this.second.peek()){
				this.first.add(this.second.remove());
			}
		}
		return record;
	}
	peek(){
		var record;
		while(this.first.peek()){
			this.second.add(this.first.remove());
		}
		if(this.second.isEmpty())
			return "Stack is empty";
		else{
			record =  this.second.peek();
			while(this.second.peek()){
				this.first.add(this.second.remove());
			}
		}
		return record;
	}
}