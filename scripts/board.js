// Load and render board tasks
let testVar;

async function loadAndRenderBoardTasks() {
    let allTasks = await loadAllTasksFromDB();

    testVar = allTasks;

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




