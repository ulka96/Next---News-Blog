import React from 'react';
import Container from '@/components/containerClass';
import { ILatestNews } from '@/types/type';
import Link from 'next/link';
import SingleNews from '../singleNews';

interface IProps {
  latestNews: ILatestNews[];
}

const LatestNews = ({ latestNews }: IProps) => {
  return (
    <Container>
      <h1 className='text-[30px] font-bold my-10'>Latest News</h1>
    <section className='grid grid-cols-4 gap-16'>
       
        {latestNews.map((news) => (
          <Link href={`/latestNews/${news.id}`}>

            <SingleNews news={news}/>

          </Link>
        ))}
    
    </section>
    </Container>
  );
};

export default LatestNews;
