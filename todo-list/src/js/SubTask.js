class SubTask {
  constructor(
    subTitle = 'Interesting SubTitle',
    description = `1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    Description another description and even more description`,
    dueDate = '2022-01-01',
    priority = 2,
    check = 'orange',
    hidden = false,
  ) {
    this.subTitle = subTitle;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.check = check;
    this.hidden = hidden;
  }
}

export default SubTask;
