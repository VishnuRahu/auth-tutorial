"use client"

import Image from "next/image";
import Link from "next/link"

import { Overlay } from "@/app/dashboard/_components/board-card/overlay"
import {Footer} from "@/app/dashboard/_components/board-card/footer"

interface BoardcardProps{
    key:string,
    title:string,
    description:string
}

export const Boardcard=({
     key,
     title,
     description

}:BoardcardProps)=>{
    return(
        <Link href={`/board/`}>
        <div className="group aspect-[100/127] border rounded-lg flex
        flex-col justify-between overflow-hidden">
            <div className="relative flex-1 bg-amber-50">
            <Image
                  alt="hello"
                  src="/tsk1.jpeg"
                  fill
                  className="h-0.5"
               />
               <Overlay/>
               </div>
               <Footer
                 title={title}
                 description={description}
                />
            
        </div>
        </Link>
    )
}