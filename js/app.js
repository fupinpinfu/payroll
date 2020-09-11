
const db = firebase.firestore();
// console.log(db.collection('User'))

// //get all
// db.collection("User").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(doc.data());
//     });
// })
// .catch(function(error) {
//     console.log("Error getting documents: ", error);
// });

// // //get where 
// db.collection("User").where("userid","==",22) 
// .get()
// .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(doc.data());
//     });
// })
// .catch(function(error) {
//     console.log("Error getting documents: ", error);
// });

insertuser = () =>
    {
        db.collection("User").where("Username","==",document.getElementById("username").value).where("Userpassword", "==",document.getElementById("password").value)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                window.location.replace("main.html");
                //document.getElementById("username").value = doc.data().Username;
                //document.getElementById("lblshow").innerHTML =  doc.data().Name;
                // console.log(doc.data().Username);
            });
        },document.getElementById("lblshow").innerHTML = "User name or password invalid...")
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }


//https://firebase.google.com/docs/firestore/quickstart#web_4
