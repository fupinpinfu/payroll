password_is_ok = () =>
{
    if(document.getElementById("passwordconfirm").value != document.getElementById("password").value)
    {
        alert("Password not match.Please check...")
        return false;
    }
    else
    {
        console.log(userexist(document.getElementById("fullname").value,document.getElementById("username").value)) ;
        // if (userexist(document.getElementById("fullname").value,document.getElementById("username").value))
        //     alert("User already.please check")
        // else
        // console.log("aa");
            //goto login page first.

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