import { Footer } from './Footer';
import { Header } from './Header';
import GoodsListContainer from '../containers/GoodsListContainer'

export const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <GoodsListContainer />
      </main>
      <Footer />
    </React.Fragment>
  )
};
