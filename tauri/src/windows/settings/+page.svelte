<script lang="ts">
    import ipc from "@/utils/ipc";
    ipc.init();
    const messages: string[] = $state([]);
    ipc.listen("message", (payload) => {
        if (typeof payload === "string") {
            console.log("incoming message", payload);
            messages.push(payload);
        } else {
            console.log("Unknown incoming message type:", payload);
        }
    });
    function send() {
        ipc.send('message', 'hi');
    }
</script>

<button onclick={() => send()}>send hi</button>

I am settings page:<br />

{@html messages.join('<br>')}
