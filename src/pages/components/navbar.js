// import React from "react";
import React, { useState, useEffect } from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import { GiSandsOfTime } from "react-icons/gi";
import { HiOutlineTicket } from "react-icons/hi2";
import { BsFillPersonFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { GoogleLogin } from "@react-oauth/google";

import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { auth, signIn, signOUT } from "../api/firebase";

export default function My_Navbar() {
  const router = useRouter();
  const home = () => router.replace("/");
  const navigation = (url) => router.push(url);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  // ---------------------------------------------------------
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  useEffect(() => {
    auth.onAuthStateChanged((user, state) => {
      if (user) {
        console.log(
          "🚀 ~ file: navbar.js:56 ~ auth.onAuthStateChanged ~ user:",
          user
        );
        setProfile(user);
      }
    });
  }, []);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
    navigation("/");
    signOUT();
  };
  // ---------------------------------------------------------
  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 border-b-2 bg-white drop-shadow-lg">
        <div className="flex items-center justify-between">
          <Button className="flex cursor-pointer" onClick={home}>
            {/* <Button className="flex cursor-pointer" onClick={() => navigation('/app/buyticket')}> */}
            <GiSandsOfTime size="40" />
            <Typography className="mr-4  py-1.5 font-medium text-xl">
              Table Pass
            </Typography>
          </Button>
          <div className="flex items-center gap-2">
            {profile ? (
              <Button
                className="flex font-normal pl-1 mr-4 items-center"
                onClick={logOut}
              >
                {/* <BsFillPersonFill className=" mr-1" size="30" /> Log Out */}
                <p className="mr-2">{profile.displayName}</p>
                <Image
                  alt="profile"
                  src={profile.photoURL}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </Button>
            ) : (
              <Button
                className="flex font-normal pl-1 mr-4 items-center"
                // onClick={onOpen}
                onClick={signIn}
              >
                <BsFillPersonFill className=" mr-1" size="30" /> Log In With
                Google
              </Button>
            )}

            <Button
              className="items-center"
              onClick={() => navigation("/app/ticket")}
            >
              <HiOutlineTicket size="35" className="pl-1" />
            </Button>
          </div>
        </div>
      </Navbar>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login with your Google account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <GoogleLogin
              onSuccess={responseMessage}
              onError={errorMessage}
              size="large"
              width="400"
              type="standard"
              theme="outline"
              text="signin_with"
            ></GoogleLogin>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
