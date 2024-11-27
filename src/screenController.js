import task from './task.js';

const screenController = (function() {
    // cache DOM 
    const displayModalButton = document.querySelector(".addTask");
    const hideModalButton = document.querySelector("#cancelTaskButton");
    const taskModal = document.querySelector(".task__modal");
    const addTaskButton = document.querySelector("#addTaskButton");
    const form = document.querySelector("form");

    const taskList = document.querySelector(".task__list__wrapper");
    const taskName = document.querySelector("#name");
    const taskDate = document.querySelector("#date");
    const taskPriority = document.querySelector("#priority");
    
    // bind events
    displayModalButton.addEventListener("click", displayModal);
    hideModalButton.addEventListener("click", hideModal);
    addTaskButton.addEventListener("click", addTask);
    

    function displayModal() {
        displayModalButton.remove();
        taskModal.classList.remove("task__modal_hidden");
    }

    function hideModal() {
        taskModal.classList.add("task__modal_hidden");
        taskList.appendChild(displayModalButton);
    }

    function addTask() {
        task.createTask(taskName.value, taskDate.value, taskPriority.value);
        form.reset();
        hideModal();
    }


    return {};
})();

export default screenController;