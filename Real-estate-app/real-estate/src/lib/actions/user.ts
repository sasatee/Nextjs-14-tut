"use server"

import prisma from "../prisma"


export async function getUserById(id:string){
    return await prisma.admin.findUnique({
        where:{
            id:id
        }
    })
}