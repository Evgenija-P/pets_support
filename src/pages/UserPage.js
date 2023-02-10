import { Helmet } from 'react-helmet';

import PetsUserList from '../components/PetsElements/PetsList';

const UserPage = () => {
  return (
    <div>
      <Helmet>
        <title>UserPage</title>
      </Helmet>

      <PetsUserList />
    </div>
  );
};

export default UserPage;
