let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector(".slides");
    const slideWidth = document.querySelector(".slide").clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`; 
}

setInterval(() => {
    moveSlide(1);
}, 5000);

function startRecognition(){
 
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
     alert("La reconnaissance vocale n'est pas supportée par votre navigateur.");
    } else {
     const recognition = new SpeechRecognition();
     recognition.lang = 'fr-FR'; 
     recognition.continuous = true;  
    
     const startButton = document.getElementById('voice-btn');
     const transcription = document.getElementById('search-input');
    
     
     startButton.addEventListener('click', () => {
         transcription.textContent = 'En écoute...';
         recognition.start();
     });
    
     
     recognition.onresult = function(event) {
         let transcript = '';
         for (let i = event.resultIndex; i < event.results.length; i++) {
             transcript += event.results[i][0].transcript;
         }
         transcription.value = transcript;
         console.log( transcription.textContent);
     };
     recognition.onend = function() {
         transcription.textContent += ' (Reconnaissance terminée)';
     };
    
     
     recognition.onerror = function(event) {
         transcription.textContent = 'Erreur de reconnaissance vocale : ' + event.error;
     };
    }
    }
    
    window.addEventListener("pageshow", function (event) {
        if (event.persisted) {
            
            window.location.reload();
            const resultDiv = document.getElementById('search-result');
            resultDiv.textContent=""
        }
    });
document.getElementById("addResourceForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const type = document.getElementById("type").value;
    const title = document.getElementById("title").value;
    const file = document.getElementById("file").files[0];

    if (!file) {
        alert("Veuillez sélectionner un fichier.");
        return;
    }

    console.log("Type de ressource :", type);
    console.log("Titre :", title);
    console.log("Fichier :", file);

    document.getElementById("confirmationMessage").classList.remove("hidden");

    document.getElementById("addResourceForm").reset();
});

