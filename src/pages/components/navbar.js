import React from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import { GiSandsOfTime } from "react-icons/gi";
import { HiOutlineTicket } from "react-icons/hi2";
import { useRouter } from "next/router";

export default function Example() {

    const router = useRouter();
    const home = () => router.replace('/');

    return (
        <>
            <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 border-b-2 bg-white">
                <div className="flex items-center justify-between">
                    <Button className="flex cursor-pointer" onClick={home}>
                        <GiSandsOfTime size='40' />
                        <Typography className="mr-4  py-1.5 font-medium text-xl">
                            Table Pass
                        </Typography>
                    </Button>
                    <div className="flex items-center gap-2">
                        <Button className="font-normal lg:inline-block border-l-2 border-black h-10 pl-1 mr-4">
                            Sign In
                        </Button>
                        <Button className=" lg:inline-block border-l-2 border-black h-10">
                            <HiOutlineTicket size="35" className="pl-1" />
                        </Button>
                    </div>
                </div>
            </Navbar>
        </>
    );
}