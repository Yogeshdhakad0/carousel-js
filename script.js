// const  img=document.querySelector('img')
// const prev=document.querySelector('#prev');
// const next=document.querySelector('#next');
// console.log(prev)
// console.log(img)




// let images = [];
// let slideTime = 4000;

// images[0] = 'beautiful-selective-focus-shot-crystal-ball-reflecting-breathtaking-sunset.jpg'; 
// images[1] = 'lone-tree.jpg';
// images[2] = 'morskie-oko-tatry.jpg';

// console.log(images)



// window.onload = function() {
    

//    prev.addEventListener(('click',()=>{
        
//     for(let i=0; i<images.length-1;
    
//     ){

    
//     }
//     img.setAttribute('src',`${images[i
//     ]}`)
    
//    })) 

//    next.addEventListener(('click',()=>{
        
//     for(let i=0; i<images.length-1;
    
//     ){

    
//     }
//     img.setAttribute('src',`${images[i
//     ]}`)
    
//    })) 
    
    
    
    


//   }
// ;





const img = document.querySelector('img');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

console.log(prev);
console.log(img);

let images = [];
let slideTime = 4000;

images[0] = 'beautiful-selective-focus-shot-crystal-ball-reflecting-breathtaking-sunset.jpg';
images[1] = 'lone-tree.jpg';
images[2] = 'morskie-oko-tatry.jpg';

console.log(images);

let currentImageIndex = 0; 

window.onload = function() {
  img.src = images[currentImageIndex];

  prev.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; 
    img.style.transition='2s'
    
    img.src = images[currentImageIndex];
  });

  next.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length; 
    img.style.transition='2s'

    img.src = images[currentImageIndex];
  });

 
  setInterval(() => {
    next.click(); 
  }, slideTime); 
};

