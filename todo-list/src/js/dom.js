import { switchColor } from "./helper-functions";
import { SubTask, Task } from "./todo";

export class Interface {
  update(list) {
    this.bodyEL = document.querySelector("body");

    this.containerEl = document.createElement("div");
    this.containerEl.classList.add("container");

    
    for (const task of list.list) {
      this.containerEl.append(this.addTask(task))
    }
    this.bodyEL.append(this.containerEl);
  }

  /**
   * @param {Task} task
   */
  addTask(task) {
    const taskEL = document.createElement("div");
    taskEL.classList.add("task");
    taskEL.style.backgroundColor = task.color

    let taskTitle = document.createElement("h2");
    taskTitle.textContent = task.title;
    taskEL.append(taskTitle);

    task.listSubtasks.forEach((subTask) => {
      taskEL.append(this.addSubTask(subTask));
    });

    return taskEL
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

    subTaskHeaderEl.append(this.addCheckButton(subTask));

    subTaskHeaderEl.addEventListener("click", (e) => {
      if (e.target.nextSibling.classList.contains("subtask-body"))
        e.target.nextSibling.classList.toggle("hidden");
    });

    return subTaskHeaderEl;
  }

  /**
   * @param {SubTask} subTask
   */
  addCheckButton(subTask) {
    const checkContainerEL = document.createElement("div");
    checkContainerEL.classList.add("check-container");
    const checkEl = document.createElement("div");
    checkEl.classList.add("check");

    checkEl.style.backgroundColor = subTask.check;

    checkEl.addEventListener("click", (e) => {
      checkEl.style.backgroundColor = switchColor(
        checkEl.style.backgroundColor
      );
    });

    checkContainerEL.append(checkEl);

    return checkContainerEL;
  }

  /**
   * @param {SubTask} subTask
   */
  addSubTaskBody(subTask) {
    const subTaskBodyEl = document.createElement("div");
    subTaskBodyEl.classList.add("subtask-body", "hidden");

    const descriptionEl = document.createElement("p");
    descriptionEl.textContent = subTask.description;
    subTaskBodyEl.append(descriptionEl);

    return subTaskBodyEl;
  }
}
