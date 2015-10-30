$(document).ready(function(){
	if(location.search){
		params = location.search.split("?")[1];
		color = location.search.split("=")[1];
		Cookies.set("color_picked", color);
	}
	if(Cookies.get("color_picked")){
		
		$("#button").click("background-color");
		$("body").css("background-color",Cookies.get("color_picked"));
		$("body").trigger("color_picked");
	}
		
});