import Search from "../page/Search";
import '../../component/css/Home.css'
import Listbook from "../page/Listbook";
import Addbook from "../page/Addbook";

function Home() {
    return(
        <div className="from">
            <div className="search">
                <Search />
            </div>
            <div className="Listbook">
                <Listbook/>
            </div>
            <div className="Addbook">
                <Addbook/>
            </div>
        </div>
    );
}
export default Home;