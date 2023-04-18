import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import {
  Card,
  CardBody,
  CardHeader,
  Stack,
  StackDivider,
  Text,
  Heading,
  Box,
  Input,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { auth, db } from "../api/firebase";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";

export default function Card_Food() {
  const router = useRouter();
  const [inputText, setInputText] = useState({});
  const ticket = router.query.ticket;
  const name = router.query.name;
  const location = router.query.location;
  const price = router.query.price;
  const totalPrice = router.query.totalPrice;
  const people = router.query.people;
  const eachPerson = router.query.eachPerson;

  const navigation = (url) => {
    const currentUser = auth.currentUser;
    addDoc(collection(doc(db, "user", currentUser.uid), "tickets"), {
      ticket: ticket,
      name: name,
      location: location,
      price: price,
      totalPerson: people,
      totalPrice: totalPrice,
      eachPerson: eachPerson,
      createAT: serverTimestamp()
    });
    router.push({
      pathname: url,
      query: { name, location, ticket, price, people, eachPerson },
    });
  };

  // const handleClick = () => {
  //   router.push({ pathname: "/app/ticket", query: { inputText } });
  //   setInputText({});
  // };

  const handle2 = () => {
    setInputText({ name, location, ticket, price, people, eachPerson });
    router.push({ pathname: "/app/ticket", query: { inputText } });
    setInputText({});
    // handleClick;
  };
  // const [inputValue, setInputValue] = useState({});
  // useEffect(() => {
  //   setInputValue({
  //     name,
  //     location,
  //     ticket,
  //     price,
  //     people,
  //   });
  // }, []);

  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center w-full gap-10 mb-5 mt-9">
        <div className="grid grid-cols-6 gap-2 w-full justify-center items-center">
          <Card className="col-start-2 col-span-4">
            <CardHeader className="border-b-2 rounded">
              <Heading size="lg">รายระเอียดบัตรครับ</Heading>
            </CardHeader>

            <CardBody>
              <div className="grid grid-cols-6 gap-2 w-full">
                <div className="col-span-2">
                  <p className="text-2xl pb-10 flex">ตั๋ว</p>
                  <p className="text-2xl pb-10 flex">จำนวนตั๋ว</p>
                  <p className="text-2xl pb-10 flex">จำนวนคน</p>
                  <p className="text-2xl pb-10 flex">ราคาบัตร/ใบ</p>
                  <p className="text-2xl pb-10 flex">ราคารวม</p>
                </div>
                <div className="col-span-2">
                  <p className="text-2xl pb-10 flex">{name}</p>
                  <p className="text-2xl pb-10 flex">{ticket} ใบ</p>
                  <p className="text-2xl pb-10 flex">{people} ท่าน</p>
                  <p className="text-2xl pb-10 flex">{price} บาท</p>
                  <p className="text-2xl pb-10 flex">{totalPrice} บาท</p>
                </div>
                <div className="col-span-2 justify-center items-center">
                  <Image
                    alt="QR"
                    src="/images/qrcode.png"
                    width={410}
                    height={410}
                  />
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <ButtonGroup gap="4">
                      <Button
                        variant="solid"
                        colorScheme="blackAlpha"
                        onClick={() => navigation("/app/confirmbuy")}
                      >
                        บันทึก QR Code
                      </Button>
                      <Button
                        variant="solid"
                        colorScheme=""
                        className="bg-black"
                        type="submit"
                        onClick={() => navigation("/app/ticket")}
                      >
                        ชำระเรียบร้อย
                      </Button>
                    </ButtonGroup>
                  </Box>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </main>
    </>
  );
}
