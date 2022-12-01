const hamburgeropen = document.querySelector('#open');
const hamburgerclose = document.querySelector('#close');
const hamburgerlist = document.querySelector('#list');

hamburgeropen.addEventListener('click',()=>{
    hamburgerlist.classList.toggle('toggle');
});

hamburgerclose.addEventListener('click',()=>{
    hamburgerlist.classList.toggle('toggle');
});