import Link from 'next/link';

const Menu = () => {
  return (
    <ul className="menu">
      <li className="menu-item">
        <Link href="/about">
          <a>About Me</a>
        </Link>
      </li>
      <li className="menu-item">|</li>
      <li className="menu-item">
        <Link href="/about">
          <a>Portfolio</a>
        </Link>
      </li>
      <li className="menu-item">|</li>
      <li className="menu-item">
        <Link href="/about">
          <a>Git</a>
        </Link>
      </li>
      <li className="menu-item">|</li>
      <li className="menu-item">
        <Link href="/about">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
