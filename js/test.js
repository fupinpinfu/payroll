const db = firebase.firestore();
var _name 
insertuser = () =>
{
    db.collection("User").where("Username","==","tch") 
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data().Name) ;
            _name =  doc.data().Name;
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    })
    .finally(() => (console.log(_name))); //when the requests finish;
}



