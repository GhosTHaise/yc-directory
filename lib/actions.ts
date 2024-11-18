"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";

export const createPitch = async (state : any , form : FormData , pitch : string) => {
    const session = await auth()

    if(!session) return parseServerActionResponse({error : 'Not signed in', status : "ERROR"});

    const {title, decription , category} = Object.fromEntries(Array.from(form).filter(([key]) => key !== 'pitch'));

    
}