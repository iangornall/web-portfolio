// find nodes
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const loginForm = document.getElementById('loginForm');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');
const btnPostSubmit = document.getElementById('btnPostSubmit');

//SignUp Modal Nodes
const userFirst = document.querySelector("[name='userfirstname']");
const userLast = document.querySelector("[name='userlastname']");
const userEmail = document.querySelector("[name='useremail']");
const userPassword = document.querySelector("[name='userpassword']");
const userSecret = document.querySelector("[name='usersecret']");

const userSignUp = document.querySelector('.signup');

// listen for login
loginForm.addEventListener('submit', e => {
    // collect fields
    e.preventDefault();
    console.log('Logging you in... ' + txtEmail.value + ' ' + txtPassword.value);
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // attempt login
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => {
        console.log(e.message);
        displayFlashMessage("Sorry. Your login failed.  Try again.");
    });
    promise.then(() => displayFlashMessage("You are logged in!"));
});

// listen for signup
userSignUp.addEventListener('submit', e => {
    e.preventDefault();
    // collect fields
    const email = userEmail.value;
    const pass = userPassword.value;
    const auth = firebase.auth();
    // attempt signup
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => {
        console.log(e.message);
        displayFlashMessage(e.message);
    });
    promise.then(() => {
        displayFlashMessage("You are signed up and logged in.")
        hideModal2();
    }
);
    
});

btnLogout.addEventListener('click', e => {
    const promise = firebase.auth().signOut();
    promise.then(() => displayFlashMessage("You are logged out."));
});

// are we logged in?
firebase.auth().onAuthStateChanged(firebaseuser => {
    if (firebaseuser) {
        console.log('Logged in: ' + firebaseuser.email);
        btnLogout.classList.remove('hide');
        btnLogin.classList.add('hide');
        btnPostSubmit.classList.remove('hide');
        btnSignUp.classList.add('hide');
        loginForm.reset();
    } else {
        console.log('See ya later...');
        btnLogout.classList.add('hide');
        btnPostSubmit.classList.add('hide');
        btnSignUp.classList.remove('hide');
        btnLogin.classList.remove('hide');
        loginForm.reset();
    }
});