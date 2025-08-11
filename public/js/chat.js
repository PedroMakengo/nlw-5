document.querySelector("#start_chat").addEventListener("click", (event) => {
  const socket = io()

  const chat_help = document.querySelector("#chat_help");
  chat_help.style.display = "none";

  const chat_in_support = document.querySelector("#chat_in_support");
  chat_in_support.style.display = "block";


  const email = document.getElementById("email").value;
  const text = document.getElementById("txt_help").value;


  socket.on("connect", () => {
    socket.emit("client_first_access", params, (call, err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(call);
      }
    })
  })
});
