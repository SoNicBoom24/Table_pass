import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-screen bg-[#1A1B1B]">
      <div>
        <p className='text-5xl text-[#A47C37]'>My Table</p>
      </div>
    </main>
  )
}
