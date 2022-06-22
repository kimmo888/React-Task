import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks , toggleTask, showComplete = false }) => {

    const TasTableRows = (doneValue)=>{
        console.log(doneValue);
        return (
            tasks.filter(task=>task.done === doneValue)
            .map((task) => (<TaskRow key={task.name} task={task} toggleTask={toggleTask} />))
        )
    }

    return (
        <table>
        <thead>
            <tr>
            <th>Task</th>
            </tr>
        </thead>
        <tbody>
            {
                TasTableRows(showComplete)
            }
        </tbody>
        </table>
    );
};
