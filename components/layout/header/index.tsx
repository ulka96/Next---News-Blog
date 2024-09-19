import Link from 'next/link';
import React from 'react';
import Container from '@/components/containerClass';

// React icons
import { FaPenToSquare } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


const Header = () => {
  const navElements = [
    { id: 1, name: 'Stories', link: '/stories' },
    { id: 2, name: 'Creator', link: '/creator' },
    { id: 3, name: 'Community', link: '/community' },
    { id: 4, name: 'Subscribe', link: '/subscribe' },
  ];

  return (
    <Container>
    <section className='flex flex-row pt-10  justify-between '>

      <div className='flex flex-row items-center'>
      <Link href={"/"}> 
      <h1 className='text-[20px] text-red-500 font-bold hover:text-black'>Brief</h1>
      </Link>
      <div className='border border-black h-4 mx-8'></div>
      <ul className='flex flex-row gap-8 font-bold '>
        {
          navElements && navElements.map((element) => {
            return (
              <Link href={element.link}>
              <li className='hover:text-red-500' key={element.id}>
                {element.name}
              </li>
              </Link>
            );
          })
        }
      </ul>
      </div>


      <div className='flex flex-row items-center gap-10'>

        <div className='flex gap-1 items-center'>
       <FaPenToSquare />
       <p>Write</p>
       </div>

       <div className='flex gap-7 items-center'>
      <FaBookmark />
      <FaBell />
      <CgProfile className='w-10 h-10' />
      </div>

      </div>

    </section>
    </Container>
  );
};

export default Header;

