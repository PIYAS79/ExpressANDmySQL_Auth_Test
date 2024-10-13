import { z } from "zod";




export const Zod_Register_Type = z.object({
    body: z.object({
        name: z.string(),
        email: z.string(),
        password: z.string()
    })
})

export const Zod_Login_Type = z.object({
    body: z.object({
        email: z.string(),
        password: z.string()
    })
})

