$(document).ready(function(){

  // Opens random Wikipedia window
    $(".Random").on("click", function(){  window.open("https://en.wikipedia.org/wiki/Special:Random")
    })

  // Press enter key to search
  $("#mytextbox").keypress(function(e){
  if(e.which == 13) {
    var val = $("#mytextbox").val();

  // Using MediaWiki API
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +val+"&namespace=0&format=json",
      dataType:'jsonp',
      type:'POST',
      headers: { 'Api-User-Agent': 'Example/1.0' },
      success: function(data) {
        $("#results").html('');
        var html = '';
        for (i=0; i < data[1].length; i++){
           html += "<a id='Nohighlight' target='_blank' href=" + data[3][i] + "><div class='border'>" + data[1][i] + "</br></br> " + data[2][i] + "</br></br></div></a>";
        }

    // If no Wikipedia entry is found
  if (data[1].length < 10) {
       html = "<div class= 'border noentry'> Search entry was not found.</br></br></div>";
  }
        $("#results").html(html);
      }
    });
    }
  });
});
