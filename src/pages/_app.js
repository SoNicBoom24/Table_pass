import * as React from 'react'
import '@/styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId='294858680175-sksp0ktcs6md52n5vs1rp2q9mcec873i.apps.googleusercontent.com' >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </GoogleOAuthProvider>
  )
}


// Client ID       294858680175-sksp0ktcs6md52n5vs1rp2q9mcec873i.apps.googleusercontent.com
// Client secret   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