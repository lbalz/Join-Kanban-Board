// Load and render board tasks
let currentDraggedElement = null;
let globalAllTasks;

async function loadAndRenderBoardTasks() {
    let allTasks = await loadAllTasksFromDB();

    globalAllTasks = allTasks;

    renderToDoTasks(allTasks[0]);
    renderInProgressTasks(allTasks[1]);
    renderAwaitFeedbackTasks(allTasks[2]);
    renderDoneTasks(allTasks[3]);
}

//! Bei Drag & Drop werden die Daten von toDoTasks, inProgressTasks, awaitFeedbackTasks & doneTasks
//! hin und her geschoben, was bedeutet, dass darauf geachtet werden muss, dass dann auch das noTaskTemplate
//! geladen wird. Wie genau ich das mache weiß ich noch nicht!

//! Tickets render Template noch fertig mit den Daten machen und gucken wie das mit Subtasks etc. am besten gemacht wird

// Render todo tasks
function renderToDoTasks(data) {
    let toDoTasksRef = document.querySelector("#toDoTasks");
    toDoTasksRef.innerHTML = "";

    if (!data ||
        data.length === 0 ||
        data[0] === null ||
        data[0] === undefined ||
        Object.keys(data[0]).length === 0) {
        toDoTasksRef.innerHTML = noTaskTemplate('"To Do"');
    } else {
        data.forEach(task => {
            toDoTasksRef.innerHTML += taskTemplate(task);
        });
    }
}


// Render in progress tasks
function renderInProgressTasks(data) {
    let inProgressTasksRef = document.querySelector("#inProgressTasks");
    inProgressTasksRef.innerHTML = "";

    if (!data ||
        data.length === 0 ||
        data[0] === null ||
        data[0] === undefined ||
        Object.keys(data[0]).length === 0) {
        inProgressTasksRef.innerHTML = noTaskTemplate('"In progress"');
    } else {
        data.forEach(task => {
            inProgressTasksRef.innerHTML += taskTemplate(task);
        });
    }
}


// Render await feedback tasks
function renderAwaitFeedbackTasks(data) {
    let awaitFeedbackTasksRef = document.querySelector("#awaitFeedbackTasks");
    awaitFeedbackTasksRef.innerHTML = "";

    if (!data ||
        data.length === 0 ||
        data[0] === null ||
        data[0] === undefined ||
        Object.keys(data[0]).length === 0) {
        awaitFeedbackTasksRef.innerHTML = noTaskTemplate('"Await feedback"');
    } else {
        data.forEach(task => {
            awaitFeedbackTasksRef.innerHTML += taskTemplate(task);
        });
    }
}


// Render done tasks
function renderDoneTasks(data) {
    let doneTasksRef = document.querySelector("#doneTasks");
    doneTasksRef.innerHTML = "";

    if (!data ||
        data.length === 0 ||
        data[0] === null ||
        data[0] === undefined ||
        Object.keys(data[0]).length === 0) {
        doneTasksRef.innerHTML = noTaskTemplate('"Done"');
    } else {
        data.forEach(task => {
            doneTasksRef.innerHTML += taskTemplate(task);
        });
    }
}


// Drag & Drop functions
// Update Board
function updateBoardHTML() {
    // update board html after dragging
}

// Dragging functions
function startDraggingElement(id) {
    currentDraggedElement = id;
}


function handleDragOver(event) {
    event.preventDefault();
}


function handleDrop(event, category) {
    event.preventDefault();
    moveCardToNewCategory(category)
}


// Change Category Logical functions
// Get categoryIndex & taskIndex
function findTaskAndCategoryIndex(taskId) {
    for (let categoryIndex = 0; categoryIndex < globalAllTasks.length; categoryIndex++) {
        const taskIndex = globalAllTasks[categoryIndex].findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            return { categoryIndex, taskIndex};
        }
    }
    return null;
}


// Get category array index
function getCategoryArrayIndex(category) {
    const categoryMap = {
        "to_do" : 0,
        "in_progress" : 1,
        "await_feedback" : 2,
        "done" : 3
    };

    return categoryMap[category];
}

//! Drag & Drop Functions nochmal überall anschauen wo was ist, wo was hingehört und 
//! dann einmal nochmal alles hier unten überarbeiten bzw. neu machen, Ansatz ist gut
//! aber nicht perfekt.
function moveCardToNewCategory(category, allTasksArrayIndex) {
    try {
        const indices = findTaskAndCategoryIndex(currentDraggedElement);
        if(!indices) {
            console.error("Can't find Task!");
            return;
        }

        const taskToMove = globalAllTasks[indices.arrayIndex][indices.taskIndex];
        const oldCategory = taskToMove.category;

        taskToMove.category = category;

        globalAllTasks[indices.arrayIndex].splice(indices.taskIndex, 1);

        const newArrayIndex = getCategoryArrayIndex(category);
        globalAllTasks[newArrayIndex].push(taskToMove);

    } catch (error) {
        console.error("Failed to move Task:", error);

        const newArrayIndex = getCategoryArrayIndex(category);
        const oldArrayIndex = getCategoryArrayIndex(oldCategory);

        const task = globalAllTasks[newArrayIndex].pop();
        task.category = oldCategory;
        globalAllTasks[oldArrayIndex].push(task);

        updateBoardHTML();
    }
}


// Add / Remove classes from Container / Card
function addClassForRotation(id) {
    document.getElementById(`${id}`).classList.add("rotateCard");
}


function removeClassForRotation(id) {
    document.getElementById(`${id}`).classList.remove("rotateCard");
}


function addHighlightClass(id) {
    document.getElementById(`${id}`).classList.add("containerGetHovered");
}


function removeHighlightClass(id) {
    document.getElementById(`${id}`).classList.remove("containerGetHovered");
}