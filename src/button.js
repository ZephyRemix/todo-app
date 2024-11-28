import taskModal from './taskModal.js';

const button = (function() {
    
    function createButton() {
        const buttonGroup = document.createElement("div");
        buttonGroup.classList.add("task__action--controller");

        const editButton = generateButton("Edit");
        const deleteButton = generateButton("Delete");

        buttonGroup.appendChild(editButton);
        buttonGroup.appendChild(deleteButton);

        buttonGroup.addEventListener("click", function(e) {
            addTaskBtnEventListener(e);
        });

        return buttonGroup;
    }

    function generateButton(name) {
        const button = document.createElement("button");

        if (name === "Edit") {
            button.id = "button__edit";
        } else if (name === "Delete") {
            button.id = "button__delete";
        } else {
            console.log("Error rendering button - only edit or delete button allowed");
        }
        
        button.textContent = name;

        return button;
    }

    function addTaskBtnEventListener(e) {
        console.log(e.target.id);
        if (e.target.id == "button__edit") {
            // generate a copy of the edit modal
            // request taskModal class to querySelect the #addTaskButton element and change it to #editTaskButton instead
            // re-render based on readily available information (name, due date, priority)
            const name = document.querySelector(".container");
            console.log(name.value);
        }
    }

    return {createButton};
    
})();

export default button;