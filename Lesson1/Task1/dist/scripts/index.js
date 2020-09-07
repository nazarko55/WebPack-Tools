import { renderTasks } from './renderTasks.js';
import { onCreateTask } from './createTask.js';
import { onDeleteTodo, onStatusTodoChange } from './changeTask.js';
var listElem = document.querySelector('.list');
var createTodoBtn = document.querySelector('.create-task-btn');
document.addEventListener('DOMContentLoaded', function () {
  renderTasks();
});
createTodoBtn.addEventListener('click', onCreateTask);
listElem.addEventListener('click', onStatusTodoChange);
listElem.addEventListener('click', onDeleteTodo);