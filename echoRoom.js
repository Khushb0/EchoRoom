
let leftBtn = document.querySelector('.leftbtn');
let rightBtn = document.querySelector('.rightbtn');
let cards = document.querySelectorAll('.card');


  let index = 0;

  cards.forEach((card, i) => {
    card.style.position = "absolute";
    card.style.top = "0";
    card.style.left = "0";
    card.style.opacity = i === 0 ? 1 : 0;
    card.style.zIndex = i === 0 ? 1 : 0;
  });

  function showCard(newIndex, direction) {
    if (newIndex === index) return;

    const current = cards[index];
    const next = cards[newIndex];

//currunt flip
    gsap.to(current, {
      rotateY: direction === 'right' ? 90 : -90,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        current.style.zIndex = 0;
        current.style.transform = 'rotateY(0deg)';
      }
    });
//next
    next.style.zIndex = 1;
    next.style.opacity = 0;
    next.style.transform = `rotateY(${direction === 'right' ? '-90deg' : '90deg'})`;

    gsap.to(next, {
      rotateY: 0,
      opacity: 1,
      duration: 0.5
    });

    index = newIndex;
  }

  rightBtn.addEventListener('click', () => {
    const nextIndex = (index + 1) % cards.length;
    showCard(nextIndex, 'right');
  });

  leftBtn.addEventListener('click', () => {
    const nextIndex = (index - 1 + cards.length) % cards.length;
    showCard(nextIndex, 'left');
  });


//   stop watch js 

let display = document.getElementById('display');
  let startBtn = document.getElementById('startBtn');
  let restartBtn = document.getElementById('restartBtn');
  let seconds = 59;
  let timer = null;

  function updateDisplay() {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
  }

  startBtn.addEventListener('click',()=>{
     console.log('hellow')
     if (!timer && seconds > 0) {
      timer = setInterval(() => {
        seconds--;
        console.log('helow')
        updateDisplay();
      
        if (seconds <= 0) {
          clearInterval(timer);
          timer = null;
        }
      }, 1000);
    } 
  }) 
    
 
  restartBtn.onclick = function () {
    clearInterval(timer);
    timer = null;
    seconds = 59;
    updateDisplay();
  };

  updateDisplay();


// js for mood tracker 

let sad = document.querySelector('.sad');
let neutral = document.querySelector('.neutral');
let fine = document.querySelector('.fine');
let happy = document.querySelector('.happy');
let mood = document.querySelector('.moods')
let button = document.querySelectorAll('.moods button')

sad.addEventListener('click', ()=>{
    let div = document.createElement('div');
    div.classList.add('quote')
    console.log(div)
    div.innerHTML = 'Healing doesn’t mean the damage never existed. It means it no longer controls you.';
    button.forEach((btn)=>{
        btn.style.display = 'none';
       
    })
    mood.appendChild(div)
});
neutral.addEventListener('click', ()=>{
    let div = document.createElement('div');
    div.classList.add('quote')
    console.log(div)
    div.innerHTML = 'you are doing the best you can — and that’s enough for today.';
    button.forEach((btn)=>{
        btn.style.display = 'none';
       
    })
    mood.appendChild(div)
});

fine.addEventListener('click', ()=>{
    let div = document.createElement('div');
    div.classList.add('quote')
    console.log(div)
    div.innerHTML = 'happy to see you happy';
    button.forEach((btn)=>{
        btn.style.display = 'none';
       
    })
    mood.appendChild(div)
});

happy.addEventListener('click', ()=>{
    let div = document.createElement('div');
    div.classList.add('quote')
    console.log(div)
    div.innerHTML = 'I hope you will be happy like this in every problem and tackle it wiesly';
    button.forEach((btn)=>{
        btn.style.display = 'none';
       
    })
    mood.appendChild(div)
});


//text arrea js
let textArea = document.querySelector('.toYourself textarea');
let addBtn = document.querySelector('.add');
let notelist = document.querySelector('.notelist');


window.onload = function(){
    let thoughts = JSON.parse(localStorage.getItem('thoughts')) || [];
    // console.log(thoughts, typeof thoughts, Array.isArray(thoughts));
    thoughts.forEach(addThoughtToUI);
}

addBtn.addEventListener('click', ()=>{
    let text = textArea.value.trim();
    if(!text) return;
    let thoughts = JSON.parse(localStorage.getItem('thoughts')) || [];
    if(thoughts.length >= 5){
        alert("please delete an intem to save more text");
        return;
    };
    // console.log(typeof thoughts, thoughts)
    thoughts.push(text);
    localStorage.setItem('thoughts', JSON.stringify(thoughts));
    addThoughtToUI(text);
    textArea.value = '';
})

 function addThoughtToUI(text){
     let div = document.createElement('div');
     div.classList.add('savedThought');
     div.textContent = text;
     
     let cross = document.createElement('button');
     cross.textContent = 'X';
     div.appendChild(cross)
     notelist.append(div);


     cross.addEventListener('click', () => {
        // Load existing thoughts
        let thoughts = JSON.parse(localStorage.getItem('thoughts')) || [];

        // Remove the specific text from array
        let index = thoughts.indexOf(text);
        if (index !== -1) {
            thoughts.splice(index, 1); // remove 1 item at that index
            localStorage.setItem('thoughts', JSON.stringify(thoughts));
        }

        div.remove();
    });
    div.addEventListener('click', () => {
       
        previousText = textArea.value;        
        textArea.value = text;

    });
}


   



