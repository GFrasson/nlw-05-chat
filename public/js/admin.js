const socketUrl = 'http://127.0.0.1:3333';
const socket = io(socketUrl);

let currentConnections = [];

socket.on("admin_list_all_connections", (connections) => {
    currentConnections = [...connections];

    const listUsers = document.querySelector("#list_users");
    listUsers.innerHTML = "";
    const template = document.querySelector("#template").innerHTML;

    connections.forEach((connection) => {
        const rendered = Mustache.render(template, {
            email: connection.user.email,
            id: connection.socket_id
        });

        listUsers.innerHTML += rendered;
    });
});

function call(socketId) {
    const connection = currentConnections.find((connection) => connection.socket_id === socketId);

    const template = document.querySelector("#admin_template").innerHTML;

    const rendered = Mustache.render(template, {
        email: connection.user.email,
        id: connection.user_id
    });

    document.querySelector("#supports").innerHTML += rendered;
}