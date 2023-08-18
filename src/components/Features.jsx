import Dropdown from "./Dropdown"
import todo from '../assets/images/icon-todo.svg';
import planning from '../assets/images/icon-planning.svg'
import calender from '../assets/images/icon-calendar.svg'
import reminder from '../assets/images/icon-reminders.svg'

const Features = () => {

  const list = [
    { text: 'Todo List', icon: todo },
    { text: 'Calender', icon: calender },
    { text: 'Reminders', icon: reminder },
    { text: 'Planing', icon: planning },
  ]
  return (
    <Dropdown label='Features' options={list} pos='right-0'/>
  )
}

export default Features