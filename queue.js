class Queue{
	constructor(){
		this.data = [];
		this.isEmpty = function(){
			return this.data.length == 0;
		}
	}
	add(records) {
		this.data.push(records);
	}

	remove(){
		if(this.isEmpty())
			return "Underflow";

		return this.data.shift();
	}

	first(){
		if(this.isEmpty())
			return "Queue is empty"
		return this.data[0];
	}

	last(){
		if(this.isEmpty())
			return "Queue is empty"
		return this.data[this.data.length-1];
	}
	size(){
		if(this.isEmpty())
			return "Queue is empty";
		return this.data.length;
	}
}

var q = new Queue();
q.add(2);
q.add(7);
q.add(9);
q.add(1);
console.log(q);
q.remove();
console.log(q);