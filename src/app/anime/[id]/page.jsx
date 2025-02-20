import VideoPlayer from "@/app/components/Utilities/VideoPlayer"
import { getAnimeResponse } from "@/app/libs/api-libs"
import Image from "next/image"

const Page = async ( { params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    
    return (
        <>
            <div className="pt-4 px-4">
                    <h3 className="text-2xl text-color-primary">{anime.data.title} - {anime.data.year}</h3>
            </div>

            <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto h-1/2">
                
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                        <h3>PERINGKAT</h3>
                        <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                        <h3>SKOR</h3>
                        <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                        <h3>EPISODE</h3>
                        <p>{anime.data.episodes}</p>
                </div>
                    </div>


            <div className="flex flex-col">
                
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
                <Image
                src={anime.data.images.webp.image_url}
                alt={anime.data.images.jpg.image_url}
                width={350}
                height={350}
                className="w-full max-h-64 rounded object-cover"/>
                 <p className="text-justify text-xs">{anime.data.synopsis}</p>
                 </div>
                
            

              

                 
            </div>
    
                
            
            

            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
            </div>
        </>
    )
}

export default Page