const images = [
  "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600",
];
var image = document.getElementById("carouselImg");
let index = 0;
let slideShowRunning = true;

function updateImage() {
  image.src = images[index];
    if(slideShowRunning)
        {
            scheduleAutoSlide();
        }
}

updateImage();


function nextImg() {
slideShowRunning=false;
    
      index++;

  if (index >= images.length) 
  {
    index = 0;     
  }
  updateImage();
}

function previousImg() {
    slideShowRunning=false;
  if (index == 0) {
    index = images.length - 1;
  } else index--;

  updateImage();
}
function scheduleAutoSlide() {
           setTimeout( () => 
                      {
               if(slideShowRunning){
               index++;
               if(index>=images.length)
                   {
                       index=0;
                   }
               updateImage();}
           }, 2000); 
}
