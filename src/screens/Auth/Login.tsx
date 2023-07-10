import React, { useState, useRef } from "react";
import { Text, TextInput, Alert, TouchableOpacity } from "react-native";
import firebase from "firebase/compat/app";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "@services";
import { Screen } from "@constants";
import { BackButton } from "@components";

import { getAuth, RecaptchaVerifier } from "firebase/auth";
const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptcha = useRef(null);

  const sendVerification = () => {
    const provider = new firebase.auth.PhoneAuthProvider();
    provider
      .verifyPhoneNumber(phoneNumber, recaptcha.current)
      .then(setVerificationId);
    setPhoneNumber("");
  };

  const confirmCode = () => {
    const cred = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(cred)
      .then(() => {
        setCode("");
        Alert.alert("Welcome");
      })
      .catch((err) => Alert.alert("Error"));
  };

  return (
    <Screen starter>
      <BackButton />
      <FirebaseRecaptchaVerifierModal
        ref={recaptcha}
        firebaseConfig={firebaseConfig}
        // androidHardwareAccelerationDisabled
        // attemptInvisibleVerification
      />
      <TextInput
        placeholder='Enter number with country code'
        keyboardType='phone-pad'
        autoComplete='tel-country-code'
        style={{ backgroundColor: "#fff", height: 100, marginVertical: 20 }}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity
        onPress={() => {
          sendVerification();
        }}>
        <Text>Send OTP</Text>
      </TouchableOpacity>

      <TextInput
        placeholder='Enter OTP'
        keyboardType='number-pad'
        style={{ backgroundColor: "#fff", height: 100, marginVertical: 20 }}
        value={code}
        onChangeText={setCode}
      />
      <TouchableOpacity
        onPress={() => {
          confirmCode();
        }}>
        <Text>Verify OTP</Text>
      </TouchableOpacity>
    </Screen>
  );
};

export { LoginScreen };
