pingPongGame = function(pingpong) {
    if (pingpong === "Pong") {
        return "Ping";
    }
    else if (pingpong === "Ping"){
        return "Pong";
    }
    else {
        return "Please enter Ping, Pong or a number 0-10.";
    }
};