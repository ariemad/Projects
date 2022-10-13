import { SubTask } from "./todo";

  /**
   * @param {SubTask} subTask 
   * Red becomes Orange
   * Orange becomes Yellow
   * Yellow becomes Green
   * Green becomes Red
   */
export function switchColor(color){
    const colorConversion= {
        red: "orange",
        orange: "yellow",
        yellow: "green",
        green: "red",
    }

    return colorConversion[color]
}