const plugins = window.plugins.marketplace;
for (const plugin of plugins) {
    console.log(`Plugin: ${plugin.name}, Dependencies: ${plugin.depends.join(', ')}`);
}

document.querySelectorAll('.plugin-card button').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const plugin = plugins[index];
        if (!plugin) return alert("Plugin not found");
        alert(`Installing ${plugin.name}...`);
        // Mock installation process
        setTimeout(() => {
            alert(`${plugin.name} installed successfully!`);
        }, 2000);
    });
});