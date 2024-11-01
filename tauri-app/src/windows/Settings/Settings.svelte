<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import win from ".";
    onMount(win.mount);
    onDestroy(win.unmount);
</script>

<h1>in settings</h1>