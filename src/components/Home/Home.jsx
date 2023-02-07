import hpDesk from '../../img/Homepage/hp-desktop.png';
import hpFigureL from '../../img/Homepage/hp-figure-little-desktop.png';
import heart from '../../img/Homepage/heart.png';
import circle from '../../img/Homepage/circle.png';
// import hpFigureM from '../../img/Homepage/hp-figure-mobile.png';



import { ImgItem, Title, Scene, Img } from './Home.styled';

const Home = () => {
	return (
    <Scene>
      <Title>Take good care of your small pets</Title>
      <ImgItem>
        <Img src={hpDesk} alt="woman and dog" />
      </ImgItem>
      <ImgItem>
        <Img src={hpFigureL} alt="woman and dog" />
      </ImgItem>
      <ImgItem>
        <Img src={heart} alt="woman and dog" />
      </ImgItem>
      <ImgItem>
        <Img src={circle} alt="woman and dog" />
      </ImgItem>
    </Scene>
  );
};

export default Home;
