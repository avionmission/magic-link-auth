'use client'

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home(context) {

  const {data: session} = useSession(context)
  const router = useRouter()

  return (
    <main>
      <div className="container px-5 py-24 mx-auto flex flex-col justify-center items-center text-center">
        <h1>Homepage</h1>
        {session && 
          <>
            <div>
              <p>Signed in as {session.user.email}</p>
              <button onClick={signOut}>Sign Out</button>     
            </div>
                   
          </>}

        {!session &&
          <>
            <button onClick={() => router.push('/signin')}>Sigin with Email</button>
          </>
        }
      </div>
    </main>
  )
}
