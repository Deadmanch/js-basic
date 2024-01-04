'use strict';

const newTask = {
	tasks: [
		{
			id: 1,
			title: 'test',
			description: 'test',
			priority: 1,
		},
	],
	findTask: function (id) {
		return this.tasks.find(task => task.id === id);
	},
};
const toDoList = {
	tasks: [
		{
			title: 'Помыть посуду',
			id: 1,
			priority: 1,
		},
	],
	addTask: function (title, description = null, priority) {
		let newTaskId = 1;

		while (true) {
			const taskExists = this.findTask(newTaskId);

			if (!taskExists) {
				break;
			}
			newTaskId++;
		}

		const newTask = {
			id: newTaskId,
			title,
			priority,
		};
		if (description !== null && description !== '') {
			newTask.description = description;
		}
		return this.tasks.push(newTask);
	},
	findTask: function (id) {
		return this.tasks.find(task => task.id === id);
	},

	deleteTask: function (id) {
		const task = this.findTask(id);

		if (task !== undefined) {
			const index = this.tasks.indexOf(task);
			this.tasks.splice(index, 1);
		}
	},
	updateTask: function (id, title, priority) {
		const task = this.findTask(id);

		if (task !== undefined) {
			if (title) {
				task.title = title;
			}
			if (priority) {
				task.priority = Number(priority);
			}
		}
	},
	sortTaskByPriority: function () {
		return this.tasks.sort((a, b) => a.priority - b.priority);
	},
};

toDoList.addTask.apply(newTask, ['Генеральная уборка', 'Дополнительно вынести мусор', 10]);
toDoList.addTask.apply(newTask, ['Сдать отчет', '', 3]);
toDoList.addTask.apply(newTask, ['Сходить к зубному', 10]);
toDoList.deleteTask.call(newTask, 3);
const updateTaskNewTask = toDoList.updateTask.bind(newTask);
updateTaskNewTask(4, 'Пойти в зал', 5);
const sortTaskByPriorityNewTask = toDoList.sortTaskByPriority.bind(newTask);
sortTaskByPriorityNewTask();

console.log(newTask.tasks);
