// script.js


// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.

//Section 2: App State Variables
let tasks = [];

//Section 3: Cached Element References
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");



 //Function to handle form submissions
 function handleSubmission(event){
    event.preventDefault();

    //TODO: Get form input values
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    // TODO: Validate input fields
    if(taskName === '' || taskDeadline === ''){
        alert('Task name and deadline are needed!');
        return;
    }

    // TODO: Update the tasks array
    tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline, isCompleted: false })

    render();
 }
 function render(){
    // TODO: Use array methods to create a new table row of data for each item in the array
     taskTable.innerHTML = tasks.map((task, index) => `
        <tr class="${task.isCompleted ? 'task-was-completed' : ''}"> 
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.deadline}</td>
            <td><button onclick="markTaskComplete(${index})">Complete</button></td>
            <td><button onclick="removeTask(${index})">Remove</button></td>
        </tr>
    `).join('');
 }
 
 function init(){
    taskTable.innerHTML = ''; //Clear the table
    tasks = []; //Reset the tasks array
    render(); // Call the render function
 }
taskForm.addEventListener('submit', handleSubmission);
init();

function removeTask(index) {
    tasks.splice(index, 1);
    render();
}

function markTaskComplete(index) {
    tasks[index].isCompleted = !tasks[index].isCompleted; // Toggle completion status
    render();
}

 
