function openMenu(){

    if(window.innerWidth > 768){
    document.getElementById('side-menu').style.width = '150px';

    
    } else {
        vw = window.innerWidth;
        rest = (vw - 70);
        console.log(rest);
        document.getElementById('side-menu').style.width = rest + 'px';
    }

    document.getElementById('open').style.display = 'none';

    document.getElementById('close').style.display = 'block';
   
}

function closeMenu(){
     document.getElementById('side-menu').style.width = '0px';

     document.getElementById('open').style.display = 'block';

     document.getElementById('close').style.display = 'none';
}

function sqBracket(id){
    if (document.getElementById(id).innerHTML.includes('[')) {}
    else {
    let original = document.getElementById(id).innerHTML;
    let trimmed = original.slice(6);
    console.log(trimmed);
    let modified = `[${trimmed}]`;
    document.getElementById(id).innerHTML = modified;
   }
}

function noSqBracket(id){
    let current = document.getElementById(id).innerHTML;
    let modified = current.slice(1, -1);
    document.getElementById(id).innerHTML = '\u00A0' + modified;
}

function openPage(page, arrayNo){
    
    document.getElementById(page).style.display = 'flex';


    let x = document.getElementsByClassName('main-panel-item');    
    
    for (let i = 0; i < x.length; i++) {
        if (i != arrayNo){
            x[i].style.display = "none";
        }    
    }
}

function closePages(){
    let x = document.getElementsByClassName('main-panel-item');  
    for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
    }
}

function home(){
    document.getElementById('about-page').style.display = 'flex';
}

function lightMode(){
    document.documentElement.style.setProperty('--background', '#c6b4b4ff');

    document.documentElement.style.setProperty('--item', '#c6b4b4ff');

    document.documentElement.style.setProperty('--white', '#030712');

    document.documentElement.style.setProperty('--lightmode', '#c6b4b4ff');

    // let logos = document.getElementsByClassName('logo-item');
    // Array.from(logos).forEach(element => {
    //     element.style.filter = 'grayscale(100%)' + 'contrast(500%)';
    // })

    document.getElementById('sq').style.filter = 'invert()';
    document.getElementById('wp').style.filter = 'grayscale(100%)' + 'contrast(500%)';
}

function darkMode(){
     document.documentElement.style.setProperty('--background', '#030712');

    document.documentElement.style.setProperty('--item', '#10141f');

    document.documentElement.style.setProperty('--white', '#C7C7C7');

    document.documentElement.style.setProperty('--lightmode', '#C7C7C7');

    // let logos = document.getElementsByClassName('logo-item');
    // Array.from(logos).forEach(element => {
    //     element.style.filter = 'none';
    // })
    document.getElementById('sq').style.filter = '';
    document.getElementById('wp').style.filter = '';
}

function programText(target, text){
    document.getElementById(target).style.fontFamily = 'sanscode';
    document.getElementById(target).style.fontSize = '0.8rem';
    document.getElementById(target).style.transform = 'translateY(37%)';
    document.getElementById(target).innerHTML = text;
}

function revertProgramText(){
    const skillTitles = document.querySelectorAll('.skill-title');

    skillTitles.forEach(element => {
    element.style.fontFamily = 'bagnard'; 
    element.style.fontSize = '2rem';       
    element.style.transform = 'translateY(0%)';        
    });

    skillTitles[0].innerHTML = 'Languages';
     skillTitles[1].innerHTML = 'Programs & Platforms'

}