function resizeEvent() {
    const width = document.body.scrollWidth;
    const height = document.body.scrollHeight;
    window.electronAPI.IPC('resize', {
        page: 'settings',
        width,
        height
    });
}
const myObserver = new ResizeObserver(resizeEvent);
myObserver.observe(document.body);

for (const button of document.querySelectorAll('.tooltip')) {
    (button as HTMLElement).addEventListener('mouseenter', (event: MouseEvent) => {
        const tooltip = document.querySelector('.tooltip-text') as HTMLElement;
        const currentTarget = event.currentTarget as HTMLElement;
        if (!tooltip || !currentTarget) return;
        tooltip.classList.remove('hidden');
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
        tooltip.innerText = currentTarget.dataset.tooltip ?? '';
        const buttonRect = currentTarget.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        tooltip.style.left = `${buttonRect.right + 10}px`;
        tooltip.style.top = `${buttonRect.top + (buttonRect.height / 2) - (tooltipRect.height / 2)}px`;
    });
    (button as HTMLElement).addEventListener('mouseleave', () => {
        const tooltip = document.querySelector('.tooltip-text') as HTMLElement;
        if (!tooltip) return;
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
        tooltip.classList.add('hidden');
    });
}