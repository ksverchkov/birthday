const startTypeIt = (frame, isStart=false) => {
    let titleElement = frame.querySelector('.frame-box-title');
    let descriptionElement = frame.querySelector('.frame-box-description');
    let titleText = titleElement.innerText;
    let descriptionText = descriptionElement.innerText;
    titleElement.innerHTML = '';
    descriptionElement.innerHTML = '';
    frame.classList.add('current');

    if (isStart){
        new TypeIt(titleElement, {
            speed: 50,
            startDelay: 900,
          })
        .pause(2000)
        .type(titleText);
        new TypeIt(descriptionElement, {
            speed: 50,
            startDelay: 900,
          })
        .pause(4000)
        .type(descriptionText);
    }else{
        new TypeIt(titleElement, {
            speed: 50,
            startDelay: 900,
          })
        .type(titleText);
        new TypeIt(descriptionElement, {
            speed: 50,
            startDelay: 900,
          })
        .pause(2000)
        .type(descriptionText);
    }
}

const nextFrame = () => {
    let frames = document.querySelectorAll('.frame');
    let currentFrame = document.querySelector('.current');
    let id = currentFrame.id;
    currentFrame.classList.remove('current');
    let next = 0;
    for (let f in frames){
        let frame = frames[f];
        try{
            let cid = frame.id;
            if (next == 1){
                startTypeIt(frame);
                next = 0;
            }
            if (cid == id){
                next = 1;
            }
        }catch{}
    }
}

const previousFrame = () => {
    let frames = document.querySelectorAll('.frame');
    let reverseFrames = [...frames].reverse();
    let currentFrame = document.querySelector('.current');
    let id = currentFrame.id;
    currentFrame.classList.remove('current');
    let next = 0;
    for (let f in reverseFrames){
        let frame = reverseFrames[f];
        try{
            let cid = frame.id;
            if (next == 1){
                frame.classList.add('current');
                next = 0;
            }
            if (cid == id){
                next = 1;
            }
        }catch{}
    }
}