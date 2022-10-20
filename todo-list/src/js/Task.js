class Task {
  constructor(title = 'Awesome Title', listSubtasks = [], color = 'rgba(255, 0, 0, 0.3)') {
    this.title = title;
    this.listSubtasks = listSubtasks;
    this.color = color;
  }

  addSubTask(subTask) {
    this.listSubtasks.push(subTask);
  }
}

export default Task;
