import { Button, Input} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SiClockify } from "react-icons/si";
import Navbar from "./components/navbar";
import Image from 'next/image'

import Card_Food from "./components/cardfood";


export default function Home() {

  const router = useRouter();
  const navigation = (url) => router.push(url);

  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center w-full gap-14 mb-5">
        <>
          <div className="grid grid-cols-6 gap-2 w-full justify-center items-center h-96">
            <div className="col-start-2 col-span-2">
              <p className='text-5xl pb-10 flex justify-center items-end'>The Meal With Queueless</p>
              <div className="flex border-2 p-1">
                <Input placeholder='ระบุชื่อร้าน' fontWeight='bold' textAlign='center' size='lg' />
                <Button size='lg' colorScheme="" className="bg-black ml-4">ค้นหา</Button>
              </div>
            </div>

            <div className="grid col-span-2 col-end-7 place-items-end">
              <Image src="/images/home.jpg" width={700} height={500} sizes="(max-width: 1000px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
            </div>
          </div>
        </>

        <>
          <div className="grid grid-cols-6 gap-10 w-full justify-center items-center">
            <div className="col-start-2 col-span-2">
              <p className='text-4xl flex items-center'>ร้านอาหารที่ร่วมรายการ <SiClockify className="ml-3" /></p>
            </div>
            <Card_Food />
            <Card_Food />
            <Card_Food />
          </div>
        </>
      </main>
    </>
  )
}
