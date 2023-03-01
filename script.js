console.log("welcome to Spotify")
//Initiallise the variables
let songindex=0;
let audioElement=new Audio('Spotify Clone/songs/1.mp3')
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let mastersongname=document.getElementById('mastersongname')
let songItem=Array.from( document.getElementsByClassName('songItem'));

let songs=[
     {songname: "FOR U ASHISH SIR", filePath:"Spotify Clone/songs/1 .mp3",coverPath:"Spotify Clone/covers/1.jpg" },
     {songname: "salam-e-Ishq2", filePath:"Spotify Clone/songs/2.mp3",coverPath:"Spotify Clone/covers/2.jpg" },
     {songname: "salam-e-Ishq3", filePath:"Spotify Clone/songs/3.mp3",coverPath:"Spotify Clone/covers/3.jpg" },
     {songname: "salam-e-Ishq4", filePath:"Spotify Clone/songs/4.mp3",coverPath:"Spotify Clone/covers/4.jpg" },
     {songname: "salam-e-Ishq5", filePath:"Spotify Clone/songs/5.mp3",coverPath:"Spotify Clone/covers/5.jpg" },
     {songname: "salam-e-Ishq6", filePath:"Spotify Clone/songs/6.mp3",coverPath:"Spotify Clone/covers/6.jpg" },
     {songname: "salam-e-Ishq7", filePath:"Spotify Clone/songs/7.mp3",coverPath:"Spotify Clone/covers/7.jpg" },
     {songname: "salam-e-Ishq8", filePath:"Spotify Clone/songs/8.mp3",coverPath:"Spotify Clone/covers/8.jpg" },
     {songname: "salam-e-Ishq9", filePath:"Spotify Clone/songs/9.mp3",coverPath:"Spotify Clone/covers/9.jpg" },
     {songname: "salam-e-Ishq10", filePath:"Spotify Clone/songs/10.mp3",coverPath:"Spotify Clone/covers/10.jpg"},
]
songItem.forEach((Element,i) =>{
    Element.getElementsByTagName("img")[0].src =songs[i].coverPath; 
    Element.getElementsByClassName("songname")[0].innerText=songs[i].songname
})
//audioelement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//handle play pause click

//listen to events

audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    
    
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`Spotify Clone/songs/${songindex + 1}.mp3`;
        mastersongname.innerText=songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
      if(songindex>=9)
      {
        songindex=0;
      }
      else{
        songindex +=1;
      }
      audioElement.src=`Spotify Clone/songs/${songindex + 1}.mp3`;
      mastersongname.innerText=songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
      if(songindex<=0)
      {
        songindex=0;
      }
      else{
        songindex -=1;
      }
      audioElement.src=`Spotify Clone/songs/${songindex + 1}.mp3`;
      mastersongname.innerText=songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})