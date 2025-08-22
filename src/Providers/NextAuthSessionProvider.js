"use client"; // required because SessionProvider is client-side

import { SessionProvider } from "next-auth/react";

export default function NextAuthSessionProvider({ children, session }) {
  return (

   <SessionProvider session={session}>
    {children}
    </SessionProvider>
  );
}
