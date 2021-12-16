
function rise() {
	window.scrollTo({
		top: 0,
		left: 0,
		behaviour: "smooth"
	});
};

function matchPassword() {
	  
	  var pw1=document.myform.pd1.value;
	  var pw2=document.myform.pd2.value;
	  if(pw1!=pw2){	
	  	alert("Password did not match");
		return false;
	  } 
	  else {
	  	alert("Password created successfully");
		return true;
	  }
	  

	};


