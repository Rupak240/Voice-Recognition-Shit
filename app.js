const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greetings = [
  "I am good you little piece of love",
  "Doing good fuckboy",
  "leave me alone",
];

const weather = [
  "weather is fine",
  "U need a tan",
  "Get the fuck out and see the weather",
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log("voice is activated, you can go to microphone");
};

recognition.onresult = (event) => {
  // console.log(event);
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;

  readOutLoud(transcript);
};

// add the listener to the btn

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "I donot know what you said";

  if (message.includes("how are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }

  
  if (message.includes("weather")) {
    const finalText = weather[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
