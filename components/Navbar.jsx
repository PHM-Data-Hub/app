import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  const handleSticky = () => {
    const offset = window.scrollY;
    if (offset > 3) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleSticky)
  })
  
  return (
    <div className={scrolled === true ? 'navbar  sticky' : 'navbar'}>
      <div className="container">
        <div className="navbar__left">
          <Link href="/">
            <h1>Machine Data Hub</h1>
          </Link>
        </div>
        <div className="navbar__right">
          <ul>
            {/* if the condition returns true -> give a nav-active class to li element */}
            <Link href="/getting-started">
              <li className={router.pathname === "/getting-started" ? "nav-active" : ""}>
                Getting Started
              </li>
            </Link>
            <Link href="/about">
              <li className={router.pathname === "/about" ? "nav-active" : ""}>
                About
              </li>
            </Link>
            <Link href="/blogs">
              <li className={router.pathname === "/blogs" ? "nav-active" : ""}>
                Blogs
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
