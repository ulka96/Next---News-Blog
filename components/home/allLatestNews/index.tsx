import React from 'react';
import Container from '@/components/containerClass';
import { ILatestNews } from '@/types/type';
import SingleNews from '../singleNews';

interface IProps {
  latestNews: ILatestNews[];
}

const AllLatestNews = ({ latestNews }: IProps) => {
  console.log(latestNews);
  
  return (
    <Container>
      <div>
      <h1 className='text-[30px] font-bold my-10'>Latest News</h1>
    <section className='grid grid-cols-4 gap-16'>
       
        {latestNews && latestNews.map((news) => <SingleNews news={news}/>

  
        )}
    
    </section>
    </div>
    </Container>
  );
};

export default AllLatestNews;
