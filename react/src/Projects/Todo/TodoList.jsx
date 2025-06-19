import { MdCheck, MdDeleteForever } from "react-icons/md"

export const TodoList = ({checked,onHandleCheckedTodo, curTask , onHandleDeleteTodo}) => {
    return (
        <li>
            <span className={checked ? "checkList" : "notCheckList"}>{curTask}</span>
            <div className="btn-group">
                <button className="check-btn" onClick={()=> onHandleCheckedTodo(curTask)}>
                    <MdCheck />
                </button>
                <button className="delete-btn" onClick={() => onHandleDeleteTodo(curTask)}>
                    <MdDeleteForever />
                </button>
            </div>
        </li>
    )
}