import React from 'react';
import {ThumbnailProps} from "@/components/thumbnail/thumbnail.props";
import Image from "next/image";
import {image_base_url} from "@/helpers/constants";
import ReactStars from "react-stars";
import {useInfoStore} from "@/store";

const Index = ({movie,isBig=false}:ThumbnailProps) => {
    const {setModal,setCurrentMovie} = useInfoStore();
    const handleCurrentMovie = ()=>{
        setModal(true);
        setCurrentMovie(movie);
    }
    const normSize ="h-[180px]  sm:h-[330px]  md:h-[440px] min-w-[292px]"
    const bigSize ="h-[220px]  sm:h-[470px]  md:h-[600px] md:min-w-[450px] min-w-[330px]"
    return (
        <div onClick={handleCurrentMovie} className={`relative ${isBig?bigSize:normSize} cursor-pointer ease-out transition-all duration-300 hover:scale-105`}>
            <Image fill
                   src={`${image_base_url}/${movie?.backdrop_path || movie?.poster_path}`}
                   alt={movie?.original_title || movie?.original_name || 'IMAGE'}
                   className={"object-cover rounded-sm md:rounded"}
            />
            <div className="absolute flex items-start justify-end flex-col  bottom-0 left-0 w-full min-h-[50%] px-2 py-3 bg-gradient-to-t from-slate-900 from-100% to-transparent via-20% bg-opacity-80">
                <div className={"flex  flex-col md:gap-1 items-start "}>
                    <ReactStars count={10} edit={false} value={movie.vote_average} size={15}/>
                    <span className={"text-sm md:text-md"}>votes: {movie.vote_count}</span>
                </div>
                <h4 className={"inline text-xl font-bold  md:text-4xl bg-opacity-30"}>
                    {movie?.title || movie?.original_title || movie?.name || movie?.original_name}
                </h4>
            </div>
        </div>
    );
};

export default Index;
