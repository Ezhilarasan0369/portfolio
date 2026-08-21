/* =========================================================
   VYNTRA AI — SHARED PORTFOLIO ASSISTANT
========================================================= */

(function () {

    "use strict";

    function initVyntraAssistant() {

        if (document.getElementById("vyntraLauncher")) {
            return;
        }

        /* =================================================
           FLOATING BUTTON
        ================================================= */

        const launcher = document.createElement("button");

        launcher.id = "vyntraLauncher";

        launcher.setAttribute(
            "aria-label",
            "Open Vyntra AI"
        );

        launcher.innerHTML = `
            <img
                src="vyntra-ai.png"
                alt="Vyntra AI"
            >
        `;


        /* =================================================
           CHAT WINDOW
        ================================================= */

        const chat = document.createElement("section");

        chat.id = "vyntraChat";

        chat.setAttribute(
            "aria-label",
            "Vyntra AI Assistant"
        );

        chat.innerHTML = `

            <!-- HEADER -->

            <div class="vyntra-header">

                <div class="vyntra-avatar">

                    <img
                        src="vyntra-ai.png"
                        alt="Vyntra AI"
                    >

                </div>


                <div class="vyntra-header-info">

                    <h3>
                        Vyntra AI
                    </h3>

                    <div class="vyntra-status">

                        <span
                            class="vyntra-status-dot">
                        </span>

                        AI Portfolio Assistant

                    </div>

                </div>


                <button
                    id="vyntraClose"
                    aria-label="Close Vyntra AI">

                    <i class="fa-solid fa-xmark"></i>

                </button>

            </div>


            <!-- MESSAGES -->

            <div
                class="vyntra-messages"
                id="vyntraMessages">

                <div class="vyntra-message bot">

                    👋 Hi! I'm
                    <strong>Vyntra AI</strong>.

                    <br><br>

                    I'm Ezhilarasan's
                    AI Portfolio Assistant.

                    <br><br>

                    I can help you explore his
                    <strong>
                        projects, skills,
                        certifications and career focus.
                    </strong>

                </div>


                <!-- QUICK QUESTIONS -->

                <div class="vyntra-quick">

                    <button
                        data-question="Tell me about Ezhilarasan">

                        👤 Tell me about Ezhilarasan

                    </button>


                    <button
                        data-question="What projects has Ezhilarasan done?">

                        🚀 Show his projects

                    </button>


                    <button
                        data-question="What certifications does Ezhilarasan have?">

                        🏆 Certifications

                    </button>


                    <button
                        data-question="What are Ezhilarasan's technical skills?">

                        💻 Technical Skills

                    </button>


                    <button
                        data-question="What is Ezhilarasan's career goal?">

                        🎯 Career Goal

                    </button>

                </div>

            </div>


            <!-- INPUT -->

            <div class="vyntra-input-area">

                <input
                    type="text"
                    id="vyntraInput"
                    placeholder="Ask about Ezhilarasan..."
                    autocomplete="off"
                >

                <button
                    id="vyntraSend"
                    aria-label="Send">

                    <i class="fa-solid fa-paper-plane"></i>

                </button>

            </div>

        `;


        /* =================================================
           ADD TO PAGE
        ================================================= */

        document.body.appendChild(
            launcher
        );

        document.body.appendChild(
            chat
        );


        /* =================================================
           ELEMENTS
        ================================================= */

        const vyntraLauncher =
            document.getElementById(
                "vyntraLauncher"
            );

        const vyntraChat =
            document.getElementById(
                "vyntraChat"
            );

        const vyntraClose =
            document.getElementById(
                "vyntraClose"
            );

        const vyntraMessages =
            document.getElementById(
                "vyntraMessages"
            );

        const vyntraInput =
            document.getElementById(
                "vyntraInput"
            );

        const vyntraSend =
            document.getElementById(
                "vyntraSend"
            );


        /* =================================================
           OPEN
        ================================================= */

        function openVyntra() {

            vyntraChat.classList.add(
                "vyntra-open"
            );

            vyntraChat.style.display =
                "flex";

            vyntraChat.style.visibility =
                "visible";

            vyntraChat.style.opacity =
                "1";

            vyntraLauncher.style.display =
                "none";


            setTimeout(
                function () {

                    if (vyntraInput) {

                        vyntraInput.focus();

                    }

                },
                150
            );

        }


        /* =================================================
           CLOSE
        ================================================= */

        function closeVyntra() {

            vyntraChat.classList.remove(
                "vyntra-open"
            );

            vyntraChat.style.display =
                "none";

            vyntraChat.style.visibility =
                "hidden";

            vyntraChat.style.opacity =
                "0";

            vyntraLauncher.style.display =
                "flex";

        }


        /* =================================================
           ADD MESSAGE
        ================================================= */

        function addVyntraMessage(
            text,
            type
        ) {

            const message =
                document.createElement(
                    "div"
                );

            message.className =
                "vyntra-message " +
                type;

            message.innerHTML =
                text;


            const time =
                document.createElement(
                    "div"
                );

            time.style.cssText =
                "font-size:10px;" +
                "opacity:.48;" +
                "margin-top:7px;" +
                "text-align:right;" +
                "letter-spacing:.2px;";


            time.textContent =
                new Date()
                    .toLocaleTimeString(
                        [],
                        {
                            hour: "2-digit",
                            minute: "2-digit"
                        }
                    );


            message.appendChild(
                time
            );


            vyntraMessages.appendChild(
                message
            );


            vyntraMessages.scrollTop =
                vyntraMessages.scrollHeight;

        }


        /* =================================================
           ANSWER ENGINE
        ================================================= */

        function getVyntraAnswer(
            question
        ) {

            const q =
                question
                    .toLowerCase()
                    .trim();


            /* ABOUT */

            if (
                q.includes("about") ||
                q.includes("who is") ||
                q.includes("profile") ||
                q.includes("introduce")
            ) {

                return `

                    <strong>
                        Ezhilarasan P
                    </strong>

                    is a B.E. Electronics and
                    Communication Engineering student.

                    <br><br>

                    He has a strong interest in

                    <strong>
                        IT Infrastructure,
                        Networking,
                        Cloud Computing
                        and Linux.
                    </strong>

                    <br><br>

                    He is continuously building
                    his technical knowledge through
                    projects, certifications
                    and hands-on learning.

                `;

            }


            /* PROJECTS */

            if (
                q.includes("project") ||
                q.includes("projects") ||
                q.includes("built")
            ) {

                return `

                    Ezhilarasan has worked on
                    several technical projects:

                    <br><br>

                    🚀
                    <strong>
                        Smart Glove with
                        Integrated Sensors
                    </strong>

                    <br><br>

                    👁️
                    <strong>
                        Gesture Recognition System
                    </strong>

                    <br><br>

                    🔧
                    <strong>
                        IoT & Embedded Systems Projects
                    </strong>

                    <br><br>

                    These projects combine
                    electronics, IoT,
                    computer vision
                    and intelligent systems.

                `;

            }


            /* CERTIFICATIONS */

            if (
                q.includes("certification") ||
                q.includes("certifications") ||
                q.includes("certificate")
            ) {

                return `

                    Some of Ezhilarasan's
                    certifications include:

                    <br><br>

                    🏆
                    <strong>
                        Microsoft Azure Fundamentals
                        (AZ-900)
                    </strong>

                    <br><br>

                    ☁️
                    <strong>
                        Oracle Cloud Infrastructure
                        DevOps Professional
                    </strong>

                    <br><br>

                    🤖
                    <strong>
                        Google Introduction to AI
                    </strong>

                    <br><br>

                    🌐
                    <strong>
                        CCNA Networking Courses
                    </strong>

                `;

            }


            /* SKILLS */

            if (
                q.includes("skill") ||
                q.includes("skills") ||
                q.includes("technical") ||
                q.includes("technology") ||
                q.includes("technologies")
            ) {

                return `

                    Ezhilarasan's
                    technical areas include:

                    <br><br>

                    🌐
                    <strong>
                        Networking & CCNA
                    </strong>

                    <br>

                    ☁️
                    <strong>
                        Microsoft Azure
                    </strong>

                    <br>

                    🖥️
                    <strong>
                        Linux & IT Infrastructure
                    </strong>

                    <br>

                    ☁️
                    <strong>
                        Oracle Cloud
                    </strong>

                    <br>

                    🐍
                    <strong>
                        Python
                    </strong>

                    <br>

                    ☕
                    <strong>
                        Java
                    </strong>

                    <br>

                    🤖
                    <strong>
                        IoT & Embedded Systems
                    </strong>

                    <br>

                    👁️
                    <strong>
                        OpenCV
                    </strong>

                `;

            }


            /* CAREER */

            if (
                q.includes("career") ||
                q.includes("goal") ||
                q.includes("future") ||
                q.includes("job") ||
                q.includes("focus")
            ) {

                return `

                    Ezhilarasan's career focus is toward

                    <strong>
                        IT Infrastructure,
                        Networking and
                        Cloud Computing.
                    </strong>

                    <br><br>

                    He is currently developing
                    skills in

                    <strong>
                        CCNA, Azure, Linux
                        and infrastructure technologies.
                    </strong>

                `;

            }


            /* EDUCATION */

            if (
                q.includes("degree") ||
                q.includes("education") ||
                q.includes("college") ||
                q.includes("study")
            ) {

                return `

                    Ezhilarasan is pursuing

                    <strong>
                        B.E. Electronics and
                        Communication Engineering.
                    </strong>

                    <br><br>

                    He is developing his
                    technical knowledge alongside
                    his engineering studies,
                    with a focus on networking,
                    cloud and IT infrastructure.

                `;

            }


            /* AZURE */

            if (
                q.includes("azure") ||
                q.includes("az-900") ||
                q.includes("microsoft")
            ) {

                return `

                    Ezhilarasan has completed

                    <strong>
                        Microsoft Azure Fundamentals
                        (AZ-900).
                    </strong>

                    <br><br>

                    This strengthened his foundation
                    in cloud concepts and
                    Microsoft Azure services.

                `;

            }


            /* LINUX */

            if (
                q.includes("linux") ||
                q.includes("server") ||
                q.includes("system administration")
            ) {

                return `

                    <strong>
                        Linux
                    </strong>

                    is one of the areas
                    Ezhilarasan is currently learning
                    as part of his IT Infrastructure
                    journey.

                    <br><br>

                    His broader focus includes
                    networking, system administration,
                    cloud and infrastructure technologies.

                `;

            }


            /* CONTACT */

            if (
                q.includes("contact") ||
                q.includes("email") ||
                q.includes("github") ||
                q.includes("linkedin")
            ) {

                return `

                    You can connect with
                    Ezhilarasan through:

                    <br><br>

                    📧
                    <strong>
                        Email:
                    </strong>

                    ezhilarasan0369@gmail.com

                    <br><br>

                    💼
                    <strong>
                        LinkedIn:
                    </strong>

                    Ezhilarasan P

                    <br><br>

                    💻
                    <strong>
                        GitHub:
                    </strong>

                    Ezhilarasan0369

                `;

            }


            /* DEFAULT */

            return `

                I can help you explore:

                <br><br>

                👤
                <strong>
                    About Ezhilarasan
                </strong>

                <br>

                🚀
                <strong>
                    Projects
                </strong>

                <br>

                🏆
                <strong>
                    Certifications
                </strong>

                <br>

                💻
                <strong>
                    Technical Skills
                </strong>

                <br>

                🎯
                <strong>
                    Career Goal
                </strong>

                <br>

                🎓
                <strong>
                    Education
                </strong>

                <br>

                ☁️
                <strong>
                    Azure & Cloud
                </strong>

                <br>

                🐧
                <strong>
                    Linux
                </strong>

                <br>

                📧
                <strong>
                    Contact
                </strong>

                <br><br>

                Try asking:

                <strong>
                    "What projects has he done?"
                </strong>

            `;

        }


        /* =================================================
           SEND MESSAGE
        ================================================= */

        function sendVyntraMessage(
            questionOverride
        ) {

            const question =
                (
                    questionOverride ||
                    vyntraInput.value
                )
                .trim();


            if (!question) {

                return;

            }


            addVyntraMessage(
                question,
                "user"
            );


            vyntraInput.value =
                "";


            /* TYPING */

            const typing =
                document.createElement(
                    "div"
                );

            typing.className =
                "vyntra-typing";


            typing.innerHTML = `

                <span></span>
                <span></span>
                <span></span>

            `;


            vyntraMessages.appendChild(
                typing
            );


            vyntraMessages.scrollTop =
                vyntraMessages.scrollHeight;


            /* ANSWER */

            setTimeout(
                function () {

                    typing.remove();


                    const answer =
                        getVyntraAnswer(
                            question
                        );


                    addVyntraMessage(
                        answer,
                        "bot"
                    );

                },
                650
            );

        }


        /* =================================================
           EVENTS
        ================================================= */

        vyntraLauncher.addEventListener(
            "click",
            openVyntra
        );


        vyntraClose.addEventListener(
            "click",
            closeVyntra
        );


        vyntraSend.addEventListener(
            "click",
            function () {

                sendVyntraMessage();

            }
        );


        vyntraInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    event.preventDefault();

                    sendVyntraMessage();

                }

            }
        );


        /* QUICK QUESTIONS */

        vyntraMessages
            .querySelectorAll(
                ".vyntra-quick button"
            )
            .forEach(
                function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            sendVyntraMessage(
                                this.getAttribute(
                                    "data-question"
                                )
                            );

                        }
                    );

                }
            );


        /* ESCAPE */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape"
                ) {

                    closeVyntra();

                }

            }
        );

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initVyntraAssistant
        );

    } else {

        initVyntraAssistant();

    }

})();