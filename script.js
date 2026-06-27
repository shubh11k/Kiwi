/* ==========================
   LOADING SCREEN
========================== */

const loading = document.getElementById("loading-screen");
const website = document.getElementById("website");

setTimeout(() => {
    loading.style.display = "none";
    website.classList.remove("hidden");
}, 3000);

/* ==========================
   PAGES
========================== */

const envelopePage = document.getElementById("envelope-page");
const letterPage = document.getElementById("letter-page");
const reasonsPage = document.getElementById("reasons-page");
const promisePage = document.getElementById("promise-page");
const finalPage = document.getElementById("final-page");

function showPage(page){

    document.querySelectorAll(".page").forEach(section=>{
        section.classList.remove("active");
    });

    page.classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

/* ==========================
   ENVELOPE
========================== */

const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click",()=>{

    envelope.classList.add("open");

    setTimeout(()=>{

        showPage(letterPage);
        startTyping();

    },1800);

});

/* ==========================
   TYPEWRITER LETTER
========================== */

const letter = `

Dear Angel ❤️

Sometimes I wonder how someone can make my day
better without even trying.

Then I remember you.

You are the first person I want to tell
when something good happens.

You are also the person I think about
before I fall asleep.

Thank you for always caring.

Thank you for making me smile.

Thank you for being yourself.

No matter where life takes us,
I'll always choose honesty,
respect,
loyalty,
and you.

I love you more than words can explain.

❤️

Forever Yours,
~shubhhh

`;

const typewriter = document.getElementById("typewriter");

let index = 0;

function startTyping(){

    typewriter.innerHTML="";
    index=0;

    function type(){

        if(index < letter.length){

            typewriter.innerHTML += letter.charAt(index);

            index++;

            setTimeout(type,40);

        }

    }

    type();

}

/* ==========================
   BUTTONS
========================== */

document.getElementById("nextBtn").addEventListener("click",()=>{

    showPage(reasonsPage);

});

document.getElementById("promiseBtn").addEventListener("click",()=>{

    showPage(promisePage);

});

document.getElementById("finalBtn").addEventListener("click",()=>{

    showPage(finalPage);

    createConfetti();

});

/* ==========================
   CONFETTI
========================== */

function createConfetti(){

    for(let i=0;i<120;i++){

        let piece=document.createElement("div");

        piece.style.position="fixed";
        piece.style.left=Math.random()*100+"vw";
        piece.style.top="-20px";
        piece.style.width="10px";
        piece.style.height="10px";
        piece.style.borderRadius="50%";

        const colors=[
            "#ff4d88",
            "#ff99cc",
            "#ffffff",
            "#ffd700",
            "#ff66b2"
        ];

        piece.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        piece.style.pointerEvents="none";
        piece.style.zIndex="9999";

        document.body.appendChild(piece);

        let duration=3000+Math.random()*3000;

        piece.animate([
            {
                transform:"translateY(0px) rotate(0deg)",
                opacity:1
            },
            {
                transform:`translateY(${window.innerHeight+100}px) rotate(${Math.random()*720}deg)`,
                opacity:0
            }
        ],{
            duration:duration,
            easing:"linear"
        });

        setTimeout(()=>{
            piece.remove();
        },duration);

    }

}