import { Html, Head, Main, NextScript } from 'next/document'
import { FB_PIXEL_ID } from '../libs/fpixel'
import Script from 'next/script'




export default function Document() {
	return (
		<Html lang="es-ES">
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700;900&family=Satisfy&display=swap" rel="stylesheet" />
				{/* Google Tag Manager */}
				{/* <Script id="google-tag" strategy="afterInteractive">
					{
						`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-TNB2D3L');`
					}
				</Script> */}
				{/* End Google Tag Manager */}

				<noscript>
               <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

			</Head>
			<body className='bg-[#f4f4f4] dark:text-white dark:bg-[#161d31]'>
				{/* Google Tag Manager (noscript) */}
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-ZBB5MQXJ4Y" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
					}}
				/>


				{/* End Google Tag Manager (noscript) */}


			


				<Main />
				<NextScript />
			</body>
		</Html>
	)
}