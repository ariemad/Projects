import "../css/style.scss";
import _ from "lodash";
import { addTask, container, DOM, Interface } from "./dom";
import { SubTask, Task } from "./todo";

let interface_ = new Interface()

let myTask = new Task()
let myTask2 = new Task()
let mySubTask = new SubTask()
myTask.addSubTask(mySubTask)
myTask.addSubTask(mySubTask)
myTask2.addSubTask(mySubTask)
myTask2.addSubTask(mySubTask)
myTask2.addSubTask(mySubTask)


interface_.addTask(myTask)
interface_.addTask(myTask2)