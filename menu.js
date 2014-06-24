var lunch = 'lunch';
var dinner = 'dinner';
var takeout = 'takeout';


function createMenu(which) {
	if(which =='lunch') {
		$("#takeout").hide();
		$("#dinner").hide();
		$("#lunch").show();
	}
	else if(which == 'dinner') {
		$("#lunch").hide();
		$("#takeout").hide();
		$("#dinner").show();
	}
	else if(which== 'takeout') {
		$("#lunch").hide();
		$("#dinner").hide()
		$("#takeout").show();
	}
}
