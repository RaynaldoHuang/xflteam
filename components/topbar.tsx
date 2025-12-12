"use client"

import Image from "next/image"

import logo from "@/public/svg/logo.svg"
import logocipta from "@/public/svg/cipta.svg"

export default function TopBar() {
    return (
        <>
            <div className="fixed w-full max-w-[430px] mx-auto top-0 bg-white z-50">
                <div className="border-b border-gray-300">
                    <div className="mx-4 my-4 flex justify-between items-center">
                        <div>
                            <h1 className="font-(family-name:--space-grotesk) font-bold text-xl text-red-900 mb-0.5">XFL123 Club</h1>
                            <div>
                                <div className="flex items-center">
                                    <h1 className="text-[8px]">Powered by</h1>
                                    <Image
                                        src={logocipta}
                                        alt=""
                                        className="w-14 ms-0.5 mt-0.5"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image
                                src={logo}
                                alt=""
                                className="w-18"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}