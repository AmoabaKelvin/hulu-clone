import Thumbnail from '@/components/UI/Thumbnail';

type Props = {
  results: any;
};

const Results = ({ results }: Props) => {
  return (
    <div className='my-10 flex-wrap justify-center px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex'>
      {results.map((result: any) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
