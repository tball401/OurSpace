/**
 * functions for login display
 */
function toggleSignIn() {
  if (firebase.auth().currentUser) {
    // [START signout]
    firebase.auth().signOut();
    // [END signout]
  } else {
    var email = "test1@gmail.com";//document.getElementById('usernamefield').value;
    var password = "testforlife";//document.getElementById('passwordfield').value;
    if (email.length < 10) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    } else{
    // Sign in with email and pass.
    // [START authwithemail]
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
    }
    // [END authwithemail]
  }
}
/**
 * Handles the sign up button press.
 */
function handleSignUp() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  // Sign in with email and pass.
  // [START createwithemail]
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
  // [END createwithemail]
}
/**
 * Sends an email verification to the user.
 */
/*
function sendEmailVerification() {
  // [START sendemailverification]
  firebase.auth().currentUser.sendEmailVerification().then(function() {
    // Email Verification sent!
    // [START_EXCLUDE]
    alert('Email Verification Sent!');
    // [END_EXCLUDE]
  });
  // [END sendemailverification]
}
function sendPasswordReset() {
  var email = document.getElementById('email').value;
  // [START sendpasswordemail]
  firebase.auth().sendPasswordResetEmail(email).then(function() {
    // Password Reset Email Sent!
    // [START_EXCLUDE]
    alert('Password Reset Email Sent!');
    // [END_EXCLUDE]
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/invalid-email') {
      alert(errorMessage);
    } else if (errorCode == 'auth/user-not-found') {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
  // [END sendpasswordemail];
}
*/
/**
* hides main dashboard display
*/
function hideDashboard(){
  document.getElementById('dashboard').style.display = 'none';
}
/**
* hides login page
*/
function hideLogin(){
  document.getElementById('flexbox').style.display = 'none';
}
function displayLogin(){
  document.getElementById('flexbox').style.display = 'flex';
  document.getElementById('passwordfield').value = "";
}
/**
 *sets up dashboard view
*/
function displayDashboard(email){
  var dashboard = document.getElementById('dashboard');
  hideLogin();
  dashboard.style.display = 'block';
  document.getElementById('main').style.backgroundImage = 'url("assets/pictures/lighthouse.jpg")';
  document.getElementById('displayusername').innerHTML = email;
}
/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 * firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 * out, and that is where we update the UI.
 */
function initApp() {
  // Listening for auth state changes.
  // [START authstatelistener]
  //loggedOut ensures that signout process has
  //been done before logging in again
  var loggedOut = false;
  firebase.auth().signOut();
  firebase.auth().onAuthStateChanged(function(user) {
    // [START_EXCLUDE silent]
    // [END_EXCLUDE]
    if (user && loggedOut) {
      // User is signed in.
      console.log(user);
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      displayDashboard();
      // [START_EXCLUDE]
      // [END_EXCLUDE]
    } else {
      loggedOut = true;
      // User is signed out.
      // [START_EXCLUDE]
      // [END_EXCLUDE]
    }
    // [START_EXCLUDE silent]
    // [END_EXCLUDE]
  });
  //[END authstatelistener]
  toggleSignIn();
  //document.getElementById('submit').addEventListener('click', toggleSignIn, false);
  //document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
  //document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
  //document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
}
function returnUser(){
  return firebase.auth().currentUser;
}
function tryLogin(){
    //var email = document.getElementById('usernamefield').value;
    //var password = document.getElementById('passwordfield').value;
    var email = "test1@gmail.com";
    var password = "testforlife";
    firebase.auth().signInWithEmailAndPassword(email, password).catch(
      function(error){
        alert(error.message);
      }
    ).then(function (){
      console.log('working');
      hideLogin();
      displayDashboard();
      handleDashboard(firebase.auth().currentUser);
    });
}
function signOut(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  }).catch(function(error) {
  // An error happened.
  console.log(error.message);
  });
}
window.onload = function(){
  document.getElementById('titlepage').style.display = 'none';
  signOut();
  hideLogin();
  hideDashboard();
  tryLogin();
  //intro();
  //document.getElementsByClassName("direction")[2].addEventListener('click', tryLogin, false);
};