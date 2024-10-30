/* Board Templates */
// No task Template
function noTaskTemplate(category) {
    return /*html*/`
    <div class="noToDoContainer">
        <span class="noToDoText">No tasks in ${category}</span>
    </div>
    `;
}

// Task Template
//! Tickets render Template noch fertig mit den Daten machen und gucken wie das mit Subtasks etc. am besten gemacht wird
function taskTemplate(task) {
    return /*html*/`
    <div class="taskSingleCard">
        <div class="taskSingleCardContentWrapper">
            <div class="taskTypeContainer">
                <div id="taskTypeTextContainer" class="technicalTaskBG">
                    <span id="taskTypeText">${task.type}</span>
                </div>
            </div>
    
            <div class="taskTitleAndDescriptionContainer">
                <div class="taskTitleContainer">
                    <span id="taskTitleText">${task.title}</span>
                </div>
                <div class="taskDescriptionContainer">
                    <span id="taskDescriptionText">${task.description}</span>
                </div>
            </div>
    
            <div class="taskProgressbarContainer">
                <div class="taskProgressbarSVGContainer">
                    <svg width="180" height="16" viewBox="0 0 180 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="180" height="16" rx="8" fill="#F4F4F4"/>
                        <rect width="90" height="16" rx="8" fill="#4589FF"/>
                    </svg>
                </div>
                <div class="taskProgressbarStatusTextContainer">
                    <span id="taskProgressbarStatusText">1/2 Subtasks</span>
                </div>
            </div>
    
            <div class="taskAssignedToAndPriorityContainer">
                <div id="taskAssignedToContainer" class="taskAssignedToContainer">
                    
                    <div class="taskSingleContact">
                        <span>LB</span>
                    </div>

                    <div class="taskSingleContact">
                        <span>LB</span>
                    </div>

                    <div class="taskSingleContact">
                        <span>LB</span>
                    </div>

                    <div class="taskSingleContact">
                        <span>LB</span>
                    </div>

                    <div class="taskSingleContact">
                        <span>...</span>
                    </div>
                    
                </div>
                <div id="taskPriorityContainer" class="taskPriorityContainer">
                    <div class="taskPrioritySVGContainer">
                        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4995 9.00614C10.2649 9.00654 10.0364 8.9317 9.84753 8.79262L0.944424 2.22288C0.828586 2.13733 0.730747 2.02981 0.656491 1.90647C0.582236 1.78313 0.53302 1.64638 0.511652 1.50404C0.468498 1.21655 0.541397 0.923717 0.714313 0.689945C0.88723 0.456173 1.146 0.300615 1.43369 0.257493C1.72139 0.21437 2.01444 0.287216 2.24839 0.460004L10.4995 6.54248L18.7506 0.460004C18.8665 0.374448 18.998 0.312529 19.1378 0.277782C19.2776 0.243035 19.4229 0.236141 19.5653 0.257493C19.7078 0.278844 19.8446 0.328025 19.9681 0.402225C20.0915 0.476425 20.1991 0.574193 20.2847 0.689945C20.3703 0.805697 20.4323 0.937168 20.4671 1.07685C20.5018 1.21653 20.5087 1.36169 20.4874 1.50404C20.466 1.64638 20.4168 1.78313 20.3425 1.90647C20.2683 2.02981 20.1704 2.13733 20.0546 2.22288L11.1515 8.79262C10.9626 8.9317 10.7341 9.00654 10.4995 9.00614Z" fill="#7AE229"/>
                            <path d="M10.4995 14.7547C10.2649 14.7551 10.0364 14.6802 9.84753 14.5412L0.944424 7.97142C0.710479 7.79863 0.554806 7.54005 0.511652 7.25257C0.468498 6.96509 0.541397 6.67225 0.714313 6.43848C0.88723 6.20471 1.146 6.04915 1.43369 6.00603C1.72139 5.96291 2.01444 6.03575 2.24839 6.20854L10.4995 12.291L18.7506 6.20854C18.9846 6.03575 19.2776 5.96291 19.5653 6.00603C19.853 6.04915 20.1118 6.20471 20.2847 6.43848C20.4576 6.67225 20.5305 6.96509 20.4874 7.25257C20.4442 7.54005 20.2885 7.79863 20.0546 7.97142L11.1515 14.5412C10.9626 14.6802 10.7341 14.7551 10.4995 14.7547Z" fill="#7AE229"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Technical Task Overlay
function technicalTaskOverlayTemplate() {
    return /*html*/`
                    <div class="overlayForTechnicalTask">
                        <div class="upperOverlayContainer">
                            <div class="technicalTaskPlusCross">
                                <div class="technicalTask">
                                    <p>Technical Task</p>
                                </div>
                                <div class="corssImgIcon">
                                    <img src="../assets/icons/close_blue.svg">
                                </div>
                            </div>
                            <div class="titleField">
                                <span>Title is standing here</span>
                            </div>
                            <div class="buildDatePriority">
                                <div class="build">
                                    <span>Build start Page Text</span>
                                </div>
                                <div class="date">
                                    <span>Due Date :</span>
                                </div>
                                <div class="priority">
                                    <span>Priority :</span>
                                </div>
                            </div>
                        </div>
                        <div class="lowerOverlayContainer">
                            <div class="assignedAndName">
                                <div class="assign">
                                    <span>Assigned To :</span>
                                </div>
                                <div class="namesForOverlay">
                                    <div class="circleAndName">
                                        <div class="circleForOverlayUserStory">
                                            TN
                                        </div>
                                        <div>
                                            <span>Test name</span>
                                        </div>
                                    </div>
                                    <div class="circleAndName">
                                        <div class="circleForOverlayUserStory">
                                            TN
                                        </div>
                                        <div>
                                            <span>Text name</span>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                            <div class="subTasksAndDeleteEdit">
                                <div class="subtasks">
                                    <span>Subtasks :</span>
                                    <div class="cubeWithHook">
                                        <img src="../assets/icons/Rectangle_with.svg">
                                    </div>
                                    <div class="cubeWithoutHook">
                                        <img src="../assets/icons/Rectangle_without.svg">
                                    </div>
                                </div>
                                <div class="deleteAndEditOverlay">
                                        <div class="deleteImgIcon">
                                            <img src="../assets/icons/delete.svg">
                                            <span>Delete</span>
                                        </div>
                                        <div class="separationDiv"></div>
                                        <div class="editImgIcon">
                                            <img src="../assets/icons/edit.svg"> 
                                            <span>Edit</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `;
}


// User Story Overlay
function userStoryOverlayTemplate() {
    return /*html*/`
                <div class="overlayForUserStory">
                    <div class="upperOverlayContainer">
                        <div class="userstoryPlusCross">
                            <div class="userstory">
                                <p>User Story</p>
                            </div>
                            <div class="corssImgIcon">
                                <img src="../assets/icons/close_blue.svg">
                            </div>
                        </div>
                        <div class="titleField">
                            <span>Title is standing here</span>
                        </div>
                        <div class="buildDatePriority">
                            <div class="build">
                                <span>Build start Page Text</span>
                            </div>
                            <div class="date">
                                <span>Due Date :</span>
                            </div>
                            <div class="priority">
                                <span>Priority :</span>
                            </div>
                        </div>
                    </div>
                    <div class="lowerOverlayContainer">
                        <div class="assignedAndName">
                            <div class="assign">
                                <span>Assigned To :</span>
                            </div>
                            <div class="namesForOverlay">
                                <div class="circleAndName">
                                    <div class="circleForOverlayUserStory">
                                        TN
                                    </div>
                                    <div>
                                        <span>Test name</span>
                                    </div>
                                </div>
                                <div class="circleAndName">
                                    <div class="circleForOverlayUserStory">
                                        TN
                                    </div>
                                    <div>
                                        <span>Text name</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="subTasksAndDeleteEdit">
                            <div class="subtasks">
                                <span>Subtasks :</span>
                                <div class="cubeWithHook">
                                    <img src="../assets/icons/Rectangle_with.svg">
                                </div>
                                <div class="cubeWithoutHook">
                                    <img src="../assets/icons/Rectangle_without.svg">
                                </div>
                            </div>
                            <div class="deleteAndEditOverlay">
                                    <div class="deleteImgIcon">
                                        <img src="../assets/icons/delete.svg">
                                        <span>Delete</span>
                                    </div>
                                    <div class="separationDiv"></div>
                                    <div class="editImgIcon">
                                        <img src="../assets/icons/edit.svg"> 
                                        <span>Edit</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
    `;
}