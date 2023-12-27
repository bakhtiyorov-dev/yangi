import React, {useEffect, useState} from 'react';
import {HeroProps} from "@/components/hero/hero.props";
import {IMovie} from "@/interfaces/app.interface";
import Image from "next/image";
import {image_base_url} from "@/helpers/constants";
import {TbPlayerPlay} from "react-icons/tb";
import ReactStars from "react-stars";
import {useInfoStore} from "@/store";

const Hero = ({trending}:HeroProps):JSX.Element => {
    const [movie, setMovie] = useState<IMovie>({} as IMovie);
    const {setModal,setCurrentMovie} = useInfoStore();
    const handleCurrentMovie = ()=>{
        setModal(true);
        setCurrentMovie(movie);
    }
    useEffect(()=>{
        const randomMovie:IMovie = trending[Math.floor(Math.random() * trending.length)]
        setMovie(randomMovie)
    },[trending])
    return (
        <div className={"flex flex-col space-y-2 py-16 md:space-y-4 md:h-[80vh] h-40vh w-full lg:pb-12 md:justify-end mx-auto "}>
            {
                movie ?
                    <div className="absolute top-0 left-0 md:h-[100vh] sm:h-[50vh] h-[40vh] w-full -z-10 object-cover ">
                    <Image src={`${image_base_url}/${movie?.backdrop_path || movie?.poster_path}`} alt={movie.original_title || "image"} fill className={"object-cover -z-20 "}/>
                </div>
                    :
                    <h1>Loading ... </h1>
            }

         <div className={"max-w-md md:m-0 m-3 text-xl md:max-w-xl px-6  py-5 lg:max-w-3xl flex flex-col space-y-2 bg-slate-900 bg-opacity-50 md:bg-opacity-20 md:backdrop-blur-sm rounded-md "}>
             <div>
                 <span className={'bg-slate-500 rounded-tl-md rounded-br-md rounded- px-2 py-1 text-sm bg-opacity-70'}>{movie.media_type}</span>
             </div>
             <div className={"flex md:flex-row flex-col md:gap-1 items-center "}>
                 <ReactStars count={10} edit={false} value={movie.vote_average} size={18}/>
                 <span className={"text-sm md:text-lg"}>votes: {movie.vote_count}</span>
             </div>
             <h1 className={"inline text-2xl font-bold  md:text-4xl lg:text-7xl bg-opacity-30"}>
                 {movie?.title || movie?.original_title || movie?.name || movie?.original_name}
             </h1>
             <p className={"text-xs md:text-lg lg:text-2xl md:line-clamp-4 line-clamp-1"}>{movie?.overview}</p>
             <div className={"md:mt-2"}>
                 <button className={"flex justify-center align-center gap-2 md:px-6 md:py-3 px-3 py-2 md:text-xl text-sm  border-slate-50  rounded-lg bg-amber-500 opacity-100  transition-all duration-300  origin-center  transform active:scale-75 hover:bg-amber-700 "} onClick={handleCurrentMovie}>
                    <TbPlayerPlay className={"md:text-2xl text-lg"}/> <span>Watch Now</span></button>
             </div>
         </div>
        </div>
    );
};

export default Hero;
