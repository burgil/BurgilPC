window.electronAPI.IPC('new-message', (args: All[]) => {
    if (!args[0] || typeof args[0] !== 'object') return;
    const message = args[0] as {
        id: string;
        title: string;
        text: string;
        duration: number;
    };
    if (!message.title || !message.text || !message.duration || !message.id) return;
    const container = document.getElementById('container');
    if (!container) return;
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'message-animate-in');
    const messageIcon = document.createElement('div');
    messageIcon.classList.add('message-icon');
    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = message.title;
    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent = message.text;
    // console.log("new-message", message.text)
    messageContent.appendChild(title);
    messageContent.appendChild(text);
    messageElement.appendChild(messageIcon);
    messageElement.appendChild(messageContent);
    container.appendChild(messageElement);
    let timer: Timer | undefined = setTimeout(() => {
        timer = undefined;
        messageElement.classList.remove('message-animate-in');
        messageElement.classList.add('message-animate-out');
        setTimeout(() => { // Remove after animation
            messageElement.remove();
        }, 300);
    }, message.duration);
    messageElement.addEventListener('click', () => {
        if (timer) {
            clearTimeout(timer);
            timer = undefined;
            messageElement.classList.remove('message-animate-in');
            messageElement.classList.add('message-animate-out');
            setTimeout(() => { // Remove after animation
                messageElement.remove();
                window.electronAPI.IPC('cancel-notification-early', {
                    id: message.id
                });
            }, 300);
        }
    })
});
window.electronAPI.IPC('ready', 'now');