// Array of users

let users = [{
	"email":"akashthombre123@gmail.com",
	"password":"akash123"
},
{
	"email":"rahul81@gmail.com",
	"password":"rahul123"
},
{
	"email":"pooja@gmail.com",
	"password":"poojayande"
}

] //end users array

//Login Function

let checkLogin = (email,password,allUsers) => {  // parameters are passed, arrow function is used
	let isUserFound = false;
	let passwordCorrect = false;

	for (currentUser of allUsers){  //   for of loop is used because we have an array of object
		console.log(currentUser)
		if(currentUser.email==email){   // conditions 
			if(currentUser.password==password){
				isUserFound = true;
				passwordCorrect = true;
				break;   //break statement is used if condition is passed
			}else{
				isUserFound = true;
				passwordCorrect = false;
				break;
			}
		}	else{
			isUserFound = false;
		}
	} 	//end for of loop

	if (isUserFound == true && passwordCorrect == true){
		alert('you are logged in');
	} else if (isUserFound == true && passwordCorrect == false){
		alert('you have provided incorrect password');
	} else {
		alert('no user with this email found');
	}
} // end checkLogin function

let email = prompt('enetr your email');   // input or argument for email is taken through prompt
let password = prompt('enter your password'); // input or argument for password is taken through prompt
checkLogin(email,password,users);  // invoked or calling function
























