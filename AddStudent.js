import { useRef } from "react"
import { useDispatch } from "react-redux"
import {addStudent} from './StudentSlice'
export default function AddStudent()
{
    var rollBox = useRef()
    var nameBox = useRef()
    var ageBox = useRef()

    const dispatch = useDispatch()

    var add = (event)=>{
        var ob = {
            roll : rollBox.current.value,
            name : nameBox.current.value,
            age : ageBox.current.value,
        }
        dispatch(addStudent(ob))
        event.preventDefault()
        event.target.reset()
    }

    return <div>
        <h3>Add New Student</h3>
        <form onSubmit={add}>
            <input type="number" ref={rollBox} placeholder="Roll" required/>&nbsp;
            <input type="text" ref={nameBox} placeholder="Name" required/>&nbsp;
            <input type="number" ref={ageBox} placeholder="Age" required/>&nbsp;
            <br/><br/>
            <button>Add</button>
        </form>
    </div>
}