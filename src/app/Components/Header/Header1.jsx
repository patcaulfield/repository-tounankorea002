"use client"
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
export default function Header1({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <div className='header-area2 header_nav_03'>
    <header
      className={`cs_site_header cs_style_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_top_header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pera">
                <p>
                <Image src="/assets/img/icons/header-top-span.png" alt="img" width={30} height={26}   />
                  세계로 뻗어가는 첨단기술 수출입 전문 기업 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_main_header cs_accent_bg">
        <div className="container">
          <div className="cs_main_header_in">

            <div className="cs_main_header_left">
              <Link className="cs_site_branding" href="/">
              <Image src="/assets/img/logo/header-logo1.png" alt="img" width={181} height={28}   />
              </Link>
              </div>

              <div className="cs_main_header_center1">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
            </div>
            <div className="cs_main_header_right header_right_one">

            <div className="header1-buttons">
                    <div className="contact-btn">
                      <div className="icon">
                      <Image src="/assets/img/icons/header1-icon.png" alt="img" width={22} height={22}   />
                      </div>
                      <div className="headding">
                        <p>고객센터</p>
                        <a href="tel:010-6543-04435">010-6543-0443</a>
                      </div>
                    </div>
                    <div className="button">
                    <Link href="/contact" className="theme-btn1" >문의하기 <span><i className="bi bi-arrow-right"></i>
                    </span></Link>
                    </div>
               </div>

            </div>
          </div>
        </div>
      </div>
    </header>
    </div>

  );
}
