import { NextPageWithLayout } from './page';
import PrimaryLayout from '../components/templates/layouts/primary/PrimaryLayout';
import SearchTemplate from '../components/templates/utility/search/SearchTemplate';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      {/* logo */}
      <SearchTemplate sampleTextProp={'Search Google'} />
      {/* Toggle */}
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
