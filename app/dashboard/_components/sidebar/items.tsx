"use client"

import Image from "next/image";

import {cn} from "@/lib/utils";

import {Hint} from "@/components/hint"

interface ItemProps{
    id:string,
    name:string,
    imageSrc:string;
};

export const Item=({
    id,
    name,
    imageSrc,
}:ItemProps)=>{
    return(
        <div className="aspect-square relative mt-10">
            <Hint
          label={name}
          side="right"
          align="start"
          sideOffset={18} 
            >

            <Image
                fill
                alt={""}
                src={imageSrc}
                onClick={()=>{}}
                className={cn("rounded-md cursor-pointer opacity-75 hover:opacity-100 transition"
                )}

            />
            </Hint>
         </div>   
    )
}