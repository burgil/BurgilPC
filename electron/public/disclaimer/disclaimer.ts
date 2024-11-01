const mainEl = document.querySelector('main');
if (mainEl) mainEl.style.height = '100vh';
const blurCircle = document.getElementById('blur-circle');
const arrowContainer = document.getElementById('arrow-container');
const topbar = document.getElementById('topbar');
const agreeBtn = document.getElementById('agree');
let timer: Timer | undefined;
const holdTime = 1.5;
let currentPage = 1;
const pages = document.querySelectorAll('.disclaimer-page') as NodeListOf<HTMLElement>;
const pageCount = pages.length;
if (topbar) topbar.textContent = `Page ${currentPage}/${pageCount}`;
if (blurCircle) blurCircle.style.rotate = `${currentPage * 130}deg`;
function showAgreeButton() {
    if (!agreeBtn) return;
    const lastVisiblePage = pages[currentPage - 1];
    if (!lastVisiblePage) return;
    const scrollPercent = (lastVisiblePage.clientHeight + lastVisiblePage.scrollTop) / lastVisiblePage.scrollHeight * 100;
    if (scrollPercent >= 98.5) {
        agreeBtn.removeAttribute('disabled');
        if (arrowContainer) arrowContainer.style.display = 'none';
    } else {
        agreeBtn.setAttribute('disabled', '');
        if (arrowContainer) arrowContainer.style.display = '';
    }
}
setTimeout(showAgreeButton, 500);
for (const page of pages) {
    page.addEventListener('scroll', showAgreeButton);
}
agreeBtn?.addEventListener('mousedown', async () => {
    if (agreeBtn) agreeBtn.textContent = 'Agree';
    if (declineBtn) declineBtn.textContent = 'Decline';
    if (timer) {
        clearTimeout(timer);
        timer = undefined;
    }
    let totalTime = holdTime;
    agreeBtn.textContent = `Hold... ${(holdTime - totalTime).toFixed(1)}/${holdTime}`;
    while (totalTime >= 0) {
        let didResolve = false;
        await new Promise((resolve) => {
            timer = setTimeout(() => {
                didResolve = true;
            }, 100);
            setTimeout(resolve, 100 + 2);
        });
        totalTime -= 0.1
        agreeBtn.textContent = `Hold... ${(holdTime - totalTime).toFixed(1)}/${holdTime}`;
        if (!didResolve) return;
    }
    if (arrowContainer) arrowContainer.style.display = 'none';
    if (mainEl && currentPage === pageCount) mainEl.style.height = '22vh';
    if (currentPage === pageCount) {
        agreeBtn.textContent = 'Agreed!';
        agreeBtn.setAttribute('disabled', '');
        setTimeout(window.close, 500);
    } else {
        agreeBtn.textContent = 'Agree';
        const lastVisiblePage = pages[currentPage - 1];
        const currentVisiblePage = pages[currentPage];
        if (lastVisiblePage) lastVisiblePage.style.transform = 'translateY(-100%)';
        if (currentVisiblePage) currentVisiblePage.style.transform = 'translateY(0)';
        currentPage += 1;
        if (topbar) topbar.textContent = `Page ${currentPage}/${pageCount}`;
        if (blurCircle) blurCircle.style.rotate = `${currentPage * 130}deg`;
        agreeBtn.setAttribute('disabled', '');
        setTimeout(showAgreeButton, 500);
    }
});
const declineBtn = document.getElementById('decline');
declineBtn?.addEventListener('mousedown', async () => {
    if (agreeBtn) agreeBtn.textContent = 'Agree';
    if (declineBtn) declineBtn.textContent = 'Decline';
    if (timer) {
        clearTimeout(timer);
        timer = undefined;
    }
    let totalTime = holdTime;
    declineBtn.textContent = `Hold... ${(holdTime - totalTime).toFixed(1)}/${holdTime}`;
    while (totalTime >= 0) {
        let didResolve = false;
        await new Promise((resolve) => {
            timer = setTimeout(() => {
                didResolve = true;
            }, 100);
            setTimeout(resolve, 100 + 2);
        });
        totalTime -= 0.1
        declineBtn.textContent = `Hold... ${(holdTime - totalTime).toFixed(1)}/${holdTime}`;
        if (!didResolve) return;
    }
    if (arrowContainer) arrowContainer.style.display = 'none';
    if (mainEl && currentPage === 1) mainEl.style.height = '22vh';
    if (currentPage === 1) {
        declineBtn.textContent = 'Declined!';
        setTimeout(window.close, 500);
    } else if (currentPage > 1) {
        declineBtn.textContent = 'Decline';
        const lastVisiblePage = pages[currentPage - 2];
        const currentVisiblePage = pages[currentPage - 1];
        if (lastVisiblePage) lastVisiblePage.style.transform = 'translateY(0)';
        if (currentVisiblePage) currentVisiblePage.style.transform = 'translateY(-100%)';
        currentPage -= 1;
        if (topbar) topbar.textContent = `Page ${currentPage}/${pageCount}`;
        if (blurCircle) blurCircle.style.rotate = `${currentPage * 130}deg`;
        if (agreeBtn) agreeBtn.setAttribute('disabled', '');
        setTimeout(showAgreeButton, 500);
    }
});

window.addEventListener('mouseup', async () => {
    if (timer) {
        clearTimeout(timer);
        timer = undefined;
    }
    let didResolve = false;
    await new Promise((resolve) => {
        timer = setTimeout(() => {
            didResolve = true;
        }, 500);
        setTimeout(resolve, 500 + 2);
    });
    if (!didResolve) return;
    if (agreeBtn) agreeBtn.textContent = 'Agree';
    if (declineBtn) declineBtn.textContent = 'Decline';
});

window.speechSynthesis.cancel();
const points = document.querySelectorAll('.point p') as NodeListOf<HTMLParagraphElement>;
const readButton = document.getElementById('readAll');
const volumeSlider = document.getElementById('volume');
volumeSlider?.addEventListener('input', (e) => {
    if (e.target) currentVolume = Number.parseFloat((e.target as HTMLInputElement).value) / 100;
});
let speech = false;
let currentVolume = 0.1;
if (readButton) readButton.onclick = async () => {
    if (speech) {
        window.speechSynthesis.cancel();
        speech = false;
        readButton.innerText = 'Read';
        for (const el of document.querySelectorAll('.highlight')) {
            el.classList.remove('highlight')
        }
        return;
    }
    speech = true;
    readButton.innerText = 'Stop';
    await readSections(points);
    readButton.innerText = 'Read';
    speech = false;
};
const readSections = async (sections: NodeListOf<HTMLParagraphElement>) => {
    const first = document.querySelectorAll('.leading-relaxed')[0] as HTMLElement;
    if (speech) await speakWithHighlight(first.innerText, first);
    if (!speech) return;
    for (let i = 0; i < sections.length; i++) {
        const currentSection = sections[i];
        if (!currentSection) continue;
        const boldEl = currentSection.querySelector('b');
        const sectionText = currentSection.textContent?.replace(boldEl?.textContent ?? '', '');
        const sectionNumber = i + 1;
        if (speech) await speak(`Section ${sectionNumber}.`);
        if (!speech) return;
        if (speech && boldEl) await speakWithHighlight(boldEl?.textContent ?? '', boldEl);
        if (speech && boldEl) await speakWithHighlight(sectionText ?? '', currentSection, boldEl.textContent ?? '');
        if (!speech) return;
    }
    const last = document.querySelectorAll('.leading-relaxed')[1] as HTMLElement;
    if (speech) await speakWithHighlight(last.innerText, last);
    if (!speech) return;
    if (speech) await speak("Do you want to agree or decline?");
};
const speak = (text: string) => {
    return new Promise((resolve) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.volume = currentVolume;
        utterance.onend = resolve;
        window.speechSynthesis.speak(utterance);
    });
};
const speakWithHighlight = (text: string, element: HTMLElement, extraBold = '') => {
    return new Promise((resolve) => {
        const chunks = text.split(/(?<=[.!?])\s*|\s*,\s*/);
        let currentIndex = 0;

        const highlightNextChunk = () => {
            if (!speech || currentIndex >= chunks.length) {
                if (extraBold) {
                    element.innerHTML = `<b>${extraBold}</b> ${text}`;
                } else {
                    element.innerHTML = text;
                }
                resolve(true);
                return;
            }
            const chunk = chunks[currentIndex];
            if (!chunk) return;
            const highlightedText = text.replace(chunk, `<span class="highlight">${chunk.trim()}</span>`);
            if (extraBold) {
                element.innerHTML = `<b>${extraBold}</b> ${highlightedText}`;
            } else {
                element.innerHTML = highlightedText;
            }
            const utterance = new SpeechSynthesisUtterance(chunk);
            utterance.volume = currentVolume;
            utterance.rate = 1.5;
            window.speechSynthesis.speak(utterance);
            utterance.onend = () => {
                currentIndex++;
                highlightNextChunk();
            };
        };

        highlightNextChunk();
    });
};