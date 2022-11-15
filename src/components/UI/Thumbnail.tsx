import { ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/legacy/image';
import React from 'react';

const Thumbnail = ({ result }: { result: any }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div className='group transform cursor-pointer p-2 transition duration-200 ease-in hover:z-50 sm:hover:scale-105'>
      <Image
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        alt={result}
        layout='responsive'
        height={1080}
        width={1920}
      />
      <div className='p-2'>
        <p className='max-w-md truncate'>{result.overview}</p>
        <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
          {result.title || result.original_name}
        </h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
          {result.media_type && `${result.media_type} •`}{' '}
          {result.release_date || result.first_air_date} •{' '}
          <ThumbUpIcon className='mx-2 h-5' /> {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
