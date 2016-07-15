//This will assign '1' to current image
var sliderInt=1;

//This will assign '2' to a next image
 var sliderNext=2;

//'$( document ).ready()' will check if the page Document ready //if yes, it will call the function
//
$(document).ready(
    function(){
        //this jquery function take html element ID as an    //argument and call fadeIn function for this html object
        //fadein function only take one parameter:the time to fade in
        $("#slider>img#1").fadeIn(1000);
        //after the first image fadein function also call
        //startslider function to continue slide
        startSlider();
    });

function startSlider(){
    
    //this jquery function will count the number of image
    //inside an element with the ID of #slider by calling //.size() function
    count1=$("#slider>img").size();
    
    
    loop=setInterval(function(){
        
        //if the index number of next image is bigger than the 
        //number of images,that means there is only one image
        //so both of them equal 1, so this line of code will 
        //make sure there are more than one images
        if(sliderNext>count1)
        {
            sliderNext=1;
            sliderInt=1;
        }
        
        //if there are more than one image:
        //this jquery function call fadeout function for the 
        //current image, this fadeout will continue '1000'ms
        $("#slider>img").fadeOut(1000);
        
        //this jquery function call fadein function for the next 
        //image, fade in continue '1000'ms
        $("#slider>img#"+sliderNext).fadeIn(1000);
        
        //assign next image to the variabe which store current 
        //image
        sliderInt=sliderNext;
        //add one to current image index get the next image and 
        //assign it to the variable which store next image.
        sliderNext=sliderNext+1;
    },5000);
                     
}



