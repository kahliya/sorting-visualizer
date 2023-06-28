async function animateSortingComplete() {
    // Green sweeps across each bar
    for (let bar of bars) {
        bar.htmlElement.classList.add('bar-complete');
        playNote(FREQ_MIN + bar.height/100 * (FREQ_MAX - FREQ_MIN), 50);
        await sleep(50);
        bar.htmlElement.classList.remove('bar-complete');
    }

    // All bars blink green together
    for (let bar of bars) {
        bar.htmlElement.classList.add('bar-complete');
    }

    await sleep(250);
    for (let bar of bars) {
        bar.htmlElement.classList.remove('bar-complete');
    }
}

function swapOrder(idx1, idx2) {
    let bh1 = bars[idx1].htmlElement;
    let bh2 = bars[idx2].htmlElement;
    let tmp = bh1.style.order;
    bh1.style.order = bh2.style.order;
    bh2.style.order = tmp;
    
    [bars[idx1], bars[idx2]] = [bars[idx2], bars[idx1]]
}
