'use strict';

/*
 * Написать объект ToDoList, который хранит в себе задачи {'title': 'Помыть посуду', id: 1, priority: 1} и имеет методы:
todo - Добавить задачу
todo - Удалить задачу по id
todo - Обновить имя или приоритет по id
todo - Отсортировать задачи по приоритету
*/

const toDoList = {
	tasks: [
		{
			title: 'Помыть посуду',
			id: 1,
			priority: 1,
		},
	],
	addTask: function (title, priority) {
		let newTaskId = 1;

		while (true) {
			const taskExists = this.findTask(newTaskId);

			if (!taskExists) {
				break;
			}
			newTaskId++;
		}
		const newTask = {
			title,
			id: newTaskId,
			priority,
		};
		return this.tasks.push(newTask);
	},
	findTask: function (id) {
		return this.tasks.find((task) => task.id === id);
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

toDoList.addTask('Генеральная Уборка', 2);
toDoList.addTask('Сдать отчет', 3);
toDoList.addTask('Сходить к зубному', 4);

toDoList.addTask('Спать', 1);
toDoList.deleteTask(3);
console.log(toDoList.tasks);
toDoList.updateTask(5, 'Пойти в спортзал');
console.log(toDoList.tasks);
toDoList.updateTask(5, '', 10);
toDoList.sortTaskByPriority();
console.log(toDoList.tasks);
