import { useState } from 'react';
import FriendsWorkDays from '../FriendsWorkDays/FriendsWorkDays';
import {
  FriendsWrapperAbout,
  FriendsAboutList,
  FriendsAboutItem,
} from './FriendsAbout.sryled';

const FriendsAbout = ({ item }) => {
  const [onOpen, setOnOpen] = useState(false);

  return (
    <FriendsWrapperAbout>
      <FriendsAboutList>
        <FriendsAboutItem
          onClick={() => {
            setOnOpen(true);
          }}
          onMouseLeave={() => {
            setOnOpen(false);
          }}
        >
          {item.workDays === undefined || item.workDays === null ? (
            <>
              <p>Time: </p>
              <p>------------</p>
            </>
          ) : (
            <>
              {item.workDays[0] && item.workDays[0].isOpen ? (
                <>
                  <p>Time:</p>
                  <p>
                    {item.workDays[0].from}-{item.workDays[0].to}
                  </p>
                </>
              ) : (
                <>
                  <p>Time:</p>
                  <p>Closed</p>
                </>
              )}
              {!onOpen || <FriendsWorkDays workDays={item.workDays} />}
            </>
          )}
        </FriendsAboutItem>

        <FriendsAboutItem>
          Address: <p>{item.adress}</p>
        </FriendsAboutItem>
        <FriendsAboutItem>
          Email: <p> {item.email}</p>
        </FriendsAboutItem>
        <FriendsAboutItem>
          Phone: <p>{item.phone}</p>
        </FriendsAboutItem>
      </FriendsAboutList>
    </FriendsWrapperAbout>
  );
};

export default FriendsAbout;
