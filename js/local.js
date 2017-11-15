//local.js
jQuery(document).ready(function($){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});

$(document).ready(function(){
    $('.collapsible').collapsible();
});
$(function(){   
    $('.tooltipped').tooltip({delay: 50}); 
});

(function($){function injector(t,splitter,klass,after){var a=t.text().split(splitter),inject='';if(a.length){$(a).each(function(i,item){inject+='<span class="'+klass+(i+1)+'">'+item+'</span>'+after});t.empty().append(inject)}}var methods={init:function(){return this.each(function(){injector($(this),'','char','')})},words:function(){return this.each(function(){injector($(this),' ','word',' ')})},lines:function(){return this.each(function(){var r="eefec303079ad17405c889e092e105b0";injector($(this).children("br").replaceWith(r).end(),r,'line','')})}};$.fn.lettering=function(method){if(method&&methods[method]){return methods[method].apply(this,[].slice.call(arguments,1))}else if(method==='letters'||!method){return methods.init.apply(this,[].slice.call(arguments,0))}$.error('Method '+method+' does not exist on jQuery.lettering');return this}})(jQuery);

var animDelay = 0.1;
var k;
var x;
jQuery(document).ready(function($) {
    
  playAnim();
        
    
});

function playAnim() {
    
  jQuery("#port").lettering();
   
  for( x = 0; x < $("#port").children().length; x++){
 		 $(".char"+(x+1).toString()).css("animation", "port 3s "+(x*animDelay).toString()+"s 1 forwards");
  
  }
}


