


function toggleVideo(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("stahp");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

function toggleVideoON(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("stahp");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'show' ? 'none' : '';
    func = state == 'show' ? 'playVideo' : 'pauseVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

var count_p = 0;
var count_b = 0;
var scroll_index = 1;
var time = 5000;
 var id ;//= setInterval('plusSlides_s(1)', time); 
var start = 1;
function main(){
	clean(document.body);
	$('#drugi').hide();
	executeAsync(function() { $('#prvi').fadeToggle("slow");$('#drugi').fadeToggle("slow"); scroll_exe()});
  };
  
  function scroll_exe(){
	executeAsync(function() { $('#prvi').fadeToggle("slow");$('#drugi').fadeToggle("slow"); scroll_exe()});
  }
  
  function cheattoggle(){
	  console.log(5);
	  $('#prvi').fadeToggle("slow");
	  $('#drugi').fadeToggle("slow");
  }
  
function executeAsync(func) {
    setTimeout(func, 5000);
}



// this creates a new "thread," but doesn't make much sense to the untrained eye

  
  
/*

  function plusSlides(n) {
	clearInterval(id);
  show(scroll_index += n);
	//id = setInterval('plusSlides_s(1)', time); 

}
  function plusSlides_s(n) {

  show(scroll_index += n);


}

function currentSlide(n) {
	clearInterval(id);
  show(scroll_index = n);
  	$('#video').hide();
	//id = setInterval('plusSlides_s(1)', time); 
}
  function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
*/








  /*function show(n) {

  var i;
  var slides = document.getElementsByClassName("scroll_show");
  var dots = document.getElementsByClassName("tocka");
  if (n > slides.length) {scroll_index = 1}
  if (n < 1) {scroll_index = slides.length}

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_2", "");
  }
  if(start == 1){
	slides[scroll_index-1].style.display = "block";
  }
		start = 0;
  slides[scroll_index-1].id += " working"; 
  dots[scroll_index-1].className += " active_2"; 

}


var scroll_index = 1;
var scroll_next = scroll_index +1; 
var scroll_array = ["prvi","drugi"]

function slides_ini(){
	document.getElementById(scroll_array[scroll_index]).id.toggle("working");
	document.getElementById(scroll_array[scroll_next]).id.toggle("next_working");
		
	 $("#working").fadeIn(3000);
	
}

*/



function show_boje(){
	document.getElementById("show_hide_2").classList.toggle("show");
}


window.onclick = function(event) {
  if ($( "#show_hide" ).hasClass( "show" ) && count_p == 1) {

	document.getElementById("show_hide").classList.toggle("show");
	count_p = 0;
	//console.log(1);
  }
  
  
  else if($( "#show_hide" ).hasClass( "show" ) == false){
	// console.log(2);
  }
  
  
   else if ($( "#show_hide" ).hasClass( "show" ) && count_p == 0) {

	count_p = 1;
		//console.log(3);
  }
  else{}
  
   if ($( "#show_hide_2" ).hasClass( "show" ) && count_b == 1) {

	document.getElementById("show_hide_2").classList.toggle("show");
	count_b = 0;
	//console.log(4);
  }
  
  
  else if($( "#show_hide_2" ).hasClass( "show" ) == false){
	// console.log(5);
  }
  
  
   else if ($( "#show_hide_2" ).hasClass( "show" ) && count_b == 0) {
		//console.log(6);
	count_b = 1;
  }
  
  
  else{}
  }

  
 function show_proizvod() {
	console.log($("#show_hide").hasClass( "show" ))
	if($( "#show_hide" ).hasClass( "show" ) == false){
	document.getElementById("show_hide").classList.toggle("show");
	console.log($( "#show_hide" ).hasClass("show"))
		
	}
	else{
		
		
	}
 }


function clean(node)
{
  for(var n = 0; n < node.childNodes.length; n ++)
  {
    var child = node.childNodes[n];
    if
    (
      child.nodeType === 8 
      || 
      (child.nodeType === 3 && !/\S/.test(child.nodeValue))
    )
    {
      node.removeChild(child);
      n --;
    }
    else if(child.nodeType === 1)
    {
      clean(child);
    }
  }
}

$(document).ready(main);







