function startClassification()
{
    navigator.mediaDevices.getDisplayMedia({audio:true});
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/npOQ1tL9n/model.json',modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }else{
console.log(results);
random_number_r = Maths.floor(Math.random()*225)+ 1;
random_number_g = Maths.floor(Math.random()*225)+ 1;
random_number_b = Maths.floor(Math.random()*225)+ 1;

document.getElementById("result_label").innerHTML ='I can hear - '+
results[0].label;
document.getElementById("result_label").innerHTML = 'Accuracy - '+
(results[0].confidence*100).toFixed(2)+ "%";
document.getElementById("result_label").style.color ="rgb("
+random_number_r+","+random_number_g+", "+random_number_r+")"
document.getElementById("result_confidence"),style.color = "rgb("
+random_number_r+","+random_number_g+","+random_number_r+")";

img = document.getElementById('alien1')
img1 = document.getElementById('alien2')
img2 = document.getElementById('alien3')
img3 = document.getElementById('alien4')
  
if(reaults[0].label == "Background Noise"){
    img.src = 'aliens-01.gif';
    img.src ='aliens-02.png';
    img.src = 'aliens-03.png';
    img.src = 'aliens-04.png';
}else if (results[0].label =="bell" ){
    img.src = 'aliens-01.png';
    img.src ='aliens-02.gif';
    img.src = 'aliens-03.png';
    img.src = 'aliens-04.png';
}else if (result[0].label == "droping pencil"){
img.src = 'aliens-01.png';
img.src ='aliens-02.png';
img.src = 'aliens-03.gif';
img.src = 'aliens-04.png';
}else{
    img.src = 'aliens-01.png';
    img.src ='aliens-02.png';
    img.src = 'aliens-03.png';
    img.src = 'aliens-04.gif';

    }
  }
}