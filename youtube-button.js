(function () {
    const backLink = document.querySelector("main a.back");
    if (!backLink || document.querySelector(".youtube-channel-button")) return;

    const row = document.createElement("div");
    row.className = "back-youtube-row";
    row.style.cssText = "display:flex; align-items:center; justify-content:center; flex-wrap:wrap; gap:18px; margin-bottom:20px;";

    backLink.parentNode.insertBefore(row, backLink);
    row.appendChild(backLink);
    backLink.style.marginBottom = "0";

    const button = document.createElement("a");
    button.className = "youtube-channel-button";
    button.href = "https://youtube.com/@arcadexzone";
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.textContent = "▶ ARCADEXZONE OFFICIAL YOUTUBE CHANNEL";
    button.style.cssText = "display:inline-block; padding:9px 16px; background:#d71920; color:#fff; border-radius:7px; text-decoration:none; font-size:13px; font-weight:bold; letter-spacing:0.3px; text-align:center;";
    row.appendChild(button);
})();
