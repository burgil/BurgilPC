const captions = window.document.getElementById("captions");

window.addEventListener("load", () => {
    const socket = new WebSocket("ws://localhost:3000");
    socket.addEventListener("open", async () => {
        console.log("WebSocket connection opened");
        const listenButton = document.querySelector("#record");
        let microphone: MediaRecorder | undefined;
        console.log("client: waiting to open microphone");
        listenButton?.addEventListener("click", async () => {
            if (!microphone) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    microphone = new MediaRecorder(stream);
                    microphone.onstart = () => {
                        console.log("WebSocket connection opened");
                        document.body.classList.add("recording");
                    };
                    microphone.onstop = () => {
                        console.log("WebSocket connection closed");
                        document.body.classList.remove("recording");
                    };
                    microphone.ondataavailable = (event) => {
                        if (event.data.size > 0 && socket.readyState === WebSocket.OPEN) {
                            socket.send(event.data);
                        }
                    };
                    microphone.start(1000);
                } catch (error) {
                    console.error("Error opening microphone:", error);
                }
            } else {
                microphone.stop();
                microphone = undefined;
            }
        });
    });
    socket.addEventListener("message", (event) => {
        if (!captions) return console.error("Could not find captions:", captions);
        const data = JSON.parse(event.data);
        if (data.channel.alternatives[0].transcript !== "") {
            captions.innerHTML += data ? `<span>${data.channel.alternatives[0].transcript}</span>` : "";
        }
    });
    socket.addEventListener("close", () => {
        console.log("WebSocket connection closed");
    });
});
