const terminalHtmlDiv = document.getElementById("terminal");

const activeHandHtmlSpan = document.getElementById("active-hand");
const activeHandXHtmlSpan = document.getElementById("active-hand-x");
const activeHandYHtmlSpan = document.getElementById("active-hand-y");

function terminal(text) {
    terminalHtmlDiv.innerHTML = terminalHtmlDiv.innerHTML + `<div>${text}</div>`;
}

function panelRender(deviceId, directionX, directionY) {
    
    activeHandHtmlSpan.innerHTML     = deviceId;
    activeHandXHtmlSpan.innerHTML    = directionX;
    activeHandYHtmlSpan.innerHTML    = directionY;
}