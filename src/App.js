import './App.css';
import Box from './component/Box';
import { useState } from 'react';


// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보인다.
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3 4의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패결과에 따라 테두리 색이 바뀐다. (이기면-초록, 지면-빨강, 비기면-검정색)

const choice = {
  rock:{
    name:"Rock",
    img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg",
  },
  scissor:{
    name:"Scissor",
    img:"https://www.ikea.com/us/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s"
  },
  paper:{
    name:"Paper",
    img:"https://m.media-amazon.com/images/I/61OorFhm6SL._AC_SX466_.jpg",
  },
};

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement=(user, computer)=>{
    console.log("user", user, "computer", computer);

    if(user.name === computer.name) {
      return "TIE"
    } else if(user.name === "Rock") 
        return computer.name === "Scissor" ? "WIN":"LOSE";
      else if(user.name === "Scissor")
        return computer.name === "Paper" ? "WIN":"LOSE";
      else if(user.name === "Paper")
        return computer.name === "Rock" ? "WIN":"LOSE";
  };

  const randomChoice=()=>{
    let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 배열로 만들어준다.
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random", randomItem);
    let final = itemArray[randomItem];
    console.log("final", final);
    return choice[final];
  };
  return (
    <div>
        <div className="main">
          <Box title="You" item={userSelect} result={result}/>
          <Box title="Computer" item={computerSelect} result={result}/>
        </div>

        <div className="main">
          <img className="img-style" src="https://cdn3.iconfinder.com/data/icons/text/100/scissor_1-512.png" onClick={()=>play("scissor")}/>
          <img className="img-style" src="https://img.icons8.com/emoji/256/rock-emoji.png" onClick={()=>play("rock")}/>
          <img className="img-style"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7t3PKvNlCjWl1XgETTQ4wefKPnN8gVwylA&usqp=CAU" onClick={()=>play("paper")}/>
        </div>
    </div>
  );
}

export default App;
