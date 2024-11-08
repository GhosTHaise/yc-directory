import SearchForm from "@/components/searchForm";
import StartupCard , { StartupTypeCard } from "@/components/startupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/query";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;
  const params = {
    search : query || null,
  }

  //const posts = await client.fetch<StartupTypeCard[]>(STARTUPS_QUERY)
  const { data : posts } = await sanityFetch<any>({query : STARTUPS_QUERY, params});

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
            query ? `Search results for "${query}"` : "All Startups"
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

      <SanityLive />
    </>
  );
}
