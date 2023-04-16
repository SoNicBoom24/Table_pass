import React from "react";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import MyTicket from "../components/myticket"

export default function Ticket() {

    const router = useRouter();
    const home = () => router.replace('/');

    return (
        <>
            <Navbar />
            <main className="flex flex-col justify-center items-center w-full gap-10 mb-5 mt-9">
                <div className="grid grid-cols-6 gap-2 w-full justify-center items-center ">
                    <div className="col-start-2 col-span-4 p-3 border-b-2">
                        <p className='flex text-3xl ml-3'>รายระเอียดบัตร</p>
                    </div>
                </div>

                <div className="grid grid-cols-6 gap-2 w-full justify-center items-center">
                    <MyTicket />
                    <MyTicket />
                    <MyTicket />
                </div>
            </main>
        </>
    )
}