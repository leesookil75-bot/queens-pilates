import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "퀸즈필라테스 | 국내 최고급 필라테스 기구 제조",
  description: "퀸즈필라테스는 국내 제조 프리미엄 필라테스 기구 브랜드입니다. 리포머, 콤비리포머, 체어, 바렐 등 스튜디오 납품 및 개인 구매 가능. 견적 문의 환영.",
  keywords: "필라테스 기구, 필라테스 리포머, 콤비리포머, 필라테스 체어, 필라테스 바렐, 필라테스 스튜디오 기구, 국내 제조 필라테스, 필라테스 기구 납품, 퀸즈필라테스",
  openGraph: {
    title: "퀸즈필라테스 | 국내 최고급 필라테스 기구 제조",
    description: "스튜디오 창업부터 개인 구매까지, 퀸즈필라테스 프리미엄 필라테스 기구와 함께하세요.",
    type: "website",
    locale: "ko_KR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "퀸즈필라테스",
              description: "국내 최고급 필라테스 기구 제조 브랜드",
              telephone: "010-3520-8808",
              email: "mubin95@hanmail.net",
              address: {
                "@type": "PostalAddress",
                addressCountry: "KR"
              },
              offers: [
                { "@type": "Offer", name: "필라테스 리포머" },
                { "@type": "Offer", name: "콤비리포머" },
                { "@type": "Offer", name: "필라테스 체어" },
                { "@type": "Offer", name: "필라테스 바렐" },
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
