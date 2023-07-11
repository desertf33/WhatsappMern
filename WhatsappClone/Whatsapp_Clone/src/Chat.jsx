import "./Chat.css"
import { Avatar,IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';

function Chat(messages) {
    console.log(messages);
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                
                <div className="chat__headInfo">
                    <h4>Room Name</h4>
                    <p>Last seen at..</p>
                </div>
                
                <div className="chat__headerright">
                    <IconButton><SearchOutlinedIcon /></IconButton>
                    <IconButton><AttachFileIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </div>
            
            </div>

            <div className="chat__body">
                
                    
                
                
                <p className="chat__message chat__receiver">
                <span className="chat__name">Prit</span>
                    This is a message
                <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat__message">
                <span className="chat__name">Prit</span>
                    This is a message
                <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
            
            
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                <input type="text" placeholder="Type a message"/>
                <button type="submit">Send a message</button>
                </form>
                <SendIcon />
                <MicIcon />
            </div>

        </div>
    )
}
export default Chat