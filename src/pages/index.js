import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdTableRestaurant } from "react-icons/md";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();
  const navigation = (url) => router.push(url);

  return (
    <main className="flex flex-col justify-center items-center w-full h-screen bg-[#1A1B1B]">
      <div>
        <p className='text-[#A47C37] text-5xl pb-3 flex items-end'>Table Pass<MdTableRestaurant color='pink' size='40'/></p>

        <Button colorScheme="yellow" size="lg" onClick={() => navigation('/app/table')} w='full'>Join Table</Button>
      </div>
    </main>
    
  )
}
