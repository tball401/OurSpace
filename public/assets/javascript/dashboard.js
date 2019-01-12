function handleDashboard(user){
    document.getElementById("addnote").addEventListener('click', function(){
        makeNewNote('notegrid');
    }, false);
    document.getElementById("signout").addEventListener('click', signOutUser, false);
}
function signOutUser(){
    firebase.auth().signOut().then(function() {
        hideDashboard();    
        document.getElementById('main').style.backgroundImage = 'url("assets/pictures/ourSpaceBack.png")';
        displayLogin();
    });
}