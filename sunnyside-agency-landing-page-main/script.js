let responsive = document.querySelector('.toggle');
let view = document.querySelectorAll('ul li');
let Head = document.querySelector('.heading-one');

responsive.addEventListener("click" , function () {
  if (view[0].style.display === "none"){
    view[0].style.display = 'block';
    view[1].style.display = 'block';
    view[2].style.display = 'block';
    view[3].style.display = 'block';
    Head.style.fontSize = '30px';  
    Head.style.right = '15px';
  }
  else{
    view[0].style.display = 'none';
    view[1].style.display = 'none';
    view[2].style.display = 'none';
    view[3].style.display = 'none';
    Head.style.fontSize = '40px';
  }
});
