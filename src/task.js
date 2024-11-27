import button from './button.js'

const task = (function() {
    
    function createTask (name, dueDate, priority) {
        render(name, dueDate, priority);
    }

    function render(name, dueDate, priority) {
        const taskListWrapper = document.querySelector(".task__list__wrapper");
        const taskWrapper = document.createElement("div");
        const taskItem = document.createElement("div");
        const taskName = document.createElement("span");
        const taskDueDate = document.createElement("span");

        const buttonGroup = button.createButton();

        taskName.innerText = name;
        taskDueDate.innerText = dueDate;
        
        taskWrapper.classList.add("task__wrapper");
        taskItem.classList.add("task__item");

        taskItem.appendChild(taskName);
        taskItem.appendChild(taskDueDate);
        taskWrapper.appendChild(taskItem);
        taskWrapper.appendChild(buttonGroup);
        taskListWrapper.appendChild(taskWrapper);
    }
    

    return {createTask};
})();

export default task;