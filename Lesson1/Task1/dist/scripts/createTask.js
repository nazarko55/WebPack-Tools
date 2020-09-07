import { renderTasks } from './renderTasks.js';
import { createTask } from './tasksGateway.js';
export var onCreateTask = function onCreateTask() {
  var inputTodoCreator = document.querySelector('.task-input');

  if (inputTodoCreator.value === '') {
    return;
  }

  ;
  var newTask = {
    text: inputTodoCreator.value,
    done: false,
    createDate: new Date(),
    finishedDay: null
  };
  createTask(newTask).then(function () {
    renderTasks();
  });
  inputTodoCreator.value = '';
};