

$(document).ready(function(){


  $('.moodbtn').on('click', function(){
    var buttonInfo = $(this).attr('rel');
    console.log(buttonInfo);

    App.router.navigate('mood_'+ buttonInfo, true);
  });


  $('section div').on('click', 'button', function(event){
    event.preventDefault();
    $(this).fadeOut('fast');
    $("#home").show();
    // var relatedMood = '.' + $(this).attr('rel');
    // $(this).siblings('button').addClass('chosenOne');
    // $(this).siblings('h2').fadeOut('slow');
    // $(this).parent().siblings('h2').fadeOut('slow');
    // $(this).addClass('chosenOne');
    // $(relatedMood).addClass('active');
    // $(relatedMood).addClass('fadein');
    // $(relatedMood).parent('div').addClass('active');
    // $(relatedMood).parent().siblings().removeClass('active');
  });

  

});
