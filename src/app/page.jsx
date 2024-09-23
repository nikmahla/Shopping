



import CategoryPage from './components/category/page';
import ResponsiveMenu from'./components/header/page'
import HeaderMain from './components/headerMain/page';
import MainBoxes from './components/mainBoxes/page';
// import AddData from './components/addData/page';
import Basket from './components/basket/page';
import Crousel from './components/crousel/page';
import Gallery from './components/gallery/page';
import Baner from './components/baner/page';
import Logos from './components/logos/page';
import Footer from './components/footer/page';
import Comments from './components/comments/page';
export default function Home() {
  return (
   <>
   <ResponsiveMenu />
   <HeaderMain />
   <CategoryPage />
   <Logos />
   <MainBoxes />
   {/* <AddData /> */}
   <Basket />
   <Gallery />
   <Crousel />
   <Baner />
   <Comments />
    <Footer />
   </>
  );
}
