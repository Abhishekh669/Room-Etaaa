import {atom, useAtom} from "jotai"


const modalState = atom(false)

export const useShowPosition = () =>{
    return useAtom(modalState);
}