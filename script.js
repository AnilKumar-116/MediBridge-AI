/* ==========================================
   MEDIBRIDGE AI - SCRIPT.JS (PART 1)
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       SMOOTH SCROLL
    =========================== */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /* ===========================
       NAVBAR SCROLL EFFECT
    =========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 50){

            header.style.background = "rgba(7,17,31,.92)";
            header.style.boxShadow = "0 10px 35px rgba(0,0,0,.35)";

        }

        else{

            header.style.background = "rgba(7,17,31,.55)";
            header.style.boxShadow = "none";

        }

    });

    /* ===========================
       ACTIVE NAVIGATION
    =========================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll",()=>{

        let current = "";

        sections.forEach(section=>{

            const top = section.offsetTop - 150;

            if(window.scrollY >= top){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){

                link.classList.add("active");

            }

        });

    });

    /* ===========================
       SCROLL REVEAL
    =========================== */

    const revealElements = document.querySelectorAll(

        ".card,.step,.cta,.phone,.hero-left,.hero-right"

    );

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("fade-up");

            }

        });

    },{

        threshold:.2

    });

    revealElements.forEach(el=>{

        observer.observe(el);

    });

    /* ===========================
       ANIMATED COUNTERS
    =========================== */

    const counters = document.querySelectorAll(".stats h2");

    counters.forEach(counter=>{

        const updateCounter = ()=>{

            const target = +counter.innerText.replace(/\D/g,'');

            let count = +counter.getAttribute("data-count") || 0;

            const increment = target / 100;

            if(count < target){

                count += increment;

                counter.setAttribute("data-count",count);

                counter.innerText = Math.ceil(count)+"+";

                requestAnimationFrame(updateCounter);

            }

            else{

                counter.innerText = target+"+";

            }

        };

        updateCounter();

    });

});
/* ==========================================
   MEDIBRIDGE AI - SCRIPT.JS (PART 2)
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       FLOATING PARTICLES
    =========================== */

    const hero = document.querySelector(".hero");

    if(hero){

        for(let i = 0; i < 25; i++){

            const particle = document.createElement("div");

            particle.classList.add("particle");

            particle.style.left = Math.random() * 100 + "%";
            particle.style.top = Math.random() * 100 + "%";

            particle.style.animationDuration =
                (8 + Math.random() * 10) + "s";

            particle.style.animationDelay =
                Math.random() * 5 + "s";

            hero.appendChild(particle);

        }

    }

    /* ===========================
       PHONE TILT EFFECT
    =========================== */

    const phone = document.querySelector(".phone");

    if(phone){

        phone.addEventListener("mousemove",(e)=>{

            const rect = phone.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - .5) * 18;
            const rotateX = ((y / rect.height) - .5) * -18;

            phone.style.transform =
                `perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.02)`;

        });

        phone.addEventListener("mouseleave",()=>{

            phone.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";

        });

    }

    /* ===========================
       BUTTON RIPPLE EFFECT
    =========================== */

    const buttons = document.querySelectorAll(

        ".primary-btn,.btn-nav,.search-box button"

    );

    buttons.forEach(button=>{

        button.addEventListener("click",(e)=>{

            const ripple = document.createElement("span");

            const rect = button.getBoundingClientRect();

            const size = Math.max(rect.width,rect.height);

            ripple.style.width = size + "px";
            ripple.style.height = size + "px";

            ripple.style.left =
                e.clientX - rect.left - size/2 + "px";

            ripple.style.top =
                e.clientY - rect.top - size/2 + "px";

            ripple.style.position = "absolute";
            ripple.style.borderRadius = "50%";
            ripple.style.background = "rgba(255,255,255,.35)";
            ripple.style.transform = "scale(0)";
            ripple.style.animation = "ripple .7s linear";
            ripple.style.pointerEvents = "none";

            button.style.position = "relative";
            button.style.overflow = "hidden";

            button.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },700);

        });

    });

    /* ===========================
       LIVE MEDICINE STATUS
    =========================== */

    const status = document.querySelector(".green-text");

    if(status){

        const availability = [

            "97% Available",
            "95% Available",
            "99% Available",
            "96% Available",
            "98% Available"

        ];

        let index = 0;

        setInterval(()=>{

            index++;

            if(index >= availability.length){

                index = 0;

            }

            status.textContent = availability[index];

        },2500);

    }

    /* ===========================
       HERO PARALLAX
    =========================== */

    document.addEventListener("mousemove",(e)=>{

        const glow = document.querySelector(".hero-right");

        if(!glow) return;

        const x = (window.innerWidth / 2 - e.clientX) / 40;
        const y = (window.innerHeight / 2 - e.clientY) / 40;

        glow.style.transform =
            `translate(${x}px, ${y}px)`;

    });

});
/* ==========================================
   MEDIBRIDGE AI - SCRIPT.JS (PART 3)
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==================================
       SCROLL TO TOP BUTTON
    ================================== */

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.className = "scroll-top";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {

        if(window.scrollY > 500){

            topButton.classList.add("show");

        }else{

            topButton.classList.remove("show");

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /* ==================================
       LOADING SCREEN
    ================================== */

    const loader = document.createElement("div");

    loader.className = "loader";

    loader.innerHTML = `
        <div class="loader-box">
            <div class="loader-spinner"></div>
            <h2>MediBridge AI</h2>
            <p>Connecting patients to medicines...</p>
        </div>
    `;

    document.body.appendChild(loader);

    window.addEventListener("load",()=>{

        setTimeout(()=>{

            loader.classList.add("hide-loader");

        },1000);

    });

    /* ==================================
       HERO TEXT TYPING EFFECT
    ================================== */

    const heading = document.querySelector(".hero h1");

    if(heading){

        const text = heading.innerHTML;

        heading.innerHTML = "";

        let index = 0;

        function type(){

            if(index < text.length){

                heading.innerHTML += text.charAt(index);

                index++;

                setTimeout(type,20);

            }

        }

        type();

    }

    /* ==================================
       FEATURE CARD HOVER GLOW
    ================================== */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            card.style.background =

            `radial-gradient(circle at ${x}px ${y}px,

            rgba(0,229,255,.18),

            rgba(255,255,255,.05))`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.background="rgba(255,255,255,.05)";

        });

    });

    /* ==================================
       BUTTON HOVER SOUND (Optional)
    ================================== */

    const buttons = document.querySelectorAll(

        ".primary-btn,.btn-nav"

    );

    buttons.forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            btn.style.boxShadow="0 0 45px rgba(0,229,255,.45)";

        });

        btn.addEventListener("mouseleave",()=>{

            btn.style.boxShadow="";

        });

    });

    /* ==================================
       EMERGENCY PULSE
    ================================== */

    const patient = document.querySelector(".patient-dot");

    if(patient){

        setInterval(()=>{

            patient.animate([

                {

                    transform:"scale(1)",

                    opacity:1

                },

                {

                    transform:"scale(1.6)",

                    opacity:.6

                },

                {

                    transform:"scale(1)",

                    opacity:1

                }

            ],{

                duration:1200

            });

        },1800);

    }

    /* ==================================
       RANDOM PHARMACY STATUS
    ================================== */

    const statuses = [

        "Available",

        "Limited Stock",

        "High Demand",

        "Restocked",

        "Open 24/7"

    ];

    const medicineCards = document.querySelectorAll(".medicine-card");

    setInterval(()=>{

        medicineCards.forEach(card=>{

            const p = card.querySelector("p");

            if(!p) return;

            p.textContent =

            statuses[Math.floor(Math.random()*statuses.length)];

        });

    },6000);

    /* ==================================
       CONSOLE MESSAGE
    ================================== */

    console.log(

        "%c🚑 MediBridge AI Loaded Successfully",

        "color:#00E5FF;font-size:18px;font-weight:bold;"

    );

});