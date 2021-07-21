Webcam.set({
    width: 300,
    height: 220,
    image_format: 'png',
    png_quality: 10
});
cam= document.getElementById("camera");
Webcam.attach(cam);

function take_snapshot() {
    Webcam.snap(function(data_URI){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_URI+"'>";
    })
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/T8qeFT2TD/model.json',modelloaded);
function modelloaded() {
    console.log("model is loaded")
};

function check() {
    img1= document.getElementById("captured_image");
    classifier.classify(img1, gotresult);
}

function gotresult(error, result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label
        document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(2)

    }
    
}