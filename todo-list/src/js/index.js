import '../css/style.scss';
import '../css/general.scss';
import Interface from './Interface';
import SubTask from './SubTask';
import Task from './Task';
import { List } from './List';

const container = new Interface();

const myTask = new Task();
const myTask2 = new Task();
const mySubTask = new SubTask();
myTask.addSubTask(mySubTask);
myTask.addSubTask(mySubTask);
myTask2.addSubTask(mySubTask);
myTask2.addSubTask(mySubTask);
myTask2.addSubTask(mySubTask);

const myList = new List();
myList.addTask(myTask);
myList.addTask(myTask2);
container.update(myList);
