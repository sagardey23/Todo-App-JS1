var taskList = [];
function addTask() {
    const inputField = document.getElementById("task").value;
    console.log(inputField);
    const tempObj = {
        name:inputField
    };

    taskList.push(tempObj);

    addTaskOnScreen();
}

function addTaskOnScreen() {
    const newCard = document.createElement("div");
    newCard.setAttribute("class", "child123");

    newCard.innerText = taskList[taskList.length-1].name

    document.getElementById("parent123").appendChild(newCard);
}