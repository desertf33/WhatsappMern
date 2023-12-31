import "./SidebarChat.css"
import { Avatar } from '@mui/material';



function SidebarChat() {
  return (
    <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat__info">
            <h4>Room Name</h4>
            <p>This is the last message</p>
        </div>
    </div>
  )
}

export default SidebarChat