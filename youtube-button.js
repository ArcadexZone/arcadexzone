
(function () {
    const backLink = document.querySelector("main a.back");
    if (!backLink || document.querySelector(".youtube-channel-button")) return;

    const button = document.createElement("a");
    button.className = "youtube-channel-button";
    button.href = "https://youtube.com/@arcadexzone";
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.textContent = "▶ ARCADEXZONE OFFICIAL YOUTUBE CHANNEL";

    button.style.cssText = `
        display: block;
        width: fit-content;
        max-width: 100%;
        box-sizing: border-box;
        margin: 20px auto;
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
