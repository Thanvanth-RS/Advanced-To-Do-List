document.addEventListener('DOMContentLoaded', () => {
  const taskTitleInput = document.getElementById('task-title');
  const taskDescInput = document.getElementById('task-desc');
  const taskDeadlineInput = document.getElementById('task-deadline');
  const taskPriorityInput = document.getElementById('task-priority');
  const addTaskButton = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  // Add task
  addTaskButton.addEventListener('click', () => {
    const title = taskTitleInput.value.trim();
    const desc = taskDescInput.value.trim();
    const deadline = taskDeadlineInput.value;
    const priority = taskPriorityInput.value;

    if (!title) {
      alert('Task title is required!');
      return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    // Task title
    const taskTitle = document.createElement('div');
    taskTitle.className = 'task-title';
    taskTitle.textContent = title;

    // Task description
    const taskDesc = document.createElement('div');
    taskDesc.className = 'task-desc';
    taskDesc.textContent = desc || 'No description provided';

    // Task deadline
    const taskDeadline = document.createElement('div');
    taskDeadline.className = 'task-deadline';
    taskDeadline.textContent = deadline ? `Deadline: ${deadline}` : 'No deadline set';

    // Task priority
    const taskPriority = document.createElement('div');
    taskPriority.className = `task-priority priority-${priority}`;
    taskPriority.textContent = priority.charAt(0).toUpperCase() + priority.slice(1) + ' Priority';

    // Task actions (Edit/Delete)
    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(taskItem, title, desc, deadline, priority));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', () => taskItem.remove());

    taskActions.appendChild(editButton);
    taskActions.appendChild(deleteButton);

    // Append all elements
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskDesc);
    taskItem.appendChild(taskDeadline);
    taskItem.appendChild(taskPriority);
    taskItem.appendChild(taskActions);

    taskList.appendChild(taskItem);

    // Clear input fields
    taskTitleInput.value = '';
    taskDescInput.value = '';
    taskDeadlineInput.value = '';
    taskPriorityInput.value = 'low';
  });

  // Edit task function
  function editTask(taskItem, title, desc, deadline, priority) {
    taskTitleInput.value = title;
    taskDescInput.value = desc;
    taskDeadlineInput.value = deadline;
    taskPriorityInput.value = priority;

    taskItem.remove();
  }
});
