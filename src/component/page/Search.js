import { IoSearch } from "react-icons/io5";
function Search() {
    return(
        <>
            <button><IoSearch /></button>
            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder=""></input>
        </>
    );
}
export default Search;