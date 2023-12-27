import React, {ReactNode, useContext, useEffect} from 'react';
import Header from "@/components/header";
import {useRouter} from "next/router";
import {AuthContext} from "@/components/context/auth.context";
type Props = {
    children:ReactNode
}
const Layout = ({children}:Props) => {
    const router = useRouter();
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        !user && router.push("/auth");
        return;
        //eslint-disable-next-line
    },[])
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;
