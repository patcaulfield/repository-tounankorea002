import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Award1 from '../Components/Award/Award1';
import About1 from '../Components/About/About1';
import Services1 from '../Components/Services/Services1';
import Choose1 from '../Components/Choose/Choose1';
import Project1 from '../Components/Project/Project1';
import Pricing1 from '../Components/Pricing/Pricing1';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Blog1 from '../Components/Blog/Blog1';
import Cta1 from '../Components/Cta/Cta1';

const Home = () => {
    return (
        <div>
            <HeroBanner1
                bgImg="/assets/img/bg/hero1-bg.png"
                subTitle="세계로 뻗어가는 첨단기술 수출입을 전문 기업"
                title="신뢰와 품질로 함께하는 <span class='after'>토우난코리아</span>"
                content="토우난코리아는
최신 기술과 첨단 제품의
수출입을 주력으로 하여,
글로벌 시장에서 경쟁력을 갖추고
효율적인 비즈니스 솔루션을 제공하는
신뢰받는 무역 회사입니다."
                btnName="문의하기"
                btnUrl="/contact"
                image1="/assets/img/hero/hero1-image1.png"
                image2="/assets/img/hero/hero1-image2.png"
                shapeImage1="/assets/img/hero/hero1-image3.png"
                shapeiamge2="/assets/img/hero/hero1-image4.png"
            ></HeroBanner1>
            <Award1></Award1>
            <About1
                image1="/assets/img/about/about1-img1.png"
                image2="/assets/img/about/about1-img2.png"
                supIcon="/assets/img/icons/about1-shape-icon.png"
                supTitle="24/7 Support"
                supCon="세계로 뻗어가는 첨단기술 수출입 전문 기업"
                subTitle="회사 소개"
                Title="혁신을 통해 비즈니스를 성장시키는 우리의 이야기를 만나보세요"
                content="토우난코리아는 첨단 제품의 수출입 무역 분야를 선도하며, 글로벌 시대에서 비즈니스가 성장하고 연결되는 방식을 혁신하는 데 전념하고 있습니다.
저희의 접근 방식은 협력, 투명성, 그리고 끊임없는 품질 향상에 뿌리를 두고 있습니다.
변화하는 시장 환경에 발맞추고 한 발 앞서 나감으로써 고객이 글로벌 경쟁에서 우위를 점할 수 있도록 지원하는 것을 목표로 합니다."
                featurelist={[
                    "가치를 극대화하는 글로벌 무역 시스템을 획기적으로 재구성합니다.",
                    "차별화된 고유의 경쟁력과 판매 전략을 강조합니다.",
                    "각 무역 분야의 전문가들로 구성된 팀을 통해 신뢰와 전문성을 전달합니다.",
                ]}
                btnName="자세히보기"
                btnUrl="/about"
            ></About1>
            <Blog1></Blog1>
            <Cta1></Cta1>
        </div>
    );
};

export default Home;
