import {React} from "react";

const Item = ({ dummyList }) => {
    console.log(dummyList)
    return (
        <div>
            <h2>
                {dummyList.length}개의 데이터
            </h2>
            <div>
                {dummyList.map((it) => (<div></div>))}
            </div>
        </div>
    );
}

export default Item
