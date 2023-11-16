var taskInput = document.getElementById('taskInput');
var addTaskButton = document.getElementById('addTask');
var taskList = document.getElementById('taskList');

function addTusk() {
   var taskText = taskInput.value.trim();
   if(taskText === ""){
    return;
   }

var listItem = document.createElement("li");
listItem.textContent = taskText;

var removeButton = document.createElement("button");
removeButton.textContent = "remove";
removeButton.addEventListener("click", function(){
    taskList.removeChild(listItem);
});
listItem.appendChild(removeButton);
taskList.appendChild(listItem);
taskInput.value = "";
}

// add a tast when the button is clicked
addTaskButton.addEventListener("click", addTusk);



//add a task when the enter key is pressed. Use keydown event
taskInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addTusk();
    }
});