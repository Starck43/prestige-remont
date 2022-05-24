import Head from "next/head"

const Seo = ({ siteName, title, description, keywords }) => (
  <Head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:site_name" content={siteName} />
    <meta
      property="og:description"
      content={description}
    />
    <meta property="og:title" content={title} />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicons/favicon-16x16.png"
    />
    <link
      rel="mask-icon"
      href="/favicons/safari-pinned-tab.svg"
      color="#8c52ff"
    />
    <link rel="manifest" href="/favicons/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#8c52ff" />
    <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
    <meta name="theme-color" content="#a6a6a6" />
    <link rel="shortcut icon" href="/favicons/favicon.ico" />

    <link rel="canonical" href="https://престиж-ремонт.рф" />
    <meta name="robots" content="follow, index" />

    {process.env.NODE_ENV === "production" && process.env.GA_ANALYTICS_MEASUREMENT_ID && (
      <>
        <meta name="googlebot" content="index, follow" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ANALYTICS_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_ANALYTICS_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </>
    )}

    {process.env.NODE_ENV === "production" && process.env.YANDEX_METRIKA_ID && (
      <>
        <script
          dangerouslySetInnerHTML={{
            __html: `
							(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
								m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
							(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

							ym(${process.env.YANDEX_METRIKA_ID}, "init", {
								clickmap:true,
								trackLinks:true,
								accurateTrackBounce:true
							});
						`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
							<div><img src="https://mc.yandex.ru/watch/${process.env.YANDEX_METRIKA_ID}" style="position:absolute; left:-9999px;" alt="" /></div>
						`,
          }}
        />
      </>
    )}
  </Head>
)

export default Seo
