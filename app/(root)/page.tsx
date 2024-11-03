import SearchForm from "@/components/searchForm";
import StartupCard from "@/components/startupCard";
import { title } from "process";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;
  const posts = [
    {
      _createAt: new Date(),
      views: 55,
      author: { _id: 1 , name : 'fitia' },
      _id: 1,
      description: "desc",
      image: "https://img.freepik.com/photos-gratuite/vue-du-robot-graphique-3d_23-2150849173.jpg",
      category: "Category",
      title: "robots --- 0 "
    }
  ]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Notices in Virtual Competitions.
        </p>

        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {
            query ? `Search results for ${query}` : "All Startups"
          }
        </p>

        <ul className="mt-7 card_grid">
          {
            !!posts.length ? (
              posts.map((post, index) => (
                <StartupCard key={post?._id} post={post} />
              )
              )) : (
              <div>
                <p>No startups found</p>
              </div>
            )
          }
        </ul>
      </section>
    </>
  );
}
