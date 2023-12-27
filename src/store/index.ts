import {create} from "zustand";
import {IMovie} from "@/interfaces/app.interface";

interface  InfoState{
    modal:boolean;
    currentMovie:IMovie;
    setModal:(bool:boolean)=>void,
    setCurrentMovie:(movie:IMovie)=>void,
}

interface Subscription {
    type:string;
    setSubscription:(type:string)=>void
}

export const useInfoStore = create<InfoState>()((set)=>({
    modal:false,
    currentMovie:{} as IMovie,
    setModal:(bool:boolean) => set(state=>({...state,modal:bool})),
    setCurrentMovie:(currentMovie:IMovie)=>set(state=>({...state,currentMovie}))
}))

export const useSubscription = create<Subscription>()(set=>({
    type:"guest",
    setSubscription:(type:string)=>set(state=>({...state,type}))
}))

