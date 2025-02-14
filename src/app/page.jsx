import AnimeList from "./components/AnimeList";
import Header from "./components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "./libs/api-libs";

const Page = async () => {

  const TopAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 8)
  
  


  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={TopAnime} />
      </section>

      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
}

export default Page