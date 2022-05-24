var pool=require("./bd");
class querys {
    async getUsersFromRoom(room){
        let listaJugadores = await pool.query(`select * from users where roomID="${room}"`)
        return JSON.parse(JSON.stringify(listaJugadores))
    }

    async addUserToRoom(socketID,name,roomID,owner){
        let sentencia = `insert into users (socketID,username,roomID,isOwner,vote) values ("${socketID}","${name}","${roomID}",${owner},0)`
        let resultado= await pool.query(sentencia)
    }

    async removeUserFromRoom(socketID){
        let sentencia = `delete from users where socketID= "${socketID}"`
        let resultado= await pool.query(sentencia)
        console.log("Removed from DB")
    }

    async getRoomFromUser(socketID){
        let sentencia = `select roomID from users where socketID="${socketID}"`;
        let resultado= await pool.query(sentencia);
        return resultado;
    }

    async isOwner(socketID){
        let sentencia = `select isOwner from users where socketID="${socketID}"`;
        let resultado= await pool.query(sentencia);
        console.log(resultado,"JNEJEEJ")
        return resultado;
    }

    async changeNameFromUser(socketID,name){
        let sentencia = `update users set username ="${name}" where socketID="${socketID}"`;
        let resultado= await pool.query(sentencia);
    }

    async changeVote(socketID,vote){
        let sentencia = `update users set vote ="${vote}" where socketID="${socketID}"`;
        let resultado= await pool.query(sentencia);
    }

    async createRoom(roomID){
        let sentencia = `insert into rooms (roomID,state,questionID) values ("${roomID}","creating","1")`;
        let resultado= await pool.query(sentencia);
    }

    async addStory(roomID,story){
        let sentencia = `insert into stories (questionID,roomID,story) values ("asd","${roomID}","${story}")`;
        let resultado= await pool.query(sentencia);
    }

    async deleteRoom(roomID){
        let sentencia = `delete from rooms where roomID= "${roomID}"`
        let resultado= await pool.query(sentencia)
    }

    async getStories(roomID){
        
        let sentencia = `select story from stories where roomID="${roomID}"`
        let resultado= await pool.query(sentencia)
        return Object.values(JSON.parse(JSON.stringify(resultado)))
    }
}

module.exports=querys