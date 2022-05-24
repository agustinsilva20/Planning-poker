const { query } = require("express");
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);

var querys=require("./querys");

let cors = require("cors");
app.use(cors());
//websockets
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  
  io.on("connection", (socket) => {
    console.log(`User Connected with SocketID: ${socket.id}`);
  
    socket.on("join_room", async (person) => {
      socket.join(person.room);
      console.log(`User with ID: ${socket.id} joined room: ${person.room}`);
      var query=new querys();
      //Agregar usuario a la DB
      query.addUserToRoom(socket.id,person.name,person.room,true)
      //Enviar info al room
      users=await query.getUsersFromRoom(person.room);
      socket.emit("send-data",users)
      socket.in(person.room).emit("send-data",users)
      //Enviarle la lista de preguntas
      
      stories=await query.getStories(person.room)
      socket.emit("get-story",stories)
    });
  
    socket.on("disconnect",async () => {
      console.log("User Disconnected with SocketID: ", socket.id);
      var query=new querys();
      var roomID= await query.getRoomFromUser(socket.id)
      //Delete room
      var owner=await query.isOwner(socket.id)
      console.log(owner)
      if (owner[0].isOwner){
        await query.deleteRoom(roomID[0].roomID)
      }
      await query.removeUserFromRoom(socket.id)
      //Enviar info al room
      console.log("Room ID: ", roomID[0].roomID)
      users=await query.getUsersFromRoom(roomID[0].roomID);
      socket.in(roomID[0].roomID).emit("send-data",users)
      

    });

    socket.on("change_name",async(name)=>{
      //hago el cambio
      var query=new querys();
      query.changeNameFromUser(socket.id,name)
      //actualizo
      var roomID= await query.getRoomFromUser(socket.id)
     
      users=await query.getUsersFromRoom(roomID[0].roomID);

      socket.emit("send-data",users)
      socket.in(roomID[0].roomID).emit("send-data",users)
    });

    socket.on("vote",async(vote)=>{
       //hago el cambio
       var query=new querys();
       query.changeVote(socket.id,vote)
       //actualizo
      var roomID= await query.getRoomFromUser(socket.id)
      users=await query.getUsersFromRoom(roomID[0].roomID);
      socket.emit("send-data",users)
      socket.in(roomID[0].roomID).emit("send-data",users)
    });

    socket.on("sendState",async(newState)=>{
      //then: Change state on DB
      var query=new querys();
      var roomID= await query.getRoomFromUser(socket.id)
      users=await query.getUsersFromRoom(roomID[0].roomID);
      socket.emit("change-state",newState)
      socket.in(roomID[0].roomID).emit("change-state",newState)
    })

    socket.on("createRoom",async(roomID)=>{
      var query=new querys();
      await query.createRoom(roomID)
    })

    socket.on("AddStory",async(info)=>{
      var query=new querys();
      await query.addStory(info.roomID,info.story)
      socket.emit("added",true)
    })

    socket.on("room-created",async(roomID)=>{
      var query=new querys();
      stories=await query.getStories(roomID)
      socket.emit("get-story",stories)
    })

    
    

  });



//start server
server.listen(3001, () => {
    console.log("Server Listening :D");
});
  