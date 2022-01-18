var SpeechRecognition=window.webkitSpeechRecognition;
var myrecognizer=new  SpeechRecognition();

function startapp(){
    document.getElementById("bigTA").innerHTML="";
    myrecognizer.start();
}

myrecognizer.onresult=function run(resultarray){
    console.log(resultarray);
    var myspeech=resultarray.results[0][0].transcript;
    document.getElementById("bigTA").innerHTML=myspeech;
    if(myspeech=="take my selfie"){
    speaker();
    snapshot();
    downloadimg();
}
}

function speaker(){
    var synthesiser=window.speechSynthesis;
    var script="taking your selfie"
    var scriptTospeech=new SpeechSynthesisUtterance(script);
    synthesiser.speak(scriptTospeech);
    Webcam.attach("#webcamdiv");


}

Webcam.set({
    width:400,
    height:250,
    image_format:"png",
    png_quality:100
});

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfiediv").innerHTML='<img id="clickedimg" src="'+data_uri+'">';
    });

}
function downloadimg(){
   anchorV=document.getElementById("anchor");
finalimgV=document.getElementById("clickedimg").src;
  
anchorV.href=finalimgV; 

anchorV.click();

}
