/**
 * Created by liuqiao on 01/11/2016.
 */

function heart () {
    var heart = document.getElementById('heart');
    var thanks = document.getElementById('heart_thanks');
    heart.style.transform =  "rotateY(720deg)";
    heart.style.transition = "transform 1s ease-out";
    heart.style.backgroundColor = "#ccc";
    thanks.style.display = "block";
}

