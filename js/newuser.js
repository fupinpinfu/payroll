const db = firebase.firestore();

checkemail_is_ok = () =>
{
    if(document.getElementById("passwordconfirm").value != document.getElementById("password").value)
    {
        alert("password not match.please check...")
        return false;
    }
    else
    {
        return true;
    }
}


// Add a new document in collection "cities"
db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});