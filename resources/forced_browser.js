/* 	Made with love by KLCiS Voucher System
	https://klinternetservices.com
	https://facebook.com/mr.partingtime
*/

document.addEventListener("DOMContentLoaded", function () {
    function isInMiniBrowser() {
        const ua = navigator.userAgent.toLowerCase();
        return (
            ua.includes("wv") ||
            ua.includes("fb") ||
            ua.includes("instagram") ||
            ua.includes("twitter") ||
            ua.includes("snapchat") ||
            ua.includes("line") ||
            ua.includes("wechat") ||
            ua.includes("tiktok")  
        );
    }

    function openInBrowser() {
        const url = window.location.href;
        if (navigator.userAgent.match(/(iPhone|iPad|iPod)/i)) {
            alert("Please copy and open this link in Safari manually: " + url);
        } else if (navigator.userAgent.match(/android/i)) {
            window.location = `googlechrome://${url.replace(/^https?:\/\//, "")}`;
            setTimeout(() => {
                window.location = `intent://${url.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=org.mozilla.firefox;end;`; 
            }, 500);
            setTimeout(() => {
                window.location = `intent://${url.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=com.microsoft.emmx;end;`; 
            }, 1000);
            setTimeout(() => {
                window.location = `https://${url}`;
            }, 1500);
        } else {
            window.location.href = `intent://${url.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=com.android.chrome;end;`;
            setTimeout(() => {
                window.location.href = `intent://${url.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=com.microsoft.emmx;end;`; 
            }, 500);
            setTimeout(() => {
                window.location.href = `https://${url}`;
            }, 1000);
        }
    }

    if (isInMiniBrowser()) {
        let popup = document.createElement("div");
        popup.id = "browserPopup";
        popup.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0, 0, 0, 0.8); display:flex; justify-content:center; align-items:center; flex-direction:column; color:white; text-align:center; z-index:9999; padding:20px;";

        let message = document.createElement("div");
        message.innerHTML = `
            <h2 style="margin-bottom: 15px;">Open in Browser</h2>
            <p style="margin-bottom: 20px;">For best experience, please open this page in Chrome, Safari, Firefox, or Edge. Tap the "Open in Browser" button, then, "CONTINUE ANYWAY VIA BROWSER".</p>
        `;

        let button = document.createElement("button");
        button.innerText = "Open in Browser";
        button.style = "padding:10px 20px; background:#007bff; color:white; font-size:16px; border:none; border-radius:5px; cursor:pointer;";
        button.onclick = openInBrowser;

        let copyLink = document.createElement("p");
        copyLink.style = "margin-top:10px; padding:10px; background:white; color:black; border-radius:5px; word-break:break-all; font-size:14px; cursor:pointer;";
        copyLink.innerText = window.location.href;
        copyLink.onclick = function () {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied! Open Safari, paste the link and proceed with the payment.");
        };

        let closeButton = document.createElement("button");
        closeButton.innerText = "Close";
        closeButton.style = "margin-top:10px; padding:5px 15px; background:#ccc; color:black; font-size:14px; border:none; border-radius:5px; cursor:pointer;";
        closeButton.onclick = function () {
            document.body.removeChild(popup);
        };

        popup.appendChild(message);
        popup.appendChild(button);
        popup.appendChild(copyLink);
        popup.appendChild(closeButton);
        document.body.appendChild(popup);
    }
});

