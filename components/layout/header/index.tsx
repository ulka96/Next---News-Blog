import Link from 'next/link';
import React from 'react';

const Header = () => {
  const navElements = [
    { id: 1, name: 'Stories', link: '/' },
    { id: 2, name: 'Creator', link: '/creator' },
    { id: 3, name: 'Community', link: '/community' },
    { id: 4, name: 'Subscribe', link: '/subscribe' },
  ];

  return (
    <div>
      <ul>
        {
          navElements && navElements.map((element) => {
            return (
              <Link href={element.link}>
              <li key={element.id}>
                {element.name}
              </li>
              </Link>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Header;

