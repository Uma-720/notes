import { useRef } from "react"
import {deleteStudent} from './StudentSlice'
import { useDispatch } from "react-redux"
export default function DelStudent()
{
    var rollBox = useRef()
    const dispatch = useDispatch()

    var delStud = (event)=>
    {
        const roll = rollBox.current.value 
        dispatch(deleteStudent(roll))
        event.preventDefault()
        event.target.reset()
    }
    return <div>
        <h3>Delete Student</h3>
        <form onSubmit={delStud}>
            <input type="number" ref={rollBox} placeholder="Roll" required/>&nbsp;
             <br/><br/>
            <button>Delete</button>
        </form>

    </div>
}