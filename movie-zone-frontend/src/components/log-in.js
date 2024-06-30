import React, { useState } from 'react';
import { auth, db } from "../Firebase/firebase";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import './Styles/signlog.css';

const SignLog = () => {
    const handleSlideChange = (event) => {
        const loginForm = document.querySelector("form.login");
        const loginText = document.querySelector(".title-text .login");

        if (event.target.id === "login") {
            loginForm.style.marginLeft = "0%";
            loginText.style.marginLeft = "0%";
        } else if (event.target.id === "signup") {
            loginForm.style.marginLeft = "-50%";
            loginText.style.marginLeft = "-50%";
        }
    };

    const [SignInemail, setSignInEmail] = useState("");
    const [SignInpassword, setSignInPassword] = useState("");

    const handleSignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, SignInemail, SignInpassword)
        .then((userCredential) =>{console.log(userCredential)})
        .catch((error) =>{console.log(error)})

    }

    const [SignUpemail, setSignUpEmail] = useState("");
    const [SignUppassword, setSignUpPassword] = useState("");
    const [displayName, setDisplayName] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            // Create user in Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, SignUpemail, SignUppassword);
            
            // Update display name
            const user = userCredential.user;
            await updateDisplayName(user);

            // document in Firestore
            await createUserDocument(user.uid, displayName, SignUpemail);

            console.log("User signup successful:", userCredential);
        } catch (error) {
            console.error("Error during signup:", error);
        }
    }

    const updateDisplayName = async (user) => {
        // Update the user's display name in Firebase
        await updateProfile(user, { displayName: displayName });
    }

    const createUserDocument = async (uid, displayName, SignUpemail) => {
        const userRef = doc(db, 'users', uid); // 'users' is the collection name
        await setDoc(userRef, {
            displayName: displayName,
            SignUpemail: SignUpemail,
            // store additional user information here
        });

        console.log("User document created in Firestore");
    }

    return (
        <div className='container d-flex justify-content-center align-items-center vh-100'>
            <div className="wrapper">
                <div className="title-text">
                    <div className="title login">Login</div>
                    <div className="title signup">Sign Up</div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <input
                            type="radio"
                            name="slide"
                            id="login"
                            defaultChecked
                            onChange={handleSlideChange}
                        />
                        <input
                            type="radio"
                            name="slide"
                            id="signup"
                            onChange={handleSlideChange}
                        />
                        <label htmlFor="login" className="slide login">
                            Login
                        </label>
                        <label htmlFor="signup" className="slide signup">
                            Sign Up
                        </label>
                        <div className="slider-tab"></div>
                    </div>
                    <div className="form-inner">
                        <form onSubmit={handleSignIn}className="login">
                            <div className="field">
                                <input type="email" placeholder="Email Address" value={SignInemail} onChange={(e) =>setSignInEmail(e.target.value)} required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" value={SignInpassword} onChange={(e) => setSignInPassword(e.target.value)} required />
                            </div>
                            <div className="pass-link">
                                <a href="/">Forgot password?</a>
                            </div>
                            <div className="field btn1">
                                <div className="btn1-layer"></div>
                                <input type="submit" value="Login" />
                            </div>
                        </form>

                        <form onSubmit={handleSignUp} className="signup">
                            <div className="field">
                                <input type="text" placeholder="User Name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} required />
                            </div>
                            <div className="field">
                                <input type="email" placeholder="Email Address" value={SignUpemail} onChange={(e) => setSignUpEmail(e.target.value)} required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" value={SignUppassword} onChange={(e) => setSignUpPassword(e.target.value)} required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Confirm password"  />
                            </div>
                            <div className="field btn1">
                                <div className="btn1-layer"></div>
                                <input type="submit" value="Signup" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignLog;
