describe("Fizz Buzz Game", function() {

    beforeEach(function() {
        game = new pingPongGame();
    });

    describe("Checks Ping Pong input", function() {
        it("should exist", function() {
            expect(pingPongGame).toBeDefined();
        });
    });
    
            describe("Checks Ping Pong Game returns Ping", function() {
        it("should return Ping", function() {
            var result = pingPongGame("Pong")
            expect(result).toBe("Ping");
        });
    });
    
                describe("Checks Ping Pong Game returns Pong", function() {
        it("should return Pong", function() {
            var result = pingPongGame("Ping")
            expect(result).toBe("Pong");
        });
    });
    
                describe("Checks Ping Pong Game returns Pong", function() {
        it("should return Pong", function() {
            var result = pingPongGame("Banana")
            expect(result).toBe("Please enter Ping, Pong or a number 0-10.");
        });
    });
    
                    describe("Checks Ping Pong Game returns Pong", function() {
        it("should return 10", function() {
            var result = pingPongGame(0)
            expect(result).toBe(10);
        });
    });
    
                        describe("Checks Ping Pong Game returns Pong", function() {
        it("should return 10", function() {
            var result = pingPongGame(8)
            expect(result).toBe(2);
        });
    });

                        describe("Checks Ping Pong Game returns Pong", function() {
        it("should return 10", function() {
            var result = pingPongGame(11)
            expect(result).toBe("Please enter Ping, Pong or a number 0-10.");
        });
    });

});