import Link from "next/link";

const Cta1 = () => {
    return (
        <div className="cta">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="heading1-w">
                  <h2 className="title tg-element-title">신뢰와 품질로 함께하는 <br/>토우난코리아.</h2>
                  <div className="space16"></div>
                  <p data-aos="fade-right" data-aos-duration="700" >일본, 유럽, 미국 첨단 기업의 고품질 제품을, 합리적인 가격으로 제공하며, 뛰어난 기술력과 신뢰를 기반으로 고객의 만족을 최우선으로 합니다.</p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="buttons">
                  <Link className="cta-btn1" href="/contact">문의하기 <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                      </svg>
                    </span></Link>
                  <Link className="cta-btn2" href="/project">제품소개 <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                      </svg>                   
                    </span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
};

export default Cta1;