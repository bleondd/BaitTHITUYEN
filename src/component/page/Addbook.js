import { IoAddCircleOutline } from "react-icons/io5";
function Addbook() {
    return(
        <>
        <h3>Add a new book</h3>
        <h5>Title</h5>
        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder=""></input>
        <h5>Author</h5>
        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder=""></input>
        <div className="Win">
            <h5>Favourite: <input type="checkbox"></input></h5>
            <button className="btn btn-primary"><IoAddCircleOutline />Add</button>
        </div>
        </>
    );
}
export default Addbook;