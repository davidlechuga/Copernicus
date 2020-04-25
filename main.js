// Your web app's Firebase configuration ok
var firebaseConfig = {
    apiKey: "AIzaSyD22kUWnM70AUZS-K5r6s9SaLgNfwYtuwI",
    authDomain: "jucamform-96c2c.firebaseapp.com",
    databaseURL: "https://jucamform-96c2c.firebaseio.com",
    projectId: "jucamform-96c2c",
    storageBucket: "jucamform-96c2c.appspot.com",
    messagingSenderId: "60914521507",
    appId: "1:60914521507:web:4539c395833d492e5e3616"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ref messages collection

var messagesRef = firebase.database().ref('usuarios');


//listen form submit
document.getElementById('contactForm').addEventListener('submit', submitForm)

//submit form
function submitForm(e) {
    e.preventDefault();
    
    // Get value

    var nombre = getInputVal('nombre');
    var email = getInputVal('email');
    var tel = getInputVal('tel');
    var asunto = getInputVal('asunto');
    var msj = getInputVal('msj');
    //save message
    saveMessages(nombre, email, tel, asunto, msj);

    //show alert 
    document.querySelector('.alert').style.display = 'flex';

    //hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    //clear form
    document.getElementById('contactForm').reset();

}

// get info values

function getInputVal (id) {
    return document.getElementById(id).value;
}

// save messages to firebase

function saveMessages(nombre, email, tel, asunto, msj) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        nombre: nombre,
        email: email,
        tel: tel,
        asunto: asunto,
        msj: msj
    });
}