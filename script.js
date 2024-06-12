const qut = document.getElementById('quote');
const aut = document.getElementById('author');
const category = document.getElementById('category');
const btn = document.getElementById('generateBtn');
const spk = document.getElementById('speakBtn');

async function generateQuote() {
    try {
        let quote = await fetch("https://api.quotable.io/quotes/random");
        let data = await quote.json();
        qut.textContent = data[0].content;
        aut.textContent = "AUTHOR: " + data[0].author;
        category.textContent = "CATEGORY: " + data[0].tags.join(', ');
    } catch (err) {
        console.error(err);
    }
}

function speakText() {
    let msg = qut.textContent + "," + aut.textContent + "," + category.textContent;
    const utter = new SpeechSynthesisUtterance(msg);
    let voices = window.speechSynthesis.getVoices();
    utter.voice = voices[0];
    window.speechSynthesis.speak(utter);
}

btn.addEventListener('click', generateQuote);
spk.addEventListener('click', speakText);
