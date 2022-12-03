function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true, video: false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YH04Bv5rF/model.json', {probabilityThreshold: 0.7}, modelReady)
}
function modelReady(){
classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;

function gotResults(error, results){
    if(error){
        console.error(error)
    }
    else{
        random_number_R = Math.floor(Math.random()*255) + 1;
        random_number_G = Math.floor(Math.random()*255) + 1;
        random_number_B = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_label").innerHTML = "Detected voice is off -" + results[0].label;
        document.getElementById("result_count").innerHTML = "Detected dog = " + dog + " cat =  " + cat;
        document.getElementById("result_label").style.color = "RGB(" + random_number_R + "," + random_number_G + "," + random_number_B + ")";
        document.getElementById("result_count").style.color = "RGB(" + random_number_R + "," + random_number_G + "," + random_number_B + ")";
        img = document.getElementById('animal_image');
        
        if(results[0].label == "Doggo"){
            img.src = 'bark.gif';
            dog = dog + 1;
        }
        else if(results[0].label == "Yo Meowo"){  
            img.src = 'meow.gif';
        cat = cat + 1;}
        else{
            img.src = 'listen.gif'
        }
      
    }
}


