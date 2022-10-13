import "../css/style.scss";
import "../css/general.scss";
import _ from "lodash";
import { addTask, container, DOM, Interface } from "./dom";
import { List, SubTask, Task } from "./todo";

let interface_ = new Interface()

let myTask = new Task()
let myTask2 = new Task()
let mySubTask = new SubTask()
myTask.addSubTask(mySubTask)
myTask.addSubTask(mySubTask)
myTask2.addSubTask(mySubTask)
myTask2.addSubTask(mySubTask)
myTask2.addSubTask(mySubTask)

let myList = new List()
myList.addTask(myTask)
myList.addTask(myTask2)
interface_.update(myList)