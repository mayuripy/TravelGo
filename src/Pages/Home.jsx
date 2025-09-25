import Cards from "../Components/Card";
import Offers from "../Components/Offers";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";


export default function Home(){
  return(
    <>
      <Navbar />
      <SearchBar />
      <Cards />
      <Offers />
      <Footer />
    
    </>
  )

}