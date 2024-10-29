// Priority SVG als template functions machen
// generell viel in Template functions auslagern
// Drag and Drop

let ticket = [
    {
        id : 0,
        title : "",
        due_date : "",
        priority : "",
        assigned_to : [
            {
                id : "",
                name : "",
                initials : ""
            }
        ],
        category : "",
        subtasks : [
            {
                id : 0,
                subtask : ""
            }
        ]
    }
]

let toDoTasks = [];
let inProgressTasks = [];
let awaitFeedbackTasks = [];
let doneTasks = [];