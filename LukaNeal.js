document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball() {
  let eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotate = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = `rotate(${rotate}deg)`;
  });
}

function ChangeImageUp(){
    let displayImage = document.getElementById('lukaimg1');
    if(displayImage.src.match('lukaimg1.jpg')){
      displayImage.src = 'lukaimg2.jpg'
    }
    else if(displayImage.src.match('lukaimg2')){
      displayImage.src = 'lukaimg3.jpg'
    }
    else if(displayImage.src.match('lukaimg3')){
      displayImage.src = 'lukaimg4.jpg'
    }
    else if(displayImage.src.match('lukaimg4')){
      displayImage.src = 'lukaimg5.jpg'
    }
    else if(displayImage.src.match('lukaimg5')){
      displayImage.src = 'lukaimg6.jpg'
    }
    else{
      displayImage.src = 'lukaimg1.jpg'
    }}

function ChangeImageDown() {
    let displayImage = document.getElementById('img1');
    if(displayImage.src.match('lukaimg1.jpg')){
        displayImage.src = 'lukaimg6.jpg'
      }
    else if(displayImage.src.match('lukaimg6')){
        displayImage.src = 'lukaimg5.jpg'
      }
      else if(displayImage.src.match('lukaimg5')){
        displayImage.src = 'lukaimg4.jpg'
      }
    else if(displayImage.src.match('lukaimg4')){
        displayImage.src = 'lukaimg3.jpg'
      }
      else if(displayImage.src.match('lukaimg3')){
        displayImage.src = 'lukaimg2.jpg'
      }
    else{
        displayImage.src = 'lukaimg1.jpg'
      }

    }

    const move = document.getElementById("ball");
    const move_2 = document.getElementById("ball2");
    const move_3 = document.getElementById("ball3");
    const move_4 = document.getElementById("ball4");
    const move_5 = document.getElementById("ball5");
    const move_6 = document.getElementById("ball6");
    const move_7 = document.getElementById("ball7");
    const move_8 = document.getElementById("ball8");
    const move_9 = document.getElementById("ball9");
    document.body.onpointermove = event => {
        const { clientX} = event;
    
        move.animate({
            left: `${(.2)*clientX}px`,
        }, {duration: 500, fill: "forwards"})
        move_2.animate({
          left: `${(.15)*clientX}px`,
         }, {duration: 500, fill: "forwards"})
         move_3.animate({
          left: `${(.1)*clientX}px`,
         }, {duration: 500, fill: "forwards"})
         move_4.animate({
          left: `${(.05)*clientX}px`,
         }, {duration: 500, fill: "forwards"})
         move_5.animate({
          left: `${(0)*clientX}px`,
      }, {duration: 500, fill: "forwards"})
      move_6.animate({
        left: `${(-.05)*clientX}px`,
       }, {duration: 500, fill: "forwards"})
       move_7.animate({
        left: `${(-.1)*clientX}px`,
       }, {duration: 500, fill: "forwards"})
       move_8.animate({
        left: `${(-.15)*clientX}px`,
       }, {duration: 500, fill: "forwards"})
       move_9.animate({
        left: `${(-.2)*clientX}px`,
       }, {duration: 500, fill: "forwards"})
      
  }
    
    
  

