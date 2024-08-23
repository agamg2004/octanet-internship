document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">Complete</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    taskList.appendChild(taskItem);
    document.getElementById('new-task').value = '';

    taskItem.querySelector('.complete-btn').addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    taskItem.querySelector('.edit-btn').addEventListener('click', () => {
        const newTaskText = prompt('Edit task:', taskText);
        if (newTaskText !== null) {
            taskItem.querySelector('span').textContent = newTaskText;
        }
    });

    taskItem.querySelector('.delete-btn').addEventListener('click', () => {
        taskItem.remove();
    });
}
