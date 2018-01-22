import { Footer } from './Footer';
import { Header } from './Header';
import { GoodsList } from './GoodsList';

export const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <GoodsList />
      </main>
      <Footer />
    </React.Fragment>
  )
};
