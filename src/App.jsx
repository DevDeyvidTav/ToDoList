import { useState } from "react"
import { Form } from "./components/Form"
import { Header } from "./components/Header"

export function App(){
    return(
        <div className=" bg-zinc-900 w-screen h-full fixed">
            <Header/>
            <Form/>
        </div>
    )
}