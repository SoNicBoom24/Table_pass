import React from "react";
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

export default function Card_Food() {
  const router = useRouter();

  const navigation = (url) => {
    router.push({
      pathname: url,
      query: { ticket },
    });
  };
  const ticket = router.query.ticket;
  const name = router.query.name;
  const location = router.query.location;
  const price = router.query.price;
  const totalPrice = router.query.totalPrice;
  const people = router.query.people;

  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center w-full gap-10 mb-5 mt-9">
        <div className="grid grid-cols-6 gap-2 w-full justify-center items-center">
          <Card className="col-start-2 col-span-4">
            <CardHeader className="border-b-2 rounded">
              <Heading size="lg">รายระเอียดบัตร</Heading>
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
