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
 function handSubmission(event){
    event.preventDefault();

    //TODO: Get form input values
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const deadLine = document.getElementById('taskDeadline').value;

    // TODO: Validate input fields
    if(taskName.value === '' && deadLine.value === ''){
        alert('Task name and deadline are needed!');
        return;
    }

    // TODO: Update the tasks array
    tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline })

    render();
 }
 function render(){
    // TODO: Use array methods to create a new table row of data for each item in the array
    taskTable.innerHTML = tasks.map(task => `
    <tr>
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${task.deadline}</td>
        <td><button onclick="markTaskComplete(this)">Complete</button></td>
        <td><button onclick="removeTask(this)">Remove</button></td>
    </tr>
`).join('');
 }
 
 function init(){
    taskTable.innerHTML = ''; //Clear the table
    tasks = []; //Reset the tasks array
    render(); // Call the render function
 }


 