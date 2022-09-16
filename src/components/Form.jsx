import { Checkbox } from "@material-tailwind/react";
import { useState } from "react";

export function Form() {
    const [lista, setLista] = useState([])
    const [novoItem, setNovoItem] = useState('')
    function addNewItem() {
        setLista([...lista, novoItem])
        setNovoItem('')
    }
    let handleDelete = () => {
        const newLista = [...lista];
        newLista.splice(newLista.indexOf(novoItem), 1)
        setLista(newLista)

    }

    return (
        <div>
            <div className="flex flex-col md:flex-row w-screen absolute gap-20 items-center justify-center mt-10">

                <div className="adicionar tarefas| bg-zinc-700 md:w-2/5 h-3/5 relatives rounded-md w-[80vw] ">
                    <form className="flex flex-col items-center justify-center space-y-56 mt-8 ">
                        <input value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text" className="input border-1 rounded-md flex h-8  justify-center w-56  items-center" placeholder="digite algo" />
                        <button onClick={(e) => {
                            addNewItem();
                            e.preventDefault();


                        }}
                            className="mb-5 bg-cyan-500 w-40 h-16 text-3xl text-white font-bold border-x-2 border-zinc-800 rounded-full shadow-cyan-500/50 hover:bg-cyan-700 duration-300 hover:ease-out">
                            enviar
                        </button>
                    </form>
                </div>
                <div className=" tarefas| bg-zinc-700 md:w-2/5  relative rounded-md w-[80vw]  ">
                    <ul className=" text-2xl justify-center items-center mt-2"> {lista.map(item => <li key={item} className="text-white px-10 hover:bg-slate-600 mb-3 rounded-md flex justify-between"> {item} <div className="flex gap-5"><Checkbox className="w-7 h-7" /> <button onClick={() => handleDelete()} className="bg-red-400 h-7 w-7 rounded-full text-center font-extrabold flex justify-center items-center " ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button></div> </li>)} </ul>

                </div>
            </div>
        </div>

    )
}