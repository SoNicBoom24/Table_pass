import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import Navbar from "../components/navbar";


export default function Home() {

  const router = useRouter();
  const backToHome = () => router.replace('/');


  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center w-full h-screen bg-[#1A1B1B]">
        <div>
          <p className='text-5xl text-[#A47C37] pb-4'>My Table</p>
          <Button colorScheme="yellow" size="lg" onClick={backToHome} w='full'>Back Home</Button>
        </div>
      </main>
    </>
  )
}
