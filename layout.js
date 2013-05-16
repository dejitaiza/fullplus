var loadStyles = setInterval(function(){
  if(document.getElementsByClassName('HTAwOd').length > 0){
  	document.getElementsByClassName('HTAwOd')[0].style.width = "100%";
  	clearInterval(loadStyles);
  }
  console.log(document.getElementsByClassName('HTAwOd').length);
}, 500);