import Image from 'next/image';
import {AiOutlineSearch} from "react-icons/ai";
import {VscAccount} from 'react-icons/vsc'
import {BiBellMinus} from "react-icons/bi";
import Link from "next/link";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/components/context/auth.context";
import {FiLogOut} from "react-icons/fi";
import {useRouter} from "next/router";
import {useSubscription} from "@/store";
import {useAuth} from "@/hooks/useAuth";
import NavMenu from '../nav-menu/nav-menu';

const Header = () => {
	const [scrolled, setScrolled] = useState<boolean>(false);
	const {logout} = useContext(AuthContext)
	const {setIsLoading} = useAuth()
	const {type} = useSubscription()
	const router = useRouter();
	useEffect(() => {
		const handleScroll = ()=>{
			if(window.scrollY > 0){
				setScrolled(true)
			}
			else{setScrolled(false)}
		}
		window.addEventListener("scroll",handleScroll);

		return ()=>window.removeEventListener("scroll", handleScroll)
	}, []);
	return (
		<header className={`${scrolled && "bg-slate-700 backdrop-filter backdrop-blur-lg bg-opacity-30 "}`}>
			<div className='flex items-center space-x-2 md:space-x-10'>
				<Image src={'/logo.svg'} alt={'logo'} width={56} height={56} className={'cursor-pointer object-contain'} />
				<NavMenu />
				{!!type && <ul className='space-x-4 md:flex hidden'>
					<li className='navLink'>Home</li>
					<li className='navLink'>Movies</li>
					<li className='navLink'>TV Shows</li>
					<li className='navLink'>New</li>
					<li className='navLink'>Popular</li>
					</ul>}
			</div>
			 <div className="flex items-center text-sm space-x-4 font-light">
				 {!!type && <>
					 <AiOutlineSearch className="svg"/>
					 <p className="hidden lg:inline">Kids</p>
					 <BiBellMinus className="svg minus"/>
					 <Link href={"/account"}>
						 <VscAccount className="svg"/>
					 </Link>
				 </>
				 }
				<FiLogOut className="svg" onClick={()=> {
					setIsLoading(true)
					logout().then(()=>{router.push("/auth"); setIsLoading(false)})
				}}/>
			</div>
		</header>
	);
};

export default Header;
