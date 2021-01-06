
document.getElementById("login-btn").onclick = function () {

    const email = document.querySelector('#exampleInputEmail1').value;
    const password = document.querySelector('#exampleInputPassword1').value;
    var firebaseConfig = {
        apiKey: "AIzaSyDwjbCyTjacYVq8GaJP1wSX9YiBbA0OWqA",
        authDomain: "seecking-ca8a8.firebaseapp.com",
        projectId: "seecking-ca8a8",
        storageBucket: "seecking-ca8a8.appspot.com",
        messagingSenderId: "692349145986",
        appId: "1:692349145986:web:f684e8acfd0620b0a7b59b",
        measurementId: "G-JB4362BWEB"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            location.href = "candidateForm.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            window.alert("username or password do not match");
        });




}



