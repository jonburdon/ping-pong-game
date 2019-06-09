pingPongGame = function(pingpong) {
    if (typeof pingpong == 'string') {
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
    else if (pingpong===11) {
        return "Please enter Ping, Pong or a number 0-10.";
    }
    else if (pingpong+(10-pingpong) === 10) {
        return 10-pingpong;
    }

    else {
        return "Please enter Ping, Pong or a number 0-10.";
    }
};
