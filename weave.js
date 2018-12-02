class Queue{
	constructor(){
		this.data = [];
		this.isEmpty = function(){
			return this.data.length == 0;
		}
	}

	add(records){
		return this.data.unshift(records);
	}

	peek(){
		if(this.isEmpty() || this.data.length<1)
			return "Queue is empty";
		return this.data[this.data.length-1];
	}

	remove(){
		if(this.isEmpty())
			return "Queue is empty";
		return this.data.pop();
	}
}

var q = new Queue();
var q1 = new Queue();

q.add(3);
q.add(9);
q.add(8);
q1.add('Hi');
q1.add('Hello');
q1.add('Welcome');

console.log(q);
console.log(q1);

function weave(queue1,queue2){
	var weaveQueue = new Queue();
	while(queue1.peek() || queue2.peek()){
		if(queue1.peek()){
			weaveQueue.add(queue1.remove());
		}else if(queue2.peek()){
			weaveQueue.add(queue2.remove());
		}
	}
	return weaveQueue;
}

var weave = weave(q,q1);
console.log(weave);