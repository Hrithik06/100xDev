/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = []
  }
  add(todo) {
    this.todoList.push(todo)
    // return this.todoList
  }
  remove(indexOfTodo) {
    this.todoList = this.todoList.filter(
      item => item !== this.todoList[indexOfTodo]
    )
    //   this.todoList.splice(indexOfTodo,1)
    // return this.todoList
  }

  update(index, updatedTodo) {
    if(index<this.todoList.length)
    this.todoList[index] = updatedTodo
    // return this.todoList
  }
  getAll(){
    return this.todoList
  }
  get(indexOfTodo){
    if(this.todoList[indexOfTodo]!== undefined){

      return this.todoList[indexOfTodo]
    }
    else{
      return null
    }
  }
  clear(){
    this.todoList=[]
    return this.todoList
    
  }
}


const todoList = new Todo()

todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		todoList.update(1, 'Updated Task 2');

console.log(todoList.get(1))


module.exports = Todo;
