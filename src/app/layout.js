import { Figtree } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300','400', '500', '600', '700', '800', '900'],
  variable: '--body-color-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: '토우난코리아 - 글로벌 시장의 동반자, 성공을 함께 만들어갑니다!',
    template: '%s | 토우난코리아 - 글로벌 시장의 동반자, 성공을 함께 만들어갑니다!',
  },
  description: '토우난코리아 - 글로벌 시장의 동반자, 성공을 함께 만들어갑니다!',
  openGraph: {
    title: '토우난코리아 - 글로벌 시장의 동반자, 성공을 함께 만들어갑니다!',
    description: '토우난코리아 - 글로벌 시장의 동반자, 성공을 함께 만들어갑니다!',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${figtree.variable}`}>
        {children}
      </body>
    </html>
  );
}
