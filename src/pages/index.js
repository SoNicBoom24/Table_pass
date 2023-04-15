import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdTableRestaurant } from "react-icons/md";
import Navbar from "./components/navbar";


export default function Home() {

  const router = useRouter();
  const navigation = (url) => router.push(url);

  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center w-full">
        <div>
          <p className='text-[#A47C37] text-5xl pb-3 flex items-end'>Table Pass<MdTableRestaurant color='black' size='40' /></p>

          <Button colorScheme="yellow" size="lg" onClick={() => navigation('/app/table')} w='full'>Join Table</Button>
        </div>
      </main>
    </>
  )
}
