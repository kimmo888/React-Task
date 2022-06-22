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
        <table className="table table-dark table-striped table-bordered border-secondary" >
            <thead>
                <tr className="table-primary" >
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
