
var headerToggleLim=50;

function $(el){
    return document.getElementById(el);
}

function _(el){
    return document.querySelectorAll(el);
}

var header=$("header");
var section=_(".section");
var previousActiveScrollElement="";


window.addEventListener("scroll",function(e){
    if(window.scrollY >= headerToggleLim){
        header.classList.add("opaque");
    }
    if(window.scrollY < headerToggleLim){

        header.classList.remove("opaque");
    
    }

    section.forEach(function(e){
        
        if(window.scrollY >= (e.offsetTop - 50 ) && window.scrollY < (e.offsetTop + e.offsetHeight)){
            
            if(e.id!=previousActiveScrollElement){

                _("a[href='#"+e.id+"']")[0].classList.add("active");
                previousActiveScrollElement=e.id;
            
            } 
        } else{

            _("a[href='#"+e.id+"']")[0].classList.remove("active");
        
        }
    });



})
