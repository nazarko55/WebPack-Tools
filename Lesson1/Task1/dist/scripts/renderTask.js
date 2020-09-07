import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.map";
import "core-js/modules/es.array.slice";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { getTasksList } from './tasksGateway.js';
export var createTasksItem = function createTasksItem(data) {
  var id = data.id,
      text = data.text,
      done = data.done;
  var newTaskItem = document.createElement('li');
  newTaskItem.classList.add("list__item");
  newTaskItem.dataset.id = id;

  if (done) {
    newTaskItem.classList.add('list__item_done');
  }

  var newCheckboxItem = document.createElement('input');
  newCheckboxItem.classList.add('list__item-checkbox');
  newCheckboxItem.setAttribute('type', 'checkbox');
  newCheckboxItem.checked = done;
  var textElem = document.createElement('span');
  textElem.classList.add('list__item__text');
  textElem.textContent = text;
  var deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list__item__delete-btn');
  newTaskItem.append(newCheckboxItem, textElem, deleteBtnElem);
  return newTaskItem;
};
export var createTaskList = function createTaskList(data) {
  return data.sort(function (a, b) {
    if (a.done - b.done !== 0) {
      return a.done - b.done;
    }

    if (a.done === true) {
      return b.finishedDay - a.finishedDay;
    }

    ;
    return new Date(b.createDate) - new Date(a.createDate);
  }).map(function (task) {
    return createTasksItem(task);
  });
};
export var renderTasks = function renderTasks() {
  var listElem = document.querySelector('.list');
  getTasksList().then(function (data) {
    var todoListItems = createTaskList(data);
    listElem.innerHTML = '';
    listElem.append.apply(listElem, _toConsumableArray(todoListItems));
  });
};