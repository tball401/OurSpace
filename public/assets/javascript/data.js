function writeGenericData(uid, dataType, dataTitle, data){
  var database = firebase.database();
  database.ref('users/' + uid + '/' + dataType + '/' + dataTitle).set({
    date: dataTitle,
    data: data    
  });
}
function deleteGenericData(uid, dataType, dataTitle){
  var database = firebase.database();
  database.ref('users/' + uid + '/' + dataType + '/' + dataTitle).remove();
}
function loadInitialData(uid, dataType){
  var path = firebase.database().ref('users/' + uid + '/' + dataType + '/');
  var elements = {};
  var test = path.once('value', function(snapshot){
    snapshot.forEach(function(childSnapshot){
      var value = childSnapshot.val().data;
      var key = childSnapshot.key;
      elements[key] = value;
    })
    return elements;
  });
}