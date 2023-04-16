import React from "react";
import {Card, CardBody, Text, Heading, LinkOverlay } from "@chakra-ui/react";
import { HiOutlineTicket } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import Image from 'next/image'

export default function Card_Food() {

    const router = useRouter();
    const navigation = (url) => router.push(url);

    return (
        <>
            <Card className="col-start-2 col-span-2 p-3" _hover={{ bg: "gray.200" }}>
                <LinkOverlay onClick={() => navigation('/app/buyticket')}>
                    <CardBody>
                        <Image
                            src='/images/food.jpg'
                            width={600} height={400}
                            className="rounded-xl"
                        />
                        <Heading size='lg' className="my-2">ร้านไอสลัดผัก</Heading>
                        <Text className="flex items-center text-xl mb-2"><IoLocationOutline className="mr-2 text-3xl" />: ข้างในใจเธอ</Text>
                        <Text className="flex items-center text-xl"><HiOutlineTicket className="mr-2 text-3xl" />: 450 บาท/1 คน</Text>
                    </CardBody>
                </LinkOverlay>
            </Card>

            <Card className="col-start-4 col-span-2 p-3" _hover={{ bg: "gray.200" }}>
                <LinkOverlay onClick={() => navigation('/app/buyticket')}>
                    <CardBody>
                        <Image
                            src='/images/food.jpg'
                            width={600} height={400}
                            className="rounded-xl"
                        />
                        <Heading size='lg' className="my-2">ร้านไอสลัดผัก</Heading>
                        <Text className="flex items-center text-xl mb-2"><IoLocationOutline className="mr-2 text-3xl" />: ข้างในใจเธอ</Text>
                        <Text className="flex items-center text-xl"><HiOutlineTicket className="mr-2 text-3xl" />: 450 บาท/1 คน</Text>
                    </CardBody>
                </LinkOverlay>
            </Card>
        </>
    );
}