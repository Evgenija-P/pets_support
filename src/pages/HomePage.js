import { Helmet } from 'react-helmet';
import Home from '../components/Home'

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Home />
    </div>
  );
};
export default HomePage;
