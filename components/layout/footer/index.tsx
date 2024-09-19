import React from 'react'
import Link from 'next/link';
import Container from '@/components/containerClass';

const Footer = () => {

    const footerElements = [
        { id: 1, name: 'About Us', link: '/about' },
        { id: 2, name: 'Terms & Conditions', link: '/terms' },
        { id: 3, name: 'Privacy Policy', link: '/policy' },
        { id: 4, name: 'Delivery Details', link: '/delivery' },
        { id: 5, name: 'Customer Support', link: '/support' },
      ];

  return (
    <Container>
        <section className='flex flex-row pt-10 mt-40  justify-between '>

<div className='flex flex-row items-center'>

<ul className='flex flex-row gap-8 font-bold '>
  {
    footerElements && footerElements.map((element) => {
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

</section>
    </Container>
  )
}

export default Footer
