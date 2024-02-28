import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Card>
        <CardImage src="../Rectangle 1.png" />
        <CardTitle>Headline</CardTitle>
        <CardInfo>
          Faucibus. Faucibus. Sit sit sapien sit <br /> tempusrisu ut. Sit
          molestie ornare in venen.
        </CardInfo>
        <CardButton1>
          <span>See more</span>
        </CardButton1>
        <CardButton2>
          <span>Save</span>
        </CardButton2>
      </Card>
    </div>
  );
}

export default App;

const Card = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  border-radius: 15px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
  background: rgb(255, 255, 255);
`;

const CardImage = styled.img.attrs((props) => ({
  src: props.src || "../erorr.png",
}))`
  position: absolute;
  width: 280px;
  height: 170px;
  left: 10px;
  right: 10px;
  top: 10px;
  bottom: 170px;
  border-radius: 10px;
`;

const CardTitle = styled.div`
  position: absolute;
  width: 70px;
  height: 19px;
  left: 20px;
  right: 210px;
  top: 200px;
  bottom: 131px;
  color: rgb(0, 0, 0);
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0%;
  text-align: left;
`;

const CardInfo = styled.p`
  position: absolute;
  width: 260px;
  height: 40px;
  left: 20px;
  right: 20px;
  top: 239px;
  bottom: 71px;
  color: rgb(171, 179, 186);
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
`;

const CardButton1 = styled.button`
  position: absolute;
  border: 0;
  width: 86px;
  height: 30px;
  left: 20px;
  right: -20px;
  top: 298px;
  bottom: -298px;
  border-radius: 5px;
  background: rgb(78, 113, 254);
  span {
    position: static;
    width: 46px;
    height: 20px;
    left: 40px;
    right: 0;
    top: 302px;
    bottom: -292px;
    color: rgb(255, 255, 255);
    font-family: Inter;
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
  }
`;

const CardButton2 = styled.button`
position: absolute;
width: 86px;
height: 30px;
left: 118px;
right: 96px;
top: 298px;
bottom: 22px;
background: transparent;
border-radius: 5px;
border-color: rgb(78, 113, 254);
span {
    position: static;
    width: 46px;
    height: 20px;
    left: 40px;
    right: 0;
    top: 302px;
    bottom: -292px;
    color: rgb(78, 113, 254);
    font-family: Inter;
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
  }

`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 32px;
  span {
    color: #e91e63;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;

const Field = styled.input.attrs((props) => ({
  placeholder: props.placeholder || "Hello, Albina",
  title: props.title || "Varina",
}))`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
`;

const Checkbox = styled.input.attrs(() => ({
  type: "checkbox",
}))``;
