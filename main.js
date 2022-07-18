//https://teachablemachine.withgoogle.com/models/dmdCXUILs/

prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width:330,
    height:330,
    image_format:'png',
    png_quality:100
});

camera = document.getElementById("camera");
Webcam.attach('#camera');


function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie").innerHTML = '<img id="caputred_img" src="'+data_uri+'"/>';
    });
}

function speak(){
    var synth = widow.speechSynthesis;
    speak_data_1 = "The first prediciton is"+prediction_1;
    speak_data_2 = "The second prediction is"+prediction_2;
    var sound = new SpeechSynthesisItterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
    
}
