//LIST ALL FUNCTION FOR ALL CARDS
var allCards = [];
allCards["  9E 10 A4 00"] =	function(){

  $('body').css({'background-color':'#E6E5E5'});
  $('#my-image01').css({'opacity':1});
  $('#my-image').css({'opacity':0});

}
allCards["  2F 9C 92 00"] = function(){
  $('body').css({'background-color':'#5D90B7'});

}
allCards["PARSONS PARIS TESTING"] = function(){
  $('body').css({'background-color':'skyblue'});
  $('body').css({'background-color':'#E6E5E5'});
  $('#my-image01').css({'opacity':1});
  $('#my-image').css({'opacity':0});

  var op = $('#my-image').css('opacity');
  if(op == 0){
    $('body').css({'background-color':'#E6E5E5'});
    $('#my-image01').css({'opacity':0});
    $('#my-image').css({'opacity':1});
  }else{
    $('body').css({'background-color':'#E6E5E5'});
    $('#my-image01').css({'opacity':1});
    $('#my-image').css({'opacity':0});
  }
}



var connection = new WebSocket('ws://localhost:8888');
  connection.onopen = function(){
  console.log("open connection");
}
connection.onmessage = function(message){
  try {
       var json = JSON.parse(message.data);
   } catch (e) {
       alert("BAD JSON");
 return;
   }
   var cardID = json.message.replace(/(\r\n|\n|\r)/gm,"");
   if(allCards[cardID]!=undefined){
     allCards[cardID]();
   }
}
connection.onerror = function(error){
  alert("PROBLEM WITH SERVER");
}
