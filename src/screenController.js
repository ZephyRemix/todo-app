import task from './task.js';
import taskModal from './taskModal.js';

const screenController = (function() {
    
    const taskContainer = document.querySelector(".task__container");
    const taskWrapper = document.querySelector(".task__wrapper");
    const displayAddTaskModal = document.querySelector(".addTask");

    displayAddTaskModal.addEventListener("click", renderAddTaskModal);

    function renderAddTaskModal() {
        displayAddTaskModal.remove();
        console.log(taskModal);
        taskModal.render();
    }

    function renderTask(e) {
        const name = document.querySelector("#name");
        const dueDate = document.querySelector("#date");
        const priority = document.querySelector("#priority");

        console.log(name.value);
        task.createTask(name, dueDate, priority);
    }

    function addModalBtnEventListener(btn) {
        if (btn.id === "addTaskButton") {
            renderTask(e);
        } else if (btn.id === "cancelTaskButton") {

        }
    }

    return {addModalBtnEventListener};
})();

export default screenController;