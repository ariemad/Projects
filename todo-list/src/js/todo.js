export class SubTask {
  constructor(
    subTitle = "Interesting SubTitle",
    description = `1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    Description another description and even more description`,
    dueDate = "2022-01-01",
    priority = 2,
    check = "orange",
    hidden = false
  ) {
    this.subTitle = subTitle;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.check = check;
    this.hidden = hidden
  }
}

export class Task {
  constructor(title = "Awesome Title", listSubtasks = [], color = "rgba(255, 0, 0, 0.3)") {
    this.title = title;
    this.listSubtasks = listSubtasks;
    this.color = color;
  }

  addSubTask(SubTask) {
    this.listSubtasks.push(SubTask);
  }
}
export class List {
  constructor(){
    this.list = []
  }

  addTask(task) {
    this.list.push(task)
  }

}
