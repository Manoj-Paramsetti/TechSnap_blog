var basicsbtn = document.querySelector('.dd-icon-basics');
var basicsdd = document.querySelector('.dd-basics');
var jobbtn = document.querySelector('.dd-icon-job');
var jobdd = document.querySelector('.dd-job');
var skillsbtn = document.querySelector('.dd-icon-skills');
var skillsdd = document.querySelector('.dd-skills');
var careerbtn = document.querySelector('.dd-icon-career');
var careerdd = document.querySelector('.dd-career');
var gettingjobbtn = document.querySelector('.dd-icon-gettingjob');
var gettingjobdd = document.querySelector('.dd-gettingjob');
var showhideBtn = document.querySelector('.show-hide-text');
var showhidedd = document.querySelector('.main-col-4');
var showhideicon = document.querySelector('.fontt');


basicsbtn.addEventListener("click", ()=>{
    basicsdd.classList.toggle('dis-basics-open');

})

jobbtn.addEventListener("click", ()=>{
    jobdd.classList.toggle('dis-jobs-open');

})
skillsbtn.addEventListener("click", ()=>{
    skillsdd.classList.toggle('dis-skills-open');

})
careerbtn.addEventListener("click", ()=>{
    careerdd.classList.toggle('dis-career-open');

})
gettingjobbtn.addEventListener("click", ()=>{
    gettingjobdd.classList.toggle('dis-gettingjob-open');

})

showhideBtn.addEventListener("click", ()=>{
    if (showhideBtn.innerHTML === 'Hide Table of contents') {
        showhidedd.classList.toggle('dis-open');
        showhideicon.classList.toggle('trans');
        showhideBtn.innerHTML = 'Show Table of contents';
    } else {
        showhidedd.classList.toggle('dis-open');
        showhideicon.classList.toggle('trans');
        showhideBtn.innerHTML = 'Hide Table of contents';
    }
    // showhidedd.classList.toggle('dis-open');

})






//aside is your sidebar selector
var aside = document.querySelector('stick-to-top');
//sticky sidebar on scrolling
var startScroll = aside.offsetTop;
var endScroll = window.innerHeight - aside.offsetHeight;
var currPos = window.scrollY;
document.addEventListener('scroll', () => {
    var asideTop = parseInt(aside.style.top.replace('px;', ''));
    if (window.scrollY < currPos) {
        //scroll up
        if (asideTop < startScroll) {
            aside.style.top = (asideTop + currPos - window.scrollY) + 'px';
        } else if (asideTop > startScroll && asideTop != startScroll) {
            aside.style.top = startScroll + 'px';
        }
    } else {
        //scroll down
        if (asideTop > endScroll) {
            aside.style.top = (asideTop + currPos - window.scrollY) + 'px';
        } else if (asideTop < (endScroll) && asideTop != endScroll) {
            aside.style.top = endScroll + 'px';
        }
    }
    currPos = window.scrollY;
});
//this code will bring to you sidebar on refresh page
function asideToMe() {
    setTimeout(() => {
        aside.style.top = startScroll + 'px';
    }, 300);
}
asideToMe();