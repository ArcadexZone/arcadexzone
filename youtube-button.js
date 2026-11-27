
(function () {
    const backLink = document.querySelector("main a.back");
    if (!backLink || document.querySelector(".youtube-channel-button")) return;

    const row = document.createElement("div");
    row.style.cssText = `
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        width: 100%;
        margin-bottom: 25px;
    `;

    backLink.parentNode.insertBefore(row, backLink);
    row.appendChild(backLink);

    backLink.style.display = "block";
    backLink.style.margin = "0";
    backLink.style.textAlign = "left";
    backLink.style.gridColumn = "1";

    const button = document.createElement("a");
    button.className = "youtube-channel-button";
    button.href = "https://youtube.com/@arcadexzone";
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.textContent = "▶ ARCADEXZONE YOUTUBE CHANNEL";

    button.style.cssText = `
        display: inline-block;
        grid-column: 2;
        grid-row: 1;
        padding: 9px 16px;
        background: #d71920;
        color: #fff;
        border-radius: 7px;
        text-decoration: none;
        font-size: 15px;
        font-weight: bold;
        letter-spacing: 0.3px;
        text-align: center;
        white-space: nowrap;
    `;

    row.appendChild(button);
})();
