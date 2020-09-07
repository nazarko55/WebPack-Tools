import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
var baseUrl = 'https://5f33e64ccfaf5a001646b6d1.mockapi.io/api/v1/tasks';

var getTasksList = function getTasksList() {
  return fetch(baseUrl).then(function (res) {
    return res.json();
  });
};

var getTask = function getTask(taskId) {
  return fetch("".concat(baseUrl, "/").concat(taskId)).then(function (res) {
    return res.json();
  });
};

var createTask = function createTask(taskData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });
};

var updateTask = function updateTask(taskId, taskData) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });
};

var deleteTask = function deleteTask(taskId) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'DELETE'
  });
};

export { getTasksList, getTask, createTask, updateTask, deleteTask };