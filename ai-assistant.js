document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("portfolio-ai-assistant")) return;

    const assistant = document.createElement("a");

    assistant.id = "portfolio-ai-assistant";
    assistant.href = "https://ezhilarasan0369.github.io/VYNTRA-AI/";
    assistant.target = "_blank";
    assistant.rel = "noopener noreferrer";

    assistant.setAttribute("aria-label", "Open VYNTRA AI");
    assistant.title = "Ask VYNTRA AI";

    assistant.innerHTML = `
        <span class="ai-orb-glow"></span>

        <span class="ai-orb">
            <span class="ai-orb-ring"></span>

            <span class="ai-orb-core">
                V
            </span>

            <span class="ai-orb-spark spark-1">✦</span>
            <span class="ai-orb-spark spark-2">✦</span>
        </span>

        <span class="ai-assistant-label">
            <strong>VYNTRA AI</strong>
            <small>Ask anything</small>
        </span>
    `;

    document.body.appendChild(assistant);
});