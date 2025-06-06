import Image from "next/image";
import Link from "next/link";

const Footer1 = () => {
    return (
        <div className="footer1 _relative">
        <div className="container">
             <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                       <div className="single-footer-items footer-logo-area">
                            <div className="footer-logo">
                              <a href="">
                              <Image src="/assets/img/logo/footer-logo1.png" alt="img" width={209} height={46}   />
                                </a>
                            </div>
                            <div className="space20"></div>
                            <div className="heading1">
                              <p>일본, 유럽, 미국 첨단 기업의 고품질 제품을, 합리적인 가격으로 제공하며, 뛰어난 기술력과 신뢰를 기반으로 고객의 만족을 최우선으로 합니다. </p>
                            </div>
                            <ul className="social-icon">
                                 <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                 <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                 <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                                 <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                            </ul>
                       </div>
                  </div>

                  <div className="col-lg col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>제품 소개</h3>

                            <ul className="menu-list">
                                 <li><Link href="/service/service-details">제품1</Link></li>
                                 <li><Link href="/service/service-details">제품2</Link></li>
                                 <li><Link href="/service/service-details">제품3</Link></li>
                                 <li><Link href="/service/service-details">제품4</Link></li>
                            </ul>
                       </div>
                  </div>

                  <div className="col-lg col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>카테고리</h3>

                            <ul className="menu-list">
                                 <li><Link href="/about">기업소개 </Link></li>
                                 <li><Link href="/service">서비스</Link></li>
                                 <li><Link href="/blog">블로그 & 최신 소식</Link></li>
                                 <li><Link href="/project">제품소개</Link></li>
                                 <li><Link href="/contact">문의하기</Link></li>
                            </ul>
                       </div>
                  </div>


                  <div className="col-lg-3 col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>문의하기</h3>

                            <div className="contact-box">
                              <div className="icon">
                                <Image src="/assets/img/icons/footer1-icon1.png" alt="img" width={24} height={24}   />
                              </div>
                              <div className="pera">
                                <a href="tel:010-2762-2109">관리팀: 010-2762-2109</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                              <Image src="/assets/img/icons/footer1-icon2.png" alt="img" width={24} height={24}   />
                              </div>
                              <div className="pera">
                                <a href="tel:010-6543-0443">영업팀: 010-6543-0443</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                              <Image src="/assets/img/icons/footer1-icon3.png" alt="img" width={24} height={24}   />
                              </div>
                              <div className="pera">
                                <a href="mailto:tounankorea@kakao.com">tounankorea@kakao.com<br/>(국내영업)</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                              <Image src="/assets/img/icons/footer1-icon4.png" alt="img" width={24} height={24}/>                                
                              </div>
                              <div className="pera">
                                <a href="mailto:tounanjapan@kakao.com">tounanjapan@kakao.com<br/>(해외자재)</a>
                              </div>
                            </div>

                       </div>
                  </div>

             </div>

             <div className="space40"></div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                   <div className="coppyright">
                     <p>Copyright @2025 Tounankorea.All Rights Reserved</p>
                   </div>
              </div>
              <div className="col-md-7">
                   <div className="coppyright right-area">
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                   </div>
              </div>
         </div>
          </div>
     </div>

      </div>
    );
};

export default Footer1;