/* Board Templates */
// No tasks to do Template
function noTaskToDoTemplate() {
    return /*html*/`
    
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