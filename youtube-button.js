
(function () {
    const backLink = document.querySelector("main a.back");
    if (!backLink || document.querySelector(".youtube-channel-button")) return;

    // BACK TO ALL GAMES: başlıkla aynı sol hiza
    backLink.style.display = "block";
    backLink.style.margin = "0 0 20px 0";
    backLink.style.textAlign = "left";

    // YouTube butonu
    const button = document.createElement("a");
    button.className = "youtube-channel-button";
    button.href = "https://youtube.com/@arcadexzone";
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.textContent = "▶ VISIT ARCADEXZONE YOUTUBE CHANNEL";

    button.style.cssText = `
        display: block;
        width: fit-content;
        max-width: 100%;
        box-sizing: border-box;
        margin: 0 auto 25px auto;
        padding: 9px 16px;
        background: #d71920;
        color: #fff;
        border-radius: 7px;
        text-decoration: none;
        font-size: 13px;
        font-weight: bold;
        letter-spacing: 0.3px;
        text-align: center;
    `;

    backLink.insertAdjacentElement("afterend", button);
})();
