"use client"

import Image from "next/image"

import logo from "@/public/svg/logo.svg"

export default function TopBar() {
    return (
        <>
            <div className="fixed w-full max-w-[430px] mx-auto top-0 bg-white">
                <div className="border-b border-gray-300">
                    <div className="mx-4 my-4 flex justify-between items-center">
                        <div>
                            <h1 className="font-[family-name:var(--space-grotesk)] text-red-900">Welcome to</h1>
                            <h1 className="font-[family-name:var(--space-grotesk)] font-bold text-xl text-red-900">XFL123 Club</h1>
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