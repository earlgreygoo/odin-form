const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const confirmPasswordError = document.querySelector("#match-error");
function passwordMatch(p1,p2){
	if (p1 != p2){
		return false;
	}
	else {
		return true;
	}
}

function confirmCheck(e){
	if(passwordMatch(password.value,e.target.value)){
		console.log("match")
		confirmPasswordError.style.display = "none"
		password.style.border = ""
	}
	else{
		console.log("nope")
		confirmPasswordError.style.display = "flex"
		password.style.border = " .2vw dashed var(--midnight-green)"
	}
}
let confirmEnter = false;


confirmPassword.setCustomValidity("Invalid field.");





confirmPassword.addEventListener("input",confirmCheck);
