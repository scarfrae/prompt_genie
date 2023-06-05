"use client";
import { SessionProvider } from 'next-auth/react';
//for authorization
const Provider = ({children, session}) => {
  return (
    //wrap children in sessionProvider since higher order
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider
