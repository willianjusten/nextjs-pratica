import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyle from 'styles/global.styles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content="#06092B" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </Head>
      <NextSeo
        title="Aprenda NextJS, GraphQL e Leaflet na prática!"
        description="Crie um mapa totalmente interativo com um CMS integrado em poucas horas!"
        canonical="https://nextjs-pratica.willianjusten.com.br/"
        openGraph={{
          url: 'https://nextjs-pratica.willianjusten.com.br/',
          title:
            'Aprenda NextJS, GraphQL e Leaflet na prática!',
          description:
            'Crie um mapa totalmente interativo com um CMS integrado em poucas horas!',
          images: [{ url: 'https://nextjs-pratica.willianjusten.com.br/img/cover.png' }],
          site_name: 'React Avançado',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@Willian_justen',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
