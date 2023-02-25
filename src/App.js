import './App.css';
import Card from "./card.jsx";
function App() {
  return (
<div className='contact_container'>
    <h1>My Contact</h1>
    <Card name="Beyonce" mob="+918532311523" emailid="thakurgaurav273@gmail.com" src="https://thumbs.dreamstime.com/b/cute-little-girl-posing-22152447.jpg"/>
    <br/>
    <Card name="Janmejay" mob="+91985622114" emailid="jjanmejay@gmail.com" src="https://wallpapercave.com/wp/wp2525371.jpg"/>
    <br/>
    <Card name="Sohan" mob="+917365256215" emailid="abc5612@gmail.com" src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-HD-Cute-Baby-Boy-Images.jpg"/>
    <br/>
    <Card name="Jessica" mob="+919852030220" emailid="jessica@gmail.com" src="https://th.bing.com/th/id/OIP.65Q-3_-rz8UXq0wyqW0AfAHaGw?pid=ImgDet&rs=1"/>
    <br/>

</div>
  );
}

export default App;
