import { useState } from "react";
import { editTodo } from "../stores/todo";
import { useDispatch } from "react-redux";


function EditTodo({ data, close }) {

    const [todo, setTodo] = useState(data.title)
    const [done, setDone] = useState(data.done)
    const dispatch = useDispatch();

    const handleClose = () => {
        close();
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(editTodo({
            id: data.id,
            title: todo,
            done
        }))
        close();
    }

    return (
        <div className="bg-white">
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={e => setTodo(e.target.value)} className="label mb-4" /> <br />
                <label>
                    <input className="mr-2" type="checkbox" checked={done} onChange={e => setDone(e.target.checked)} />
                    Mark as complete
                </label> <br />

                <button className='bg-indigo-700 text-white font-sans text-md px-3 py-1 rounded-lg mt-4 ' type="submit" >Save</button>
            </form>
            <button className='bg-indigo-500 text-white font-sans text-md px-3 py-1 rounded-lg mt-4 mr-4' onClick={handleClose} type="button">Close</button>

        </div>
    )
}

export default EditTodo