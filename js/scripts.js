function ToDoList() {
  this.tasks =  [];
};

ToDoList.prototype.addTask = function(input) {
  this.tasks.push(input);
};

ToDoList.prototype.removeTask = function(input) {
  if (this.tasks.includes(input)) {
    this.tasks.splice(this.tasks.indexOf(input), 1);
  } else {
    alert("the list does not include " + input + ".");
  }
};

ourList = new ToDoList();
