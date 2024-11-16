import Image from "next/image";
import Link from "next/link";

const Blog7 = () => {
    return (
        <div className="blog blog-inline blog-page bg1 sp">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 m-auto text-center">
                    <div className="heading1 main">
                        <h2>More Blog</h2>
                    </div>
                </div>
            </div> 
            <div className="space30"></div>
          <div className="row">
            <div className="col-lg-6">
              <div className="blog2-box">
                <div className="image">
                <Image src="/assets/img/blog/blog2-img2.png" alt="img" width={636} height={457}   />
                </div>
                <div className="heading1">
                  <div className="tags">
                    <a href="#" className="date"><Image src="/assets/img/icons/date.png" alt="img" width={20} height={20}   /> 10/02/2024</a>
                    <a href="#" className="date outhor"><Image src="/assets/img/icons/user.png" alt="img" width={12} height={14}   /> Ben Cutting</a>
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
              <div className="blog2-box">
                <div className="image">
                <Image src="/assets/img/blog/blog2-img1.png" alt="img" width={636} height={457}   />
                </div>
                <div className="heading1">
                  <div className="tags">
                  <a href="#" className="date"><Image src="/assets/img/icons/date.png" alt="img" width={20} height={20}   /> 10/02/2024</a>
                  <a href="#" className="date outhor"><Image src="/assets/img/icons/user.png" alt="img" width={12} height={14}   /> Ben Cutting</a>
                  </div>
                  <h4><Link href="/blog/blog-details">The Importance of Cybersecurity</Link></h4>
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

export default Blog7;