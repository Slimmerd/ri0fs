import Script from "next/script";

function GTAG() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9B3V3KQWFN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9B3V3KQWFN');
        `}
      </Script>
    </>
  );
}

export default GTAG;
