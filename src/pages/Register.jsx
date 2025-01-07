import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import Loading from "../img/loading.gif";
import { auth, storage, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const [disableRegister, setDisableRegister] = useState(false);

  // OPT verification using SwiftOTP
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const contact = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    const file = e.target[4].files[0];

    setDisableRegister(true);

    try {
      // OTP verification using SwiftOTP
      const opt = await fetch("https://swiftotp.xyz/api/v1/send/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: "swft-0feab4ac-95d8-4d87-ac68-7b2871e98c50",
        },
        body: JSON.stringify({
          phoneNumber: contact,
          eventName: "api-testing",
        }),
      });
      if (!opt.ok) {
        setErr(`Error: ${opt.status}`);
      }
      const data = await opt.json();
      setResponse(data);
      setErr(null);

      // LOGIN AUTHENTIFICAION
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // UPLOAD IMAGE TO STORAGE
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(`Upload Error: ${error}`);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            // UPLOAD ALL DATA TO FIREBASE DATABASE
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              contact,
              email,
              photoURL: downloadURL,
              response,
            });

            // USER CHAT
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (err) {
      setErr(err.message || "Something went wrong!");
      setResponse(null);
      setDisableRegister(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Maxim Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="tel" placeholder="Enter Phone Number" required />
          <input type="email" placeholder="Email" required />
          <input
            type="password"
            placeholder="Password"
            required
            minLength={6}
          />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="Profil" />
            <span>Add a profil</span>
          </label>
          <button disabled={disableRegister}>
            {disableRegister ? <img src={Loading} alt="" /> : "Sign Up"}
          </button>
          {disableRegister && (
            <span>Please don't refresh or cancel</span>
          )}
          {err && <span style={{ color: "red" }}>{err}</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
