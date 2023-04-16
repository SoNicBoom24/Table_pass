import React from "react";
import Image from 'next/image';
import { Button, useNumberInput, HStack, Input, Card, CardBody, CardFooter, Text, Heading, Stack } from "@chakra-ui/react";
import { HiOutlineTicket } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { useRouter } from "next/router";


export default function MyTicket() {

    const router = useRouter();
    const navigation = (url) => router.push(url);

    return (
        <>
            <Card className="col-start-2 col-span-4"
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Image
                            alt="Food"
                            maxW={{ base: '100%', sm: '200px' }}
                            src='/images/food.jpg'
                            width={450} height={200}
                        />

                        <Stack>
                            <CardBody className="ml-10">
                                <Heading size='lg'>ร้านไอสลัดผัก</Heading>

                                <Text py="2" className="flex items-center text-xl my-2"><IoLocationOutline className="mr-2 text-3xl" />: ข้างในใจเธอ</Text>
                                <Text className="flex items-center text-xl mb-3"><HiOutlineTicket className="mr-2 text-3xl" />: 450 บาท/1 คน</Text>


                            </CardBody>

                            <CardFooter>
                                <Text className="flex items-center text-5xl ml-10 ">สิทธิ์การใช้งาน 2 ใบ</Text>
                            </CardFooter>
                        </Stack>
                    </Card>
        </>
    );
}