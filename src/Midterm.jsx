import React, {useState} from "react";

//CSS 적용
const styles = {
    btn: {
        margin: 10
    }
};

function Midterm(){

    //State 설정
    //setName메서드로 name변수를 초기화하거나 할당한다.
    const [name, setName] = useState("");

    return(
        <div>
        <h1>{`당신은 어떤 과일을 좋아하나요? ${name}`}</h1>
        <button style={styles.btn} onClick={() => setName("사과")}>사과</button>
        <button style={styles.btn} onClick={() => setName("오랜지")}>오랜지</button>
        <button style={styles.btn} onClick={() => setName("바나나")}>바나나</button>
        </div>
    )
}

export default Midterm;