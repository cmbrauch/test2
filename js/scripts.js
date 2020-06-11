$(document).ready(function(){
  $("form#user_survey").submit(function(event){
    event.preventDefault();
    $("#horrorscope-responses").show();
    $("input:checkbox[name=horrorscope]:checked").each(function(){
      const zodiacClass = $(this).val();
      $('#horrorscope-responses').append(zodiacClass + "<br>");
    });
    $("#season-responses").show();
    $("input:checkbox[name=season]:checked").each(function(){
      const seasonMode = $(this).val();
      $('#season-responses').append(seasonMode + "<br>");
    });
    $("#genre-responses").show();
    $("input:checkbox[name=genre]:checked").each(function(){
      const genreMode = $(this).val();
      $('#genre-responses').append(genreMode + "<br>");
    });
    $("#pets-responses").show();
    $("input:checkbox[name=pets]:checked").each(function(){
      const petsMode = $(this).val();
      $('#pets-responses').append(petsMode + "<br>");
    });
    $("#iceCream-responses").show();
    $("input:checkbox[name=iceCream]:checked").each(function(){
      const iceCreamMode = $(this).val();
      $('#icecream-responses').append(iceCreamMode + "<br>");
    });
    $('#user_survey').hide();
  });
});

//$(document).ready(function() {
//  $("form#favoriteSport").submit(function(event) {
//      const sport = $("#sport").val();
//
//      if (sport === "baseball") {
//          $("#input").text(" Definitely Python or Javascript.");
//      
//      } else if (sport === "football") {
//          $("#input").text("It sounds like you enjoy hot weather! Coding may not be for you. But you can always consider Python or Javascript");
//
//      } else if (sport === "hockey") {
//          $("#input").text("Fall can be great! Javascript or Python!");
//
//      } else {
//          $("#input").text("Coding is probably right up your alley if you enjoy Winter. I would begin with Javascript or Python!");
//      }
//      event.preventDefault();
//  });
//});