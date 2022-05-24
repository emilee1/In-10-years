$(".enter").click(function() {
    let name = $(".name").val();
    let showans = $(".shows").val();
    let shownum = $(".shows2").val();
    let showtot = $(".shows3").val();
    let showswatched = shownum * 416;
    $(".name").text(name);
    $(".start").hide(); 
    $(".results").show();
    $(".results").append("<p>"+ name + " will have watched " +  showswatched + " shows by 2030." + "</p>");
});