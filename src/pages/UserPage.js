import { Helmet } from 'react-helmet';

import UserInformation from '../components/UserInformation/UserInformation';
import UserPets from '../components/PetsElements/UserPets';

import { UserInfoContainer } from '../components/UserElements/UserElements.styled';

const UserPage = () => {
  return (
    <div>
      <Helmet>
        <title>UserPage</title>
      </Helmet>

      <UserInfoContainer>
        <UserInformation />
        <UserPets />
      </UserInfoContainer>
    </div>
  );
};

export default UserPage;
