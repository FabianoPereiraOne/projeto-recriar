import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {

  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" />
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
