const form=document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('password');
const conpass=document.getElementById('confirmpass');
const mobileno=document.getElementById('mobileno');
const email=document.getElementById('email');

form.addEventListener('submit',(event) => {
 event.preventDefault();
 validate();
});

const senData=(usernameVal,count,srate)=>{
	if(srate===count){
		alert("registration successful");
		swal("Welcome! "+ usernameVal, "Registration successful", "success");
	}
}


const ShowSuccessMsg=(usernameVal)=>{
	let formCon=document.getElementsByClassName('myform-control');
	var count=formCon.length-1;
	for(var i=0;i<formCon.length;i++)
	{
		if(formCon[i].className==="myform-control success")
		{
			var srate=0+i;
			senData(usernameVal,count,srate);	
		}
		else{
			return false; 	
		}
	}
}



const isEmail=(emailVal)=>{
		var atsymbol=emailVal.indexOf("@");
		if(atsymbol<1){
			return false;
		}
		var dot=emailVal.lastIndexOf(".");
		if(dot<=atsymbol+3){
			return false;
		}
		if(dot === emailVal.length-1){
			return false;
		}
		if((emailVal.charAt(emailVal.length - 4) != ".") && (emailVal.charAt(emailVal.length-3)!="."))
		{
			return false;
		}
		return true;

}


const validate = () =>{
	const usernameVal=username.value.trim();
const passwordVal=password.value.trim();
const conpassVal=confirmpass.value.trim();
const mobilenoVal=mobileno.value.trim();
const emailVal=email.value.trim();

	//username
	if(usernameVal===""){
		setErrorMsg(username,'**Username can not be blank');
	}
	else if(usernameVal.length<=2){
		setErrorMsg(username,'**Username can not be less than 2 characters');
	}
	else if(!isNaN(usernameVal)){
		setErrorMsg(username,'**Username can not be a number');
	}
	else{
		setSuccessMsg(username);
	}

	//email
	if(emailVal===""){
		setErrorMsg(email,'**Email can not be blank');
	}
	else if(!isEmail(emailVal)){
		setErrorMsg(email,'**Invalid Email !!');
	}
	else{
		setSuccessMsg(email);
	}

	//mobileno
	if(mobilenoVal===""){
		setErrorMsg(mobileno,'**Mobile Number can not be blank');
	}
	else if(mobilenoVal.length!=10){
		setErrorMsg(mobileno,'**Invalid Mobile number !!');
	}
	else if(mobilenoVal<0){
		setErrorMsg(mobileno,'**Invalid Mobile number !!');
	}
	else{
		setSuccessMsg(mobileno);
	}

	//password
	if(passwordVal===""){
		setErrorMsg(password,'**Password can not be blank');
	}
	else if(passwordVal.length<4){
		setErrorMsg(password,'**Password length must be 4 or more');
	}
	else{
		setSuccessMsg(password);
	}

	//confirm password
	if(conpassVal===""){
		setErrorMsg(conpass,'**Confirm Password can not be blank');
	}
	else if(conpassVal!=passwordVal){
		setErrorMsg(conpass,'**Password not matching');
	}
	else{
		setSuccessMsg(conpass);
	}
	ShowSuccessMsg(usernameVal);

} 



function setErrorMsg(input,errormsgs){
	const formControl=input.parentElement;
	const small=formControl.querySelector('small');
	formControl.className="myform-control error";
	small.innerText=errormsgs;

}
function setSuccessMsg(input){
	const formControl=input.parentElement;
	formControl.className="myform-control success";

}

