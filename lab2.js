//==== VARIABLES =========
var firstCheck;
var firstName;
var doneMsg;

//==== LOGIC =============
firstCheck = prompt('What is your team number?');

if(Number(firstCheck) === 1) {
    firstName = prompt("What's your first");
    doneMsg = 'Access denied!';
    
    switch(firstName.toLowerCase()) {
        case 'suyeon':
            doneMsg = 'Welcome Suyeon Jang';
            break;
        case 'Yousuf':
            doneMsg = 'Welcome Abbas Yousuf';
            break;
        case 'kaverappa':
            doneMsg = 'Welcome K U Kaverappa';
            break;
        case 'nileshbhai':
            doneMsg = 'Welcome Modi Yash Nileshbhai';
            break;
        default :
            break;
    }

    alert(doneMsg);
} else {
    alert('Access denied!')
}