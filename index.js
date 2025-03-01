const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server); 

const PORT = 3000;


app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public")));


io.on("connection",function (socket) {
    console.log("New user connected");

    socket.on("send-location", function(data){
        io.emit("receive-location",{id:socket.id,...data})
        

    });

    socket.on("disconnect",function() {
        io.emit("User-disconnected",socket.id);
    });
});

// Route to render the index page
app.get("/", (req, res) => {
    res.render("index");
});

// Start server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
