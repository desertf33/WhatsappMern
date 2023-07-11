import "./Sidebar.css"
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar,IconButton, } from '@mui/material';
import SidebarChat from "./SidebarChat";
function Sidebar() {
    return (
        <div className="sidebar">
           
           <div className="sidebar_header">
                <Avatar src="../public/character_safwy_yamamoto_01.png" />
                <div className="sidebar__headerRight">
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                    
                </div>
           </div>
           <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <input type="text" placeholder="Search or Start New Chat" />
                </div>
           </div>
           <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
           </div>
        </div>
    )
}
export default Sidebar;
