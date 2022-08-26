// DOM
const userOnline = document.getElementById("online");
const userOffline = document.getElementById("offline");
const textMessage = document.getElementById("textMessage");
const btnSubmit = document.getElementById("btnSubmit");

// Socket
const socket = io();

socket.on("connect", () => {
    userOffline.style.display = "none";
    userOnline.style.display = "";
});

socket.on("disconnect", () => {
    userOnline.style.display = "none";
    userOffline.style.display = "";
});

socket.on("submit-message", (payload) => {
    console.log(payload);
});

// events
btnSubmit.onclick = () => {
    const message = textMessage.value;
    const payload = {
        message,
        id: socket.id,
        date: new Date().toLocaleString(),
    };

    socket.emit("submit-message", payload, (id) => {
        console.log("From server", id);
    });
};
