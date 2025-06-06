import Image from "next/image";

const ContactInfo1 = () => {
    return (
        <div>
            <div className="space100"></div>
        <div className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-boxs">
                            <div className="heading1">
                                <h2>고객센터</h2>
                                <div className="space16"></div>
                                <p>일본, 유럽, 미국 첨단 기업의 고품질 제품을, 합리적인 가격으로 제공하며, <br/>뛰어난 기술력과 신뢰를 기반으로 고객의 만족을 최우선으로 합니다. </p>
                            </div>
                            <div className="contact-box">
                                <div className="icon">
                                <Image src="/assets/img/icons/contact-page-icon1.png" alt="img" width={40} height={38}   />
                                </div>
                                <div className="heading">
                                    <h5>문의하기</h5>
                                    <a href="tel:(124)555-6565" className="text">010-6543-0443</a>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="icon">
                                <Image src="/assets/img/icons/contact-page-icon2.png" alt="img" width={34} height={32}   />
                                </div>
                                <div className="heading">
                                    <h5>대표 이메일</h5>
                                    <a href="mailto:tounankorea@kakao.com " className="text">tounankorea@kakao.com </a>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="icon">
                                <Image src="/assets/img/icons/contact-page-icon3.png" alt="img" width={32} height={32}   />
                                </div>
                                <div className="heading">
                                    <h5>사무실 장소</h5>
                                    <a href="tel:(124)555-6565" className="text">경기도 양주시 회천남로 80, 1807호</a>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="contact-form-details">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="email" placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="number" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-input">
                                            <input type="text" placeholder="Subject" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="single-input">
                                            <textarea cols="30" rows="5" placeholder="Message"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <button className="theme-btn1">Submit <span><i className="bi bi-arrow-right"></i></span></button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>

    );
};

export default ContactInfo1;