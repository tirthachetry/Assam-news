$(document).ready(function () {
  $.ajax({
    crossDomain: true,
    type: "GET",
    url: "https://world.einnews.com/rss/wLuB45obgguUfw_6",
    dataType: "xml",
    success: xmlParser
  });

});

function xmlParser(xml) {

$(xml).find("item").each(function () {

   $(".main").append('<li title="'+$(this).find("pubDate").text()+'"><i class="fa fa-quote-left fa-pull-left "></i><a class="info" href="'+$(this).find("link").text() +'" target="blank">'+$(this).find("title").text()+'</a> </li>');

});
   
}