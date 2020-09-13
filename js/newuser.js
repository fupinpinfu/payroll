const db = firebase.firestore();

password_is_ok = () =>
{
    if(document.getElementById("passwordconfirm").value != document.getElementById("password").value)
    {
        alert("Password not match.Please check...")
        return false;
    }
    else
    {
        
        return true;

    }
}


// // Add a new document in collection "cities"
// db.collection("cities").doc("LA").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })
// .then(function() {
//     console.log("Document successfully written!");
// })
// .catch(function(error) {
//     console.error("Error writing document: ", error);
// });