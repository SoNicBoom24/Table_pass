import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Button,
  useNumberInput,
  HStack,
  Input,
  Card,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { HiOutlineTicket } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { useRouter } from "next/router";

export default function MyTicket(props) {
  const router = useRouter();
  const navigation = (url) => router.push(url);
  //   const [inputValue, setInputValue] = useState({});
  //   const [items, setItems] = useState([]);
  //   const ticket = router.query.ticket;
  //   const name = router.query.name;
  //   const location = router.query.location;
  //   const price = router.query.price;
  //   const totalPrice = router.query.totalPrice;
  //   const people = router.query.people;
  //   const info = router.query.result;
  //   useEffect(() => {
  //     setItems([...items], info);
  //   }, []);

  return (
    <>
      <Card
        className="col-start-2 col-span-4"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          alt="Food"
          maxW={{ base: "100%", sm: "200px" }}
          src="/images/food.jpg"
          width={450}
          height={200}
        />

        <Stack>
          <CardBody className="ml-10">
            <Heading size="lg">{props.name}</Heading>

            <Text py="2" className="flex items-center text-xl my-2">
              <IoLocationOutline className="mr-2 text-3xl" />:{props.location}
            </Text>
            <Text className="flex items-center text-xl mb-3">
              <HiOutlineTicket className="mr-2 text-3xl" />:{props.price} บาท/{" "}
              {props.eachPerson}คน
            </Text>
          </CardBody>

          <CardFooter>
            <Text className="flex items-center text-5xl ml-10 ">
              สิทธิ์การใช้งาน {props.ticket} ใบ
            </Text>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}
