import { MdCheck, MdDeleteForever } from "react-icons/md"

export const TodoList = ({key , curTask , onHandleDeleteTodo}) => {
    return (
        <li key={key}>
            <span>{curTask}</span>
            <div className="btn-group">
                <button className="check-btn">
                    <MdCheck />
                </button>
                <button className="delete-btn" onClick={() => onHandleDeleteTodo(curTask)}>
                    <MdDeleteForever />
                </button>
            </div>
        </li>
    )
}