import { NextPageWithLayout } from './page';
import PrimaryLayout from '../components/templates/layouts/primary/PrimaryLayout';
import SearchResult from '../components/templates/utility/searchResult/SearchResult';
import { mockSearchResultProps } from '../components/templates/utility/searchResult/SearchResult.mocks';

const Results: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 pb-10 mt-10 sm:mt-30">
      <div className={`flex flex-col space-y-8`}>
        {[...new Array(6)].map((_, idx) => {
          return (
            <SearchResult key={idx} {...mockSearchResultProps.searchResult} />
          );
        })}
      </div>
    </section>
  );
};

export default Results;

Results.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
