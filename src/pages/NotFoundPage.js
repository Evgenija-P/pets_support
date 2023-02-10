import { Link } from 'react-router-dom';
import { FriendsError } from '../components/Friends/FriendsList/FriendsList.styles';

const NotFoundPage = () => {
  return (
    <FriendsError>
      Sorry, this page not found <Link to="/">Go to Home</Link>
    </FriendsError>
  );
};

export default NotFoundPage;
