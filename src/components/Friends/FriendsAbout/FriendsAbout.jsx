import { useState } from 'react';
import FriendsWorkDays from '../FriendsWorkDays/FriendsWorkDays';
import {
  FriendsWrapperAbout,
  FriendsAboutList,
  FriendsAboutItem,
} from './FriendsAbout.sryled';

const FriendsAbout = ({ adress, workDays, phone, email }) => {
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
          {workDays === undefined || workDays === null ? (
            <>
              <p>Time: </p>
              <p>------------</p>
            </>
          ) : (
            <>
              {workDays[0].isOpen ? (
                <>
                  <p>Time:</p>
                  <p>
                    {workDays[0].from}-{workDays[0].to}
                  </p>
                </>
              ) : (
                <>
                  <p>Time:</p>
                  <p>Closed</p>
                </>
              )}
            </>
          )}
          {!onOpen || <FriendsWorkDays workDays={workDays} />}
        </FriendsAboutItem>

        <FriendsAboutItem>
          Address: <p>{adress}</p>
        </FriendsAboutItem>
        <FriendsAboutItem>
          Email: <p> {email}</p>
        </FriendsAboutItem>
        <FriendsAboutItem>
          Phone: <p>{phone}</p>
        </FriendsAboutItem>
      </FriendsAboutList>
    </FriendsWrapperAbout>
  );
};

export default FriendsAbout;
