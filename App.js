import { useSelector } from "react-redux"
import AddStudent from "./AddStudent"
import DelStudent from "./DelStudent"

export default function App()
{
  const students = useSelector(state=>state.students.value)
  return <div>
    <h1>Student List</h1>
    <ol>
      {students.map(ob=><li>
        {ob.roll} , {ob.name} , {ob.age}
      </li>)}
    </ol>
    <hr/>
    <AddStudent/>
    <hr/>
    <DelStudent/>
  </div>
}