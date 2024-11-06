import SearchForm from "@/components/searchForm";
import StartupCard , { StartupTypeCard } from "@/components/startupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/query";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY)
  
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
              posts.map((post : StartupTypeCard) => (
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
