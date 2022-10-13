import { SubTask, Task } from "./todo";

export class Interface {
  constructor() {
    this.bodyEL = document.querySelector("body");

    this.containerEl = document.createElement("div");
    this.containerEl.classList.add("container");
    this.bodyEL.append(this.containerEl);
  }

  /**
   * @param {Task} task
   */
  addTask(task) {
    const taskEL = document.createElement("div");
    taskEL.classList.add("task");

    let taskTitle = document.createElement("h2");
    taskTitle.textContent = task.title;
    taskEL.append(taskTitle);

    task.listSubtasks.forEach((subTask) => {
      taskEL.append(this.addSubTask(subTask));
    });

    this.containerEl.append(taskEL);
  }
  /**
   * @param {SubTask} subTask
   */
  addSubTask(subTask) {
    const subTaskEL = document.createElement("div");
    subTaskEL.classList.add("subtask");
    subTaskEL.append(this.addSubTaskHeader(subTask));
    subTaskEL.append(this.addSubTaskBody(subTask));
    return subTaskEL;
  }
  /**
   * @param {SubTask} subTask
   */
  addSubTaskHeader(subTask) {
    const subTaskHeaderEl = document.createElement("div");
    subTaskHeaderEl.classList.add("subtask-header");

    const subTitleEL = document.createElement("h3");
    subTitleEL.textContent = subTask.subTitle;
    subTaskHeaderEl.append(subTitleEL);

    const dueDateEL = document.createElement("p");
    dueDateEL.textContent = subTask.dueDate;
    subTaskHeaderEl.append(dueDateEL);

    const checkContainerEL = document.createElement("div")
    checkContainerEL.classList.add("check-container")

    
    const checkEl = document.createElement("div")
    checkEl.classList.add("check")
    if (!subTask.check){
        checkEl.style.backgroundColor="green"
    }
    checkContainerEL.append(checkEl)
    subTaskHeaderEl.append(checkContainerEL)

    return subTaskHeaderEl;
  }
  /**
   * @param {SubTask} subTask
   */
  addSubTaskBody(subTask) {
    const subTaskBodyEl = document.createElement("div");
    subTaskBodyEl.classList.add("subtask-body");

    const descriptionEl = document.createElement("p")
    descriptionEl.textContent = subTask.description
    subTaskBodyEl.append(descriptionEl)

    return subTaskBodyEl;
  }
}
