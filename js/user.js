
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
// db.collection("User").where("userid","==",2)
// .get()
// .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(doc.data());
//     });
// })
// .catch(function(error) {
//     console.log("Error getting documents: ", error);
// });

loginfunction = () =>
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
        })
        //.finally(() => (this.loading=false)) //when the requests finish
        ;
    }


async function userexist(_name,_username)
{
    var pass;
    return db.collection("User").where("Username","==",_username)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data().Username)
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
// userexist = (_name,_username) =>
// {
//     var pass;
//     return db.collection("User").where("Username","==",_username)
//         .get()
//         .then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 //console.log(doc.data().Username)
//                 pass = doc.data().Username
//             }); 
//         })
//         .catch(function(error) {
//             console.log("Error getting documents: ", error);
//         })
//         .finally(() => {
//             console.log("finally : " + pass)
//             return pass;
//         }
//             ) //when the requests finish
//         ;
       
// }
//https://firebase.google.com/docs/firestore/quickstart#web_4
