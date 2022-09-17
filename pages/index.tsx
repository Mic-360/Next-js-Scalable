import { NextPageWithLayout } from './page';
import PrimaryLayout from '../components/templates/layouts/primary/PrimaryLayout';
import SearchTemplate from '../components/templates/utility/search/SearchTemplate';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();
  return (
    <section className="flex flex-col items-center gap-y-5 mt-10 sm:mt-30">
      {/* logo */}
      <Image src="/GLogo.png" alt="logo" width={300} height={100} />
      <SearchTemplate sampleTextProp={'Search Google'} />
      {/* Toggle */}
      <p>
        Google offered in:{' '}
        <Link href="/" locale={locale === 'en' ? 'fr' : 'en'}>
          <a className="underline text-blue-600"> Françias</a>
        </Link>
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
