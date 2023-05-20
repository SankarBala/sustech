//for image auto slider
var counter= 1;
setInterval(function(){
    document.getElementById('radio' +counter).checked= true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);

//for menu-btn

const menubtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".menu");
const navigationItems = document.querySelectorAll(".menu a");

menubtn.addEventListener("click", () => {
    menubtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItems) => {
    navigationItems.addEventListener("click", () => {
        menubtn.classList.remove("active");
        navigation.classList.remove("active");

    })
});


//for sticky navigation bar on scroll
window.addEventListener("scroll",function(){
    const header = document.querySelector(".main-header");
    header.classList.toggle('sticky',window.scrollY > 0)
})


// for items reveals from top
window.addEventListener("scroll",reveal);

   function reveal(){
	   var reveals = document.querySelectorAll(".reveal");
	   for(var i = 0; i < reveals.length; i++){
		   var windowheight = window.innerHeight;
		   var revealtop = reveals[i].getBoundingClientRect().top;
		   var revealpoint = 100;

		   if(revealtop < windowheight - revealpoint){
			   reveals[i].classList.add("active");

		   }else{
			reveals[i].classList.remove("active");
		   }
	   }
   };

// for items reveals from left
window.addEventListener("scroll",revealLeft);

   function revealLeft(){
	   var revealsLeft = document.querySelectorAll(".revealLeft");
	   for(var i = 0; i < revealsLeft.length; i++){
		   var windowheight = window.innerHeight;
		   var revealLeft = revealsLeft[i].getBoundingClientRect().top;
		   var revealpoint = 100;

		   if(revealLeft < windowheight - revealpoint){
			   revealsLeft[i].classList.add("active");

		   }else{
			revealsLeft[i].classList.remove("active");
		   }
	   }
   };
   // for items reveals from right
window.addEventListener("scroll",revealRight);

function revealRight(){
    var revealsRight = document.querySelectorAll(".revealRight");
    for(var i = 0; i < revealsRight.length; i++){
        var windowheight = window.innerHeight;
        var revealRight = revealsRight[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealRight < windowheight - revealpoint){
            revealsRight[i].classList.add("active");

        }else{
         revealsRight[i].classList.remove("active");
        }
    }
};


//for to top
const totop = document.querySelector(".to-top");
window.addEventListener("scroll",() => {
  if(window.pageYOffset > 3600){
    totop.classList.add("active")
  }else{
    totop.classList.remove("active")
  }
});
  
