//importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import bodyParser from "body-parser"
import Pusher from "pusher"
import cors from "cors"


//app config
const app = express()
const port = process.env.PORT || 9000
app.use(bodyParser.urlencoded({extended: true}));

//middleware
app.use(express.json())
app.use(cors())



//DB config
const connection_url = ('mongodb+srv://prit:pritpaul@cluster0.34ni9y9.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect(connection_url,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
})
// To handle change in database (Use of mongoose(collection,watch function))
const db = mongoose.connection
db.once('open',()=>{
    console.log('DB is connected')

    const msgCollection = db.collection('messagecontents');
    const changeStream = msgCollection.watch();
    changeStream.on('change',(change)=>{
        console.log(change);
        if (change.operationType == "insert"){
            const messageDetails = change.fullDocument;
            pusher.trigger('message','inserted',{
                name: messageDetails.name,
                message:messageDetails.message,
                timestamp:messageDetails.timestamp,
                received:messageDetails.received
            })
        }else{
            console.log("Error Triggering Pusher");
        }
    })
})
//
const pusher = new Pusher({
    appId: "1624935",
    key: "459370ae04a9f44d93ef",
    secret: "19fae5369fbcda6a9912",
    cluster: "ap2",
    useTLS: true
  });



//api routes
app.get('/',(req,res)=>res.status(200).send('hello world'));
app.get('/messages/sync',(req,res)=>{
    Messages.find().then((data)=>res.status(200).send(data)).catch((err)=>res.status(500).send(err))
});

app.post('/messages/new',(req,res)=>{
    const dbMessage = req.body
    Messages.create(dbMessage).then((data)=>res.status(201).send(data)).catch((err)=>res.send(err))
})

//listen
app.listen(port,()=>console.log(`Listening on localhost:${port}`))