import { NextResponse } from "next/server";

export const sendContact = async (data:any) =>{
    const method = "POST"
    const body = JSON.stringify(data)
    const headers = {
        "Content-Type": "application/json",
        "Accept":"application/json"
    }
    const response = await fetch("/api/contact/create" , {method, body, headers})
    const res = await response.json()
    return res
}