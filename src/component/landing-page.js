import Main from "./Body/main";
import Navbar from "./Body/Navbar";
import Footer from "./Body/footer";

const Page = () => {
    return ( 
        <div className="pageBody">
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
     );
}
 
export default Page;