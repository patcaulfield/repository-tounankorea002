import Image from "next/image";
import Link from "next/link";

const Blog2 = () => {
    return (
        <div className="blog sp">
            <div className="container">
            <div className="row">
                <div className="ocl-lg-6 text-center m-auto">
                <div className="heading2">
                    <span className="span">
                    <Image src="/assets/img/icons/span2.png" alt="img" width={18} height={16}   />
                         Our Blog</span>
                    <h2 className="title tg-element-title">See Our Latest Blog & News</h2>
                </div>
                </div>
            </div>

            <div className="space30"></div>
            <div className="row">
                <div className="col-lg-6">
                <div className="blog2-box" data-aos="zoom-in-up" data-aos-duration="800">
                    <div className="image image-anime">
                    <Image src="/assets/img/blog/blog2-img2.png" alt="img" width={636} height={457}   />
                    </div>
                    <div className="heading2">
                    <div className="tags">
                        <a href="#" className="date">
                        <Image src="/assets/img/icons/date.png" alt="img" width={20} height={20}   /> 
                            10/02/2024</a>
                        <a href="#" className="date outhor">
                        <Image src="/assets/img/icons/user.png" alt="img" width={12} height={14}   /> 
                             Ben Cutting</a>
                    </div>
                    <h4><Link href="/blog/blog-details">The Importance of Cybersecurity</Link></h4>
                    <div className="space16"></div>
                    <p>We explore the growing trend of remote work and its implications for cybersecurity.</p>
                    <div className="space16"></div>
                    <Link href="/blog/blog-details" className="learn">Read More <span><i className="bi bi-arrow-right"></i></span></Link>
                    </div>
                </div>
                </div>

                <div className="col-lg-6">
                <div className="blog2-box" data-aos="zoom-in-up" data-aos-duration="1100">
                    <div className="image image-anime">
                    <Image src="/assets/img/blog/blog2-img1.png" alt="img" width={636} height={457}   />
                    </div>
                    <div className="heading2">
                    <div className="tags">
                    <a href="#" className="date">
                        <Image src="/assets/img/icons/date.png" alt="img" width={20} height={20}   /> 
                            10/02/2024</a>
                        <a href="#" className="date outhor">
                        <Image src="/assets/img/icons/user.png" alt="img" width={12} height={14}   /> 
                             Ben Cutting</a>
                    </div>
                    <h4><Link href="/blog/blog-details">The Future of Cloud Computing</Link></h4>
                    <div className="space16"></div>
                    <p>We take a deep dive into the future of cloud computing and discuss emerging trends and predictions that the industry.</p>
                    <div className="space16"></div>
                    <Link href="/blog/blog-details" className="learn">Read More <span><i className="bi bi-arrow-right"></i></span></Link>
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Blog2;