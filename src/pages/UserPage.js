import { Helmet } from 'react-helmet';

import UserPets from '../components/PetsElements/UserPets';

const UserPage = () => {
  return (
    <div>
      <Helmet>
        <title>UserPage</title>
      </Helmet>

      <UserPets />
    </div>
  );
};

export default UserPage;
