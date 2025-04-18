import React from 'react';
import Container from '@/components/containerClass';
import { ILatestNews } from '@/types/type';
import Link from 'next/link';
import SingleNews from '../singleNews';

interface IProps {
  latestNews: ILatestNews[];
}

const LatestNews = ({ latestNews }: IProps) => {
  console.log(latestNews);
  
  return (
    <Container>
      <div>
      <div className='flex flex-row justify-between items-center'>
      <h1 className='text-[30px] font-bold my-10'>Latest News</h1>
      <Link href="/latestNews"><div><button className='mr-2 font-bold text-red-500 my-auto'>See All</button></div></Link>

      </div>
    <section className='grid grid-cols-4 gap-16'>
       
        {latestNews && latestNews.slice(0, 4).map((news) => <SingleNews news={news}/>

  
        )}
    
    </section>
    </div>
    </Container>
  );
};

export default LatestNews;
