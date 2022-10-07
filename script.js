
var todaysDate = moment().format("dddd, MMM Do, YYYY");
$("#currentDay").text(todaysDate);

var currentHour = moment().hour();
console.log(currentHour);

// color codes each block
$(".description").each(function() {
    if (currentHour === parseInt($(this).attr("id"))){
        $(this).addClass("present");
    } else if (currentHour > parseInt($(this).attr("id"))){
        $(this).addClass("past");
    } else {
        $(this).addClass("future");}
}
)

$(".saveBtn").on("click", function(){
    // var task = $(".description").val();
    localStorage.setItem("task", $(".description").val());
})
