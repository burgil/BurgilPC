function handleKeyPress(event: KeyboardEvent) {
    console.log(`You pressed ${event.key}`)
}

window.addEventListener('keyup', handleKeyPress, true)