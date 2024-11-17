const TitleName=["Core", "Fundamental","Harsh"];
import "./Header.css"
import logoImage from "../assets/react-core-concepts.png";
function getRandomIndex(max){
  return Math.floor(Math.random()*(max+1));
}
export default function Header(){
  const ran=TitleName[getRandomIndex(2)];
  return(
    <header>
    <img src={logoImage} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {ran} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  );
}