import { Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SiClockify } from "react-icons/si";
import Navbar from "./components/navbar";
import Image from "next/image";
import Card_Food from "./components/cardfood";

export default function Home() {
  const router = useRouter();
  const navigation = (url) => router.push(url);

  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center w-full gap-14 mb-5 overflow-hidden">
        <>
          <div className="grid grid-cols-6 gap-2 w-full justify-center items-center h-[58rem] relative ">
            <div className="col-start-2 col-span-3 -mt-72">
              <p className="text-5xl pb-12 flex justify-center items-end">
                The Meal With Queueless
              </p>
              <div className="flex border-2 p-1 ">
                <Input
                  placeholder="ระบุชื่อร้าน"
                  fontWeight="bold"
                  textAlign="center"
                  size="lg"
                />
                <Button size="lg" colorScheme="" className="bg-black ml-4">
                  ค้นหา
                </Button>
              </div>
            </div>

            <div className="grid col-span-2 col-end-7 relative w-[30rem] h-[66rem] -right-60 -top-72">
              <Image
                src="/images/home.jpg"
                alt="home"
                // width={700} height={500}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </>

        <>
          <div className="col-start-2 col-span-3 -mt-72">
            <p className="text-7xl flex items-center">
              ร้านอาหารที่ร่วมรายการ <SiClockify className="ml-3" />
            </p>
          </div>
          <div className="grid  grid-cols-2 gap-10">
            <Card_Food
              name="ร้านไอสลัดผัก1"
              location="ข้างในใจเธอ1"
              price="450"
              eachPerson="1"
            />
            <Card_Food
              name="ร้านไอสลัดผัก2"
              location="ข้างในใจเธอ2"
              price="560"
              eachPerson="2"
            />
            <Card_Food
              name="ร้านไอสลัดผัก3"
              location="ข้างในใจเธอ1"
              price="450"
              eachPerson="1"
            />
            <Card_Food
              name="ร้านไอสลัดผัก4"
              location="ข้างในใจเธอ4"
              price="450"
              eachPerson="4"
            />
            <Card_Food
              name="ร้านไอสลัดผัก5"
              location="ข้างในใจเธอ5"
              price="450"
              eachPerson="5"
            />
            <Card_Food
              name="ร้านไอสลัดผัก6"
              location="ข้างในใจเธอ6"
              price="450"
              eachPerson="6"
            />
            <Card_Food
              name="ร้านไอสลัดผัก7"
              location="ข้างในใจเธอ7"
              price="450"
              eachPerson="7"
            />
            <Card_Food
              name="ร้านไอสลัดผัก8"
              location="ข้างในใจเธอ8"
              price="450"
              eachPerson="8"
            />
            <Card_Food
              name="ร้านไอสลัดผัก9"
              location="ข้างในใจเธอ9"
              price="450"
              eachPerson="9"
            />
          </div>
        </>
      </main>
    </>
  );
}
