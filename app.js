// Get the button 
var mybutton = document.getElementById("myBtn");

// Get the Navbar

// When the user scroll down 20px from the top of the document show the button
window.onscroll = function() {
    scrollFunction()
    
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block';
    }else {
        mybutton.style.display = 'none';
    }
}

// function scrollNav() {
//     if (document.body.scrollTop > 2)
// }

// When the use click on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// hide the navbar when scrolling

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// };
