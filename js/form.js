
	var entry = {};
/*
	entry.firsname = getFormValue("firstname");
	entry.lastname = getFormValue("lastname");
	entry.email = getFormValue("email");
	entry.VpcCidr = getFormValue("VpcCidr");
	entry.awsOwnerTagValue = getOwnerTagValue("email");
	entry.hidden.verified = false;
*/

	//Onload, reset values
	function pageRefresh() {
		console.log("Page refreshed.");
		document.getElementById("deploymentform").reset();
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
			console.log("Mobile user detected.");
		}else{console.log("Non-mobile user detected.");}
	}


	//Handle toggling of filtering by release compatability
	function toggleCompatSel(){
		var compatCheckbox = document.getElementById("CompatibleVersionsOnly");
		var compatSelect = document.getElementById("CompatabilitySelection");
		console.log(compatCheckbox);
		if (compatCheckbox.checked) {
			compatSelect.disabled = true;
		}else {
			document.getElementById('CompatabilitySelection').disabled = false;
		}
	}	



	function getFormValue(val) {
		formVal = document.getElementById(val).value;
		console.log(val + ":\t\t\t" + formVal);
		return formVal;
	}
	function getOwnerTagValue(userEmail){
		var re = /^(.*)@carelogistics.com$/;
		console.log("User Email: "+userEmail);
		if(re.test(userEmail)){	console.log("Valid user.");}
		awsOwnerTagValue = userEmail.split("@")[0];
		console.log("Searching for AWS resources owned by \""+awsOwnerTagValue+"\"...");
		return awsOwnerTagValue;
	}
	function getFormData(){
        	entry.firstname = getFormValue("firstname");
        	entry.lastname = getFormValue("lastname");
        	entry.email = getFormValue("email");
        	entry.VpcCidr = getFormValue("VpcCidr");
        	entry.awsOwnerTagValue = getOwnerTagValue(entry.email);
		entry.verified = false;
		validateForm(entry);
		return entry;
	}
	function validateForm(entryObject){
		var re = /^(.*)@carelogistics.com$/;
		if (re.test(entryObject.email)) {
			entryObject.verified = true;
			console.log("Email is valid!");
			document.getElementById("email").style.backgroundColor = "#FFFFFF";
			return true;
		}else{
			console.log("Bad email: \t\t"+entryObject.email);
			console.log(document.getElementById("email").style.color);
			document.getElementById("email").style.backgroundColor = "#FA8072";
			return false;
		}
	}
	function sendData(){
		var re = /^(.*)@carelogistics.com$/;
		fetchUserAwsData(entry.email); 
		console.log(re.test(getFormValue("email")));
		console.log(entry);
	}
	function attemptFormDataUpload(){
		var uploadData = getFormData();
		console.log("Data Object: ");
		console.log(uploadData);
		
		var str_json = JSON.stringify(uploadData);
		console.log(str_json);
		var req = new XMLHttpRequest();
		req.open("POST", "Submitted.php", true);
		req.setRequestHeader("Content-type", "application/json");
		req.send(str_json);
	}
