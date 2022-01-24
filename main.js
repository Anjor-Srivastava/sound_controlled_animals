function start_classification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Zktn2wVFX/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotReasults);
}

function gotReasults(error, results) {
    console.log(results);
}