
//call wow function
new WOW().init();



//--- NAV BACKGROUND MENU EFFECT --//
let navBarEffect = (e) => {

  //get window current position
  let currentScroll = Math.round(window.pageYOffset);

  //add and remove classes if true or false
  if(currentScroll > 100){
    document.querySelector('.hero__nav').classList.remove('bg-transparent');
    document.querySelector('.hero__nav').classList.add('bg-darkcyan');
  }else {
    document.querySelector('.hero__nav').classList.remove('bg-darkcyan');
    document.querySelector('.hero__nav').classList.add('bg-transparent');
  }

};


//stops scroll event from firing immediate during scroll
function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

//listen to scroll event
document.addEventListener('scroll' , debounce(navBarEffect));
