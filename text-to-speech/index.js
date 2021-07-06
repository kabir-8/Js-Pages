const speak = () => {
    const message = document.querySelector("#textToSpeech").value;
    var speech = new SpeechSynthesisUtterance();
  
    //Set various utterance properties
    speech.lang = "en-US";
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
  
    window.speechSynthesis.speak(speech);
  };
  chrome.tts.speak('Speak this first.');
chrome.tts.speak(
    'Speak this next, when the first sentence is done.', {'enqueue': true});