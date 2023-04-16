import React from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import { GiSandsOfTime } from "react-icons/gi";
import { HiOutlineTicket } from "react-icons/hi2";
import { BsFillPersonFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
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

export default function My_Navbar() {
  const router = useRouter();
  const home = () => router.replace("/");
  const navigation = (url) => router.push(url);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 border-b-2 bg-white">
        <div className="flex items-center justify-between">
          <Button className="flex cursor-pointer" onClick={home}>
            {/* <Button className="flex cursor-pointer" onClick={() => navigation('/app/buyticket')}> */}
            <GiSandsOfTime size="40" />
            <Typography className="mr-4  py-1.5 font-medium text-xl">
              Table Pass
            </Typography>
          </Button>
          <div className="flex items-center gap-2">
            <Button
              className="flex font-normal pl-1 mr-4 items-center"
              onClick={onOpen}
            >
              <BsFillPersonFill className=" mr-1" size="30" /> Log In
            </Button>
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
            <Button
              size="lg"
              variant="outlined"
              color="green"
              //   color="blue-gray"
              className="flex items-center gap-3 rounded border-4 bg-neutral-50 p-1"
              fullWidth
            >
              <FcGoogle size="60" className="pl-1" />
              Login with Google
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
