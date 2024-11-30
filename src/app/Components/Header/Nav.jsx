import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">

      <li className="menu-item-has-children">
        <Link href="#">About</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
               Our Team
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link href="/project" onClick={() => setMobileToggle(false)}>
        Project
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/project" onClick={() => setMobileToggle(false)}>
              Project Light
              </Link>
            </li>
            <li>
              <Link href="/project/project-details-center" onClick={() => setMobileToggle(false)}>
              Project Details Center
              </Link>
            </li>
          </ul>
        </DropDown>

      </li>
      <li className="menu-item-has-children">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Services Light
              </Link>
            </li>
            <li>
              <Link href="/service/service-details-center" onClick={() => setMobileToggle(false)}>
                Service Details Center
              </Link>
            </li>
          </ul>
        </DropDown>

      </li>
      <li className="menu-item-has-children">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Blog Light
              </Link>
            </li>
            <li>
              <Link
                href="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details Left
              </Link>
            </li>

          </ul>
        </DropDown>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
