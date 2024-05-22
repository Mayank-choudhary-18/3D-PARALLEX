const parallax_el = document.querySelectorAll(".parallax");

let xvalue = 0 , yvalue = 0;

let rotatedegree = 0;

function update(cursorPosition){
    parallax_el.forEach(el =>{
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotatespeed = el.dataset.rotation;
        let isinleft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zvlaue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isinleft *0.2 ;
        
        el.style.transform = `perspective(2300px) translateZ(${zvlaue * speedz}px) rotateY(${rotatedegree * rotatespeed}deg) translateX(calc(-50% + ${-xvalue * speedx}px)) translateY(calc(-50% + ${-yvalue * speedy}px)) `;
    });
}

update(0)

window.addEventListener("mousemove" ,(e)=>{
    if(timeline.isActive()) return;
    xvalue = e.clientX - window.innerWidth / 2;
    yvalue = e.clientY - window.innerHeight / 2;

    rotatedegree = (xvalue / (window.innerWidth / 2)) * 20;
    // const fortest = document.querySelector(".mountain-2")
    
   update(e.clientX)
});

