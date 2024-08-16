function toggleMain(words) {
    const main = document.querySelector("main");
    let currentPos = 0;
    main.innerText = words[currentPos];
    main.addEventListener("click", () => {
        currentPos += 1;
        if (currentPos > words.length - 1) {
            currentPos = 0;
        }
        main.innerText = words[currentPos];
    });
}

const desc = "hello world; second wind ; third box  ";
const words = desc.split(";").map((val, idx, arr) => {
    return val.trim();
});
toggleMain(words);
