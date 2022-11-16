/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Navbar from '@/components/UI/Navbar';
import Results from '@/components/UI/Results';

import requests from '@/utils/requests';

const HomePage = ({ results }: { results: any }) => {
  return (
    <Layout>
      <Seo />

      <Header />
      <Navbar />
      <Results results={results} />
    </Layout>
  );
};

export default HomePage;

export const getServerSideProps = async (context: any) => {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests.find((r) => r.link === genre)?.url || requests[0].url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
};
