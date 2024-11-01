<script lang="ts">
    import type { Component } from 'svelte';
    const windows = Object.values(import.meta.glob('@/windows/**/*.win.svelte', { eager: true })).map(m => m && typeof m === 'object' && 'default' in m ? m.default as Component : null).filter(c => c !== null);
</script>

{#each windows as Window}
    <svelte:component this={Window} />
{/each}

<h1>Main window loaded</h1>
<p>This is the main window, it will be hidden. It acts as the main app thread that manages windows. Perhaps statistics about running windows can be shown here in development.</p>
