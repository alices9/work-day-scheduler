
console.log($('hour'));

var todaysDate = moment().format("MMM Do YY");
$("#currentDay").text(todaysDate);

var currentHour = moment().hour();
console.log(currentHour);


$(".row").each(function() {
    if (currentHour === $(this).attr("id")){
        $(this).addClass("present");
    } else if (currentHour > $(this).attr("id")){
        $(this).addClass("past");
    } else {
        $(this).addClass("future");}

}
)