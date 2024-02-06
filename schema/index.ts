import * as z from "zod";

export const LoginSchema=z.object({
    email:z.string().email({
        message:"Invalid email"
    }),
    password:z.string().min(6)
})


export const RegisterSchema=z.object({
    email:z.string().email({
        message:"Invalid email"
    }),
    password:z.string().min(6,{
        message:"Minimum 6 characters required"
    }),
    name:z.string().min(1,{
        message:"Name is required"
    })
})