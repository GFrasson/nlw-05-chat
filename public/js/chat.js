document.querySelector("#start_chat").addEventListener("click", (event) => {
    const socketUrl = 'http://127.0.0.1:3333';
    const socket = io(socketUrl);

    const chat_help = document.getElementById("chat_help");
    chat_help.style.display = "none";

    const chat_in_support = document.getElementById("chat_in_support");
    chat_in_support.style.display = "block";

    const email = document.getElementById("email").value;
    const text = document.getElementById("txt_help").value;
    
    socket.on("connect", () => {
        const params = {
            email,
            text
        };

        socket.emit("client_first_access", params, (callback, err) => {
            if (err) {
                console.error(err);
            } else {
                console.log(callback);
            }
        });
    });
});
