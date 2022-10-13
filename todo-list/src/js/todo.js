export class SubTask {
  constructor(
    subTitle = "Interesting Title",
    description = `1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    Description another description and even more description`,
    dueDate = "2022-01-01",
    priority = 2,
    check = false
  ) {
    this.subTitle = subTitle;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.check = check;
  }
}

export class Task {
  constructor(title = "Awesome Title", listSubtasks = [], color) {
    this.title = title;
    this.listSubtasks = listSubtasks;
    this.color = color;
  }

  addSubTask(SubTask) {
    this.listSubtasks.push(SubTask);
  }
}
