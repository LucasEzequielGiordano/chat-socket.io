const socketController = (socket) => {
    console.log("Connected Client", socket.id);

    socket.on("disconnect", () => {
        console.log("Disconnect Client", socket.id);
    });

    socket.on("submit-message", (payload, callback) => {
        const id = 123456;
        callback({ id, date: new Date().toLocaleString() });
        socket.broadcast.emit("submit-message", payload);
    });
};

module.exports = {
    socketController,
};
