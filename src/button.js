import screenController from "./screenController";

const button = (function() {
    
    function createButton() {
        const buttonGroup = document.createElement("div");
        buttonGroup.classList.add("task__action--controller");

        const editButton = generateButton("Edit");
        const deleteButton = generateButton("Delete");

        buttonGroup.appendChild(editButton);
        buttonGroup.appendChild(deleteButton);

        screenController.addTaskBtnEventListener(buttonGroup);

        return buttonGroup;
    }

    function generateButton(name) {
        const button = document.createElement("button");
        button.textContent = name;

        return button;
    }

    return {createButton};
    
})();

export default button;