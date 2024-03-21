import { FaStar } from "react-icons/fa";
function Listbook() {
    return(
        <>
        <h3>A List Of Book</h3>
        <div className="book">
            <div>Life Of Pi</div>
            <div className="textau">Davan</div>
        </div>
        <div className="book">
            <div><FaStar /> Học Code Today</div>
            <div className="textau">Fpt</div>
        </div>
        <div className="book">
            <div><FaStar /> Learn Angular By example</div>
            <div className="textau">FPT-Aptech</div>
        </div>
        <div className="book">
            <div>Họ Nhà Trai</div>
            <div className="textau">Nguyễn Anh Tú</div>
        </div>
        <div className="book">
            <div><FaStar /> Đôi Mắt Có Lửa</div>
            <div className="textau">Nguyễn Hùng Sơn</div>
        </div>
        <select class="form-select" aria-label="Default select example">
            <option selected>Author Ascending</option>
            <option value="1">Life Of Pi</option>
            <option value="3">Learn Angular By Example</option>
            <option value="2">Học Code Today</option>
            <option value="3">Họ Nhà Trai</option>
            <option value="3">Đôi Mắt có Lửa</option>
        </select>
        </>
    );
}
export default Listbook;