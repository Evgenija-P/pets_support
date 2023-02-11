import { Helmet } from 'react-helmet';
import Home from '../components/Home';

import PetsUserList from '../components/PetsUserList';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Home />

      <PetsUserList />
    </div>
  );
};
export default HomePage;
