import screenController from "./screenController";

const taskModal = (function() {

    function createTaskModal() {
        const taskModalDiv = document.createElement("div");
        taskModalDiv.classList.add("task__modal");

        let form = document.createElement("form");

        form = generateNameInput(form);

        const taskDetailsContainer = generateTaskDetails();
        const taskControllerContainer = generateTaskController();
        
        form.appendChild(taskDetailsContainer);        
        taskModalDiv.appendChild(form);
        taskModalDiv.appendChild(taskControllerContainer);

        return taskModalDiv;
    }
    


    function generateNameInput(form) {
        // Create the label element
        const label = document.createElement("label");
        label.setAttribute("for", "task");
        label.classList.add("visually-hidden");
        label.textContent = "Task name";

        // Create the input element
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "name");
        input.setAttribute("name", "name");
        input.setAttribute("required", "");
        input.setAttribute("placeholder", "Meditation");

        form.appendChild(label);
        form.appendChild(input);

        return form;
    }

    function generateTaskDetails() {
        // Create the parent container
        const taskDetailsContainer = document.createElement("div");
        taskDetailsContainer.classList.add("task__new-details");

        // Create the label for date
        const dateLabel = document.createElement("label");
        dateLabel.setAttribute("for", "date");
        dateLabel.classList.add("visually-hidden");
        dateLabel.textContent = "Date";

        // Create the input for date
        const dateInput = document.createElement("input");
        dateInput.setAttribute("type", "date");
        dateInput.setAttribute("id", "date");
        dateInput.setAttribute("name", "date");

        // Append date label and input to container
        taskDetailsContainer.appendChild(dateLabel);
        taskDetailsContainer.appendChild(dateInput);

        // Create the label for priority
        const priorityLabel = document.createElement("label");
        priorityLabel.setAttribute("for", "priority");
        priorityLabel.classList.add("visually-hidden");
        priorityLabel.textContent = "Priority level";

        // Create the select dropdown for priority
        const prioritySelect = document.createElement("select");
        prioritySelect.setAttribute("name", "priority");
        prioritySelect.setAttribute("id", "priority");

        // Create options for the select dropdown
        const priorities = [
        { value: "low", text: "Low" },
        { value: "medium", text: "Medium" },
        { value: "high", text: "High" },
        { value: "none", text: "None" },
        ];

        priorities.forEach((priority) => {
            const option = document.createElement("option");
            option.setAttribute("value", priority.value);
            option.textContent = priority.text;
            prioritySelect.appendChild(option);
        });

        // Append priority label and select to container
        taskDetailsContainer.appendChild(priorityLabel);
        taskDetailsContainer.appendChild(prioritySelect);

        return taskDetailsContainer;
    }

    function generateTaskController() {
        const taskControllerContainer = document.createElement("div");
        taskControllerContainer.classList.add("task__modal--controller");

        const cancelTaskBtn = document.createElement("button");
        cancelTaskBtn.id = "cancelTaskButton";
        cancelTaskBtn.textContent = "Cancel";

        const addTaskBtn = document.createElement("button");
        addTaskBtn.id = "addTaskButton";
        addTaskBtn.textContent = "Add Task";

        screenController.addModalBtnEventListener(cancelTaskBtn);
        screenController.addModalBtnEventListener(addTaskBtn);

        taskControllerContainer.appendChild(cancelTaskBtn);
        taskControllerContainer.appendChild(addTaskBtn);

        return taskControllerContainer;
    }

    return {createTaskModal};
})();

export default taskModal;