$(document).ready(function() {
    $(".fancybox").fancybox({
        'titlePosition' : 'inside',
        'transitionIn' : 'none',
        'transitionOut' : 'none'
    });

   $(".toggle_item").click(function(){
	$(this).parent().parent().parent().children(".toggle_ul").slideToggle("slow");
   });
});