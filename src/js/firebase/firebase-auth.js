import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, AuthErrorCodes, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUOkNmStKTSocLVZep5KOG-DCmcE-JtyU",
  authDomain: "team-project-filmoteka-4a376.firebaseapp.com",
  projectId: "team-project-filmoteka-4a376",
  storageBucket: "team-project-filmoteka-4a376.appspot.com",
  messagingSenderId: "642268048302",
  appId: "1:642268048302:web:153e44a9f24c349d73f63f",
  measurementId: "G-0YT3H2K0Y7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const btnLogin = document.querySelector('#btnLogin'); 
const btnSignup = document.querySelector('#btnSignup'); 
const txtEmail = document.querySelector('#user-email');
const txtPassword = document.querySelector('#user-name');
const modal = document.querySelector('[data-modal]');
const userLogin = document.querySelector('#user-login');
const userLibrary = document.querySelector('#user-library');
const userLogout = document.querySelector('#user-logout');

const loginEmailPassword = async (evt) => {
    evt.preventDefault();

    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then(data => {
                if (data) {
                    Notify.success(`Hello: ${loginEmail}`);
                    modal.classList.toggle('is-hidden');
                    toggleAuth();
                    txtEmail.value = '';
                    txtPassword.value = '';
                    console.log(data);
                }
                console.log('btnclick loginEmailPassword');
            })
    }
    catch (error) {
        console.log(error);
        showLoginError(error);
    }
}

btnLogin.addEventListener('click', loginEmailPassword)

const createAccount = async(evt) => {
    evt.preventDefault();

    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then(data => {
                if (data) {
                    Notify.success('Registration completed successfully. Click Log in')
                    console.log(data);
                }
        console.log('btnclick createAccount');
            })
    }
    catch (error) {
        if (loginPassword.length < 7) {
            Notify.info('Your password have less than 6 characters');
        } else {
            console.log(error);
            showLoginError(error);
        }
    }
    // userCredential.then(data => console.log(data))
}

btnSignup.addEventListener('click', createAccount);

const showLoginError = (error) => {

    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
        Notify.info('Wrong password. Try again');
    } else {
        Notify.info(`Error: ${error.message}`);
    }
}
    
const logout = async () => {
    await signOut(auth);
    toggleAuth();
    Notify.info("You have been logged out.");
}

userLogout.addEventListener('click', logout);

function toggleAuth() {
    userLogin.classList.toggle('hidden-link');
    userLibrary.classList.toggle('hidden-link');
    userLogout.classList.toggle('hidden-link');
}