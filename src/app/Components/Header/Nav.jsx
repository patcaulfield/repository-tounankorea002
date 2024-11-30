import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">

      <li className="menu-item-has-children">
        <Link href="#">기업 소개</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/about" onClick={() => setMobileToggle(false)}>
                기업 소개
              </Link>
            </li>
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
               회사 사람들
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link href="/project" onClick={() => setMobileToggle(false)}>
        프로젝트
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/project" onClick={() => setMobileToggle(false)}>
              프로젝트 목록
              </Link>
            </li>
            <li>
              <Link href="/project/project-details-center" onClick={() => setMobileToggle(false)}>
              프로젝트 상세
              </Link>
            </li>
          </ul>
        </DropDown>

      </li>
      <li className="menu-item-has-children">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          서비스
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                서비스 목록
              </Link>
            </li>
            <li>
              <Link href="/service/service-details-center" onClick={() => setMobileToggle(false)}>
                서비스 상세
              </Link>
            </li>
          </ul>
        </DropDown>

      </li>
      <li className="menu-item-has-children">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          블로그
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                블로그 목록
              </Link>
            </li>
            <li>
              <Link
                href="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                블로그 상세
              </Link>
            </li>

          </ul>
        </DropDown>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          문의 및 요청
        </Link>
      </li>
    </ul>
  );
}
