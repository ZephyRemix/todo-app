import task from './task.js';
import taskModal from './taskModal.js';

const screenController = (function() {
    // cache DOM 
    const displayModalButton = document.querySelector(".addTask");
    // const hideModalButton = document.querySelector("#cancelTaskButton");
    // const addTaskButton = document.querySelector("#addTaskButton");
    

    const taskContainer = document.querySelector(".task__container");
    const taskColumnWrapper = document.querySelector(".task__wrapper");
    const taskItemWrapper = document.querySelector(".task__item");
    const taskName = document.querySelector("#name");
    const taskDate = document.querySelector("#date");
    const taskPriority = document.querySelector("#priority");
    
    // bind events
    displayModalButton.addEventListener("click", displayModal);
    // hideModalButton.addEventListener("click", hideModal);
    // addTaskButton.addEventListener("click", addTask);

    function displayModal() {
        displayModalButton.remove();
        const taskModalContainer = taskModal.createTaskModal();
        taskContainer.appendChild(taskModalContainer);
    }

    function hideModal(taskModal) {
        taskModal.classList.add("task__modal_hidden");
        taskColumnWrapper.appendChild(displayModalButton);
    }

    function addTask(e) {
        const taskModal = document.querySelector(".task__modal");
        const form = document.querySelector("form");
        const taskName = document.querySelector("#name");
        const taskDate = document.querySelector("#date");
        const taskPriority = document.querySelector("#priority");

        console.log()
        task.createTask(taskName.value, taskDate.value, taskPriority.value);
        form.reset();
        hideModal(taskModal);
    }

    function addTaskBtnEventListener(btnGroup) {
        btnGroup.addEventListener("click", function(e) {
            runBtnAction(e);
        });
    }

    function runBtnAction(e) {
        const taskItem = e.target.parentElement.parentElement.parentElement;
        if (e.target.textContent === "Delete") {
            taskItem.remove();
        } else if (e.target.textContent === "Edit") {
            const editTaskModal = taskModalContainer.createTaskModal();
            editTaskModal.classList.remove("task__modal_hidden");
            taskItem.appendChild(editTaskModal);
        } else {
            console.log("Error in button clicked");
            return;
        }
    }

    function addModalBtnEventListener(btn) {
        if (btn.id === "cancelTaskButton") {
            btn.addEventListener("click", hideModal);
        } else if (btn.id === "addTaskButton") {
            btn.addEventListener("click", function(e) {
                addTask(e);
            });
        } else {
            console.log("Error in button clicked");
            return;
        }
    }

    return {addTaskBtnEventListener, addModalBtnEventListener};
})();

export default screenController;