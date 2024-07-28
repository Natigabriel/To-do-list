// Select the arrow icon and the dropdown content container
const arrow = document.querySelector('.arrowDown');
const dropDown = document.querySelector('.dropdown-content');

// Function to toggle the dropdown visibility
function toggleDropDown() {
    dropDown.classList.toggle('show');
    // arrow.classList.toggle('rotate-up'); // Uncomment if you want to add a rotate effect on the arrow
}

// Add an event listener to the arrow to toggle the dropdown on click
arrow.addEventListener('click', toggleDropDown);

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('.arrowDown')) {
        if (dropDown.classList.contains('show')) {
            dropDown.classList.remove('show');
        }
    }
});

// Function to toggle dark mode
function darkMode() {
    var body = document.body;
    if (body.style.backgroundColor == 'white' || body.style.backgroundColor == '') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
}

// Select the display container for the input modal
const displayContainer = document.querySelector('.displayContainer');

// Add an event listener to the add button to toggle the display container and blur the body
const addContainer = document.getElementById('addbtn').addEventListener('click', function() {
    displayContainer.classList.toggle('showDisplayContainer');
    document.body.classList.toggle('blurBody');
});

// Select the input field and the cancel/apply buttons
const taskInput = document.getElementById('taskInput');
const cancel = document.querySelector('#firstBtn');
const apply = document.querySelector('#secondBtn');

// Add an event listener to the cancel button to clear the input field and hide the modal
cancel.addEventListener('click', function() {
    displayContainer.classList.remove('showDisplayContainer');
    document.body.classList.remove('blurBody');
    taskInput.value = '';
});

// Select the figure and its replacement container
let figure = document.querySelector('figure');
const figReplacement = document.querySelector('.figReplacement');

// Select the task list containers
const taskList = document.getElementById('taskList');
const allTasks = document.getElementById('allTasks');
const completedTasks = document.getElementById('completedTasks');

apply.addEventListener('click', function(){
    if (taskInput.value.trim() !== '') {
        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                completedTasks.appendChild(listItem);
            } else {
                allTasks.appendChild(listItem);
            }
        });

        const taskText = document.createTextNode(taskInput.value);

        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        allTasks.appendChild(listItem);

        taskInput.value = ''; // Clear the input field after adding the task
    }

    figure.style.display = 'none'; // Hide the figure (image container)
    figReplacement.classList.add('taskDisplay'); // Show the tasks container
    displayContainer.classList.remove('showDisplayContainer');
    document.body.classList.remove('blurBody');
});

// Show/hide task lists based on the dropdown selection
const allLink = document.getElementById('allLink');
const completeLink = document.getElementById('completeLink');

// Event listener for the "All" link to show all tasks and hide completed tasks
allLink.addEventListener('click', function() {
    allTasks.style.display = 'block';
    completedTasks.style.display = 'none';

    figure.classList.toggle('figDisplayImage'); // Toggle the figure display
    figReplacement.classList.toggle('taskDisplay'); // Toggle the task replacement display
    displayContainer.classList.remove('showDisplayContainer'); // Hide the display container
    document.body.classList.remove('blurBody'); // Remove the blur effect
});

// Event listener for the "Complete" link to show completed tasks and hide all tasks
completeLink.addEventListener('click', function() {
    allTasks.style.display = 'none';
    completedTasks.style.display = 'block';

    figure.classList.toggle('figDisplayImage'); // Toggle the figure display
    figReplacement.classList.toggle('taskDisplay'); // Toggle the task replacement display
    displayContainer.classList.remove('showDisplayContainer'); // Hide the display container
    document.body.classList.remove('blurBody'); // Remove the blur effect
});
