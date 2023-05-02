'use client'

import Link from "next/link";

function Menu(){
    function openMenu(){
        document.getElementById("menu").classList.remove("animate-slideout");
        document.getElementById("menu").classList.add("animate-slidein");
    };

    const closeMenu = () => {
        document.getElementById("menu").classList.remove("animate-slidein");
        document.getElementById("menu").classList.add("animate-slideout");
      };

    return(
        <>
        <button className="rounded-full m-4 px-4 py-2 border border-black bg-transparent hover:bg-green-300" onClick={openMenu}>
            ABRIR MENU
        </button>
        <nav id="menu" className="flex flex-col w-full h-full items-center text-center p-4 space-y-16 absolute top-0 translate-x-[-100%] bg-gray-400">
            <button className="self-end rounded-full py-2 px-4 border border-black  hover:bg-red-600" onClick={closeMenu}>
            FECHAR MENU
            </button>
            <Link href={'/'} className="w-full md:w-1/4 p-4 rounded-full border border-black bg-transparent hover:bg-blue-600">Opção 1</Link>
            <Link href={'/'} className="w-full md:w-1/4 p-4 rounded-full border border-black bg-transparent hover:bg-red-600">Opção 2</Link>
            <Link href={'/'} className="w-full md:w-1/4 p-4 rounded-full border border-black bg-transparent hover:bg-green-600">Opção 3</Link>
            <Link href={'/'} className="w-full md:w-1/4 p-4 rounded-full border border-black bg-transparent hover:bg-yellow-600">Opção 4</Link>
        </nav>
        </>
    )
}

export default Menu;