import { useRouter } from "next/router";
import { Button, } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Image from 'next/image'
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineTicket } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { Card, CardBody, CardFooter, Text, Heading, Stack } from "@chakra-ui/react";

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useNumberInput,
  HStack,
  Input,
} from '@chakra-ui/react'

export default function BuyTicket() {

  const router = useRouter();
  const backToHome = () => router.replace('/');

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      max: 10,
      precision: 0,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center w-full gap-10 mb-5 mt-9">
      <div className="grid grid-cols-6 gap-2 w-full justify-center items-center">
        <Card className="col-start-2 col-span-4"
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          // minWidth={900}
          // maxWidth={1500}
        >
          <Image
            maxW={{ base: '100%', sm: '200px' }}
            src='/images/food.jpg'
            width={450} height={200}
          />

          <Stack>
            <CardBody className="ml-10">
              <Heading size='lg'>ร้านไอสลัดผัก</Heading>

              <Text py="2" className="flex items-center text-xl my-2"><IoLocationOutline className="mr-2 text-3xl" />: ข้างในใจเธอ</Text>
              <Text className="flex items-center text-xl mb-3"><HiOutlineTicket className="mr-2 text-3xl" />: 450 บาท/1 คน</Text>

              <HStack maxW='200px'>
                <Button {...dec}>-</Button>
                <Input {...input} />
                <Button {...inc}>+</Button>
              </HStack>
              <Text className="flex justify-center items-center text-xl mt-3">ราคารวม {input.value * 450} บาท</Text>

            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='' className="bg-black ml-10">
                Buy Ticket
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        </div>

        <div className="grid grid-cols-6 gap-2 w-full justify-center items-center">
          <div className="col-start-2 col-span-3 bg-slate-200 p-3">
            <p className='flex text-3xl ml-3'>รายระเอียดบัตร</p>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-2 w-full justify-center items-center">
          <div className="col-start-2 col-span-3 pl-5 text-2xl">
            <ol className="list-decimal">
              <li>บัตรมีอายุการใช้งานได้ 60 วัน</li>
              <li>ร้านเปิด ทุกวัน ตั้งแต่ 08.00 - 18.00 น.</li>
              <li>ลูกค้าสามารถเข้ามารับประทานอาหารได้ทุกช่วงเวลาที่ร้านเปิด</li>
              <li>หากโต๊ะมีการใช้งานอยู่ ลูกค้าสามารถสแกน QR Code หน้าร้านเพื่อรอรับประทาน และหากถึงคิวของท่าน พนักงานจะรีบติดต่อกลับโดยเร็วที่สุด</li>
            </ol>
          </div>
          <div className="col-start-2 col-span-3 mt-5">
            <p className='flex text-2xl mb-3 underline underline-offset-2'>ช่องทางการติดต่อทางร้าน</p>
            <p className='flex text-2xl items-center'><FiPhone className="mr-2" size={30} /> Phone : 081-799-6452</p>
            <p className='flex text-2xl items-center'><HiOutlineMail className="mr-2" size={30} /> Email : BoomInwZa55@gmail.com</p>
          </div>
        </div>
      </main>
    </>
  )
}
