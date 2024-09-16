const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value;
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove();
    }
});