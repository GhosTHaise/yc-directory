import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { client } from "./sanity/lib/client"
import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/query"
import { writeClient } from "./sanity/lib/write-client"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks : {
    async signIn({user : {name , email , image}, account , profile : { id , login, bio}}){
      const existingUser = await client.fetch(AUTHOR_BY_GITHUB_ID_QUERY,{ id });

      if(!existingUser){
        await writeClient.create({
          _type : 'author',
          id,
          name,
          username : login,
          email,
          image,
          bio
        });
      }
      return true
    }
  }
})