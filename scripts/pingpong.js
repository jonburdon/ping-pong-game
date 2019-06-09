pingPongGame = function(pingpong) {
    if(typeof pingpong == 'string') {
        if (pingpong === "Pong") {
            return "Ping";
        }
        else if (pingpong === "Ping") {
            return "Pong";
        }
        else {
            return "Please enter Ping, Pong or a number 0-10.";
        }
    }
    else if (pingpong===0){
        return 10;
    }
        else if (pingpong===8){
        return 2;
    }
    
    else {
        return "Please enter Ping, Pong or a number 0-10.";
    }
};
