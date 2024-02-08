
interface FooterProps{
    title:string,
    description:string
}

export const Footer=({
   title,
   description 
}:FooterProps)=>{
    return(
        <div className="relative bg-white p-3">
            <p className="text-[17px] truncate max-w-[calc(100%-20px)]">
            {title}
            </p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[15px]
            text-muted-foreground truncate">
               {description} 
            </p>
            <p className="bg-red-300 justify-center mr-5 ml-5 text-center border rounded-lg">
                Incomplete
            </p>    
        </div>
    )
}