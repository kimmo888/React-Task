
export const VisibilityControl = ( {isChecked, setShowComplete, cleanTasks} ) => {

    const handleDelete = () => {
        if(window.confirm('Are you sure you want to delete all tasks?')) {
            cleanTasks();
        }
    }

    return (
        <div>
            <input type="checkbox" checked={isChecked} onChange={(e)=> setShowComplete(e.target.checked)} />{" "}
            <label >Show Task Done  </label>
            <button onClick={handleDelete} >Clear </button>
        </div>
    )
}