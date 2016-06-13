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

var ourList = new ToDoList();
$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();
    var task = $("input#task").val();
    ourList.addTask(task);
    $("#user-input").each(function() {
      this.reset();
    });
    $(".result").empty();
    ourList.tasks.forEach(function(task) {
      $(".result").append("<li class='result-list'>" + task + "</li>");
    });
    $(".result-list").dblclick(function() {
      ourList.removeTask($(this).text());
      this.remove();
    });
  });
});
