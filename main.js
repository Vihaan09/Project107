function audio_detect() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/T9_pInrUn/model.json", modelReady);
}

function modelReady() {
    console.log("model loaded!")
    classifier.classify(gotResult);
}

function gotResult(error, result) {

    
}