function showPic(whichPic){
	var source=whichPic.getAttribute("href");
	var textsource=whichPic.getAttribute("title");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var text=document.getElementById("description");
	text.firstChild.nodeValue=textsource;
	
}
function countBodyChildren(){
	var bodyElement=document.getElementsByTagName("body")[0];
	alert(bodyElement.childNodes.length);
	alert(bodyElement.nodeType);
}
