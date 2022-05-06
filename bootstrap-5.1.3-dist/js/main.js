$(function()) {
    $(".load-more").on(){
const btn = $(this);
const loader = brn.find("span");
$.ajax({
    url: "/data.html",
    type: "GET",
    beforeSend: function () {
        btn.attr("disabled", tru);
        loader.addClass ("d-inline-block")
    },

    success: function (responce){
setTimeout (function(){
loader.removeClass ("d-inline-block")
btn.attr ("disabled", false);
$(".after-posts").before (responce);
}, 1000);
    },
    error: function () {
        elert ("Error!");
        loader.removeClass ("d-inline-block")
        btn.attr("disabled", false);
    }
)};
    });
});