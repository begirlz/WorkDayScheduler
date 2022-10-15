// display today's date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text(todayDate);

// saveBtn click to save data
$(".saveBtn").on("click", function () {
    //get values from the same row
    var text = $(this).siblings(".description").val();
    var id = $(this).parent().attr("id");
    localStorage.setItem(id, text);
})

//display saved data
$('.description').each(function (i,p) {
    var id = $(this).parent().attr("id");
    $(this).val((localStorage.getItem(id)));
})

//track time
function timeTracker() {

    var timeNow = moment().hour();

    // loop time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id"));

        // check time for background color
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
timeTracker();
