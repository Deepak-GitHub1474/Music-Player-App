let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songImg = document.querySelector(".song-img");

// Song Play Pause
ctrlIcon.onclick = ()=>{
    if(ctrlIcon.classList.contains("fa-play")){
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
        
        // Set the animation
        songImg.style.animation = "songImgAnimation 3s linear infinite";
    }
    else{
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        // Stop the animation
        songImg.style.animation = "none";
    }
};

// Progress Bar Updating
song.onloadedmetadata = ()=>{
    progress.max = song.duration;
    progress.value = song.currentTime;
};

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}

// Track Progress bar
progress.onchange = ()=>{
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

