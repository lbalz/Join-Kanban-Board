// Priority SVG als template functions machen
// generell viel in Template functions auslagern
// Drag and Drop
const DATABASE_URL = "https://join-project-database-default-rtdb.europe-west1.firebasedatabase.app/";

let toDoTasks = [];
let inProgressTasks = [];
let awaitFeedbackTasks = [];
let doneTasks = [];

// Helper function to transform the data structure
function transformTasksDataFromDB(tasksData) {
    if (!tasksData || Object.keys(tasksData).length === 0) {
        return [];
    }

    return Object.entries(tasksData).map(([id, data]) => ({
        id,
        ...data
    }))
}


// Load current category tasks from DB
async function loadCategoryTasksFromDB(category) {
    try {
        const response = await fetch(`${DATABASE_URL}/tasks/${category}.json`);
        
        if(!response.ok) {
            console.error(`Failed to load ${category} tasks`);
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to load tasks from DB:", error);
    }
}


// Load all Tasks from DB
async function loadAllTasksFromDB() {
    try {
        // Get Data for each category
        const [toDo, inProgress, awaitFeedback, done] = await Promise.all([
            loadCategoryTasksFromDB("to_do"),
            loadCategoryTasksFromDB("in_progress"),
            loadCategoryTasksFromDB("await_feedback"),
            loadCategoryTasksFromDB("done")
        ]);

        // save data in variables
        toDoTasks = transformTasksDataFromDB(toDo);
        inProgressTasks = transformTasksDataFromDB(inProgress);
        awaitFeedbackTasks = transformTasksDataFromDB(awaitFeedback);
        doneTasks = transformTasksDataFromDB(done);

        console.log(toDoTasks);
        console.log(inProgressTasks);
        console.log(awaitFeedbackTasks);
        console.log(doneTasks);

        return [toDoTasks, inProgressTasks, awaitFeedbackTasks, doneTasks];
    } catch (error) {
        console.error("Failed to load all tasks from DB:", error);
        return [[], [], [], []];
    }
}


// Send all tasks to DB
async function sendAllTasksToDB() {
    await sendToDoTaskToDB(toDoTask);
    await sendInProgressTaskToDB(inProgressTask);
    await sendAwaitFeedbackTaskToDB(awaitFeedbackTask);
    await sendDoneTaskToDB(doneTask);
}


// Send new created Task to DB
async function sendToDoTaskToDB(toDoTask) {
    try {
        const response = await fetch(DATABASE_URL + "/tasks/to_do.json", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(toDoTask)
        });

        if (response.ok) {
            console.log("To do Task successfully sent to DB!");
        } else {
            console.error("Failed to send to_do task to DB:", response.statusText);
        }
    } catch (error) {
        console.error("Failed to send to_do task to DB:", error);
    }
}

const toDoTask = {
    title : "Plan Sprint",
    due_date : "2024-11-01",
    priority : "urgent",
    category : "toDo",
    assigned_to : ["-O9UbvOcMftPHx95edox", "-O9UiD-olcfuduDrkCp6"],
    type : "Technical Task",
    description : "Description Text",
    subtasks : [
        {
            subtask : "Define project goals",
            completed : false,
            
        },
        {
            subtask : "Assign responsibilities",
            completed : false,
        }
    ]
}


// Send in progress Task to DB
async function sendInProgressTaskToDB(inProgressTask) {
    try {
        const response = await fetch(DATABASE_URL + "/tasks/in_progress.json", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(inProgressTask)
        });

        if (response.ok) {
            console.log("In progress Task successfully sent to DB!");
        } else {
            console.error("Failed to send in_progress task to DB:", response.statusText);
        }
    } catch (error) {
        console.error("Failed to send in_progress task to DB:", error);
    }
}

const inProgressTask = {
    title : "Design Homepage",
    due_date : "2024-11-05",
    priority : "medium",
    category : "inProgress",
    assigned_to : ["-O9UbvOcMftPHx95edox", "-O9UiD-olcfuduDrkCp6"],
    type : "User Story",
    description : "Description Text",
    subtasks : [
        {
            subtask : "Create header",
            completed : true,
        },
        {
            subtask : "Design footer",
            completed : false,
        }
    ]
}


// Send await feedback Task to DB
async function sendAwaitFeedbackTaskToDB(awaitFeedbackTask) {
    try {
        const response = await fetch(DATABASE_URL + "/tasks/await_feedback.json", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(awaitFeedbackTask)
        });

        if (response.ok) {
            console.log("Await feedback Task successfully sent to DB!");
        } else {
            console.error("Failed to send await_feedback task to DB:", response.statusText);
        }
    } catch (error) {
        console.error("Failed to send await_feedback task to DB:", error);
    }
}

const awaitFeedbackTask = {
    title : "Setup analytics",
    due_date : "2024-11-07",
    priority : "low",
    category : "awaitFeedback",
    assigned_to : ["-O9UbvOcMftPHx95edox", "-O9UiD-olcfuduDrkCp6"],
    type : "Technical Task",
    description : "Description Text",
    subtasks : [
        {
            subtask : "Implement Google Analytics",
            completed : true,
        },
        {
            subtask : "Set up reporting Dashboard",
            completed : true,
        }
    ]
}


// Send done Task to DB
async function sendDoneTaskToDB(doneTask) {
    try {
        const response = await fetch(DATABASE_URL + "/tasks/done.json", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(doneTask)
        });

        if (response.ok) {
            console.log("Done Task successfully sent to DB!");
        } else {
            console.error("Failed to send done task to DB:", response.statusText);
        }
    } catch (error) {
        console.error("Failed to send done task to DB:", error);
    }
}

const doneTask = {
    title : "Setup analytics",
    due_date : "2024-11-07",
    priority : "low",
    category : "done",
    assigned_to : ["-O9UbvOcMftPHx95edox", "-O9UiD-olcfuduDrkCp6"],
    type : "Technical Task",
    description : "Description Text",
    subtasks : [
        {
            subtask : "Implement Google Analytics",
            completed : true,
        },
        {
            subtask : "Set up reporting Dashboard",
            completed : true,
        }
    ]
}