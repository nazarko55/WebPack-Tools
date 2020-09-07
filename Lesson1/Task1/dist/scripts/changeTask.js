import { renderTasks } from './renderTasks.js';
import { updateTask, getTask, deleteTask } from './tasksGateway.js';
export var onStatusTodoChange = function onStatusTodoChange(event) {
  var isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  ;
  var currentTaskIdex = event.target.closest('.list__item').dataset.id;
  getTask(currentTaskIdex).then(function (currentTask) {
    if (!currentTask.done) {
      currentTask.done = true;
      currentTask.finishedDay = new Date().getTime();
    } else {
      currentTask.done = false;
      currentTask.finishedDay = null;
    }

    return currentTask;
  }).then(function (dataToUpdate) {
    updateTask(currentTaskIdex, dataToUpdate).then(function () {
      renderTasks();
    });
  });
};
export var onDeleteTodo = function onDeleteTodo(event) {
  var isDelBtn = event.target.classList.contains('list__item__delete-btn');

  if (!isDelBtn) {
    return;
  }

  ;
  var currentTaskIdex = event.target.closest('.list__item').dataset.id;
  deleteTask(currentTaskIdex).then(function () {
    renderTasks();
  });
};