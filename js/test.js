const db = firebase.firestore();
function userexist(_username)
{
    var pass;
    return db.collection("User").where("Username","==",_username)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data().Username)
                pass = doc.data().Username
            }); 
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        })
        .finally(() => {
            console.log("finally : " + pass)
            return pass;
        }
            ) //when the requests finish
        ;
       
}