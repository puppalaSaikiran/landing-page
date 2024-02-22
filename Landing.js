document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('tasks').innerHTML = localStorage.getItem('tasks') || '';
});

function addTask() {
    const TaskName = document.getElementById('taskName').value;
    const Deadline = document.getElementById('deadline').value;
    const Priority = document.getElementById('priority').value;

    if (TaskName && Deadline && Priority) {
        const TaskElement = document.createElement('li');
        TaskElement.innerHTML =(`<strong>${TaskName}</strong> - Deadline- ${Deadline} - Priority- ${Priority}`);
        
        document.getElementById('tasks').appendChild(TaskElement);

        // Save tasks to local storage
        const currentTasks = localStorage.getItem('tasks') || '';
        localStorage.setItem('tasks', currentTasks + TaskElement.outerHTML);

        // Clear input fields
        document.getElementById('TaskName').value = '';
        document.getElementById('Deadline').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}