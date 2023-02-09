import { useState } from 'react';
import FriendsWorkDays from '../FriendsWorkDays/FriendsWorkDays';
import {
  FriendsWrapperAbout,
  FriendsAboutList,
  Active,
} from './FriendsAbout.styled';

const FriendsAbout = ({ item }) => {
  const { phone, email, workDays, address, addressUrl } = item;
  const [onOpen, setOnOpen] = useState(false);
  const telNumber = 'tel:' + phone;
  const emailAdres = `mailto:` + email;

  return (
    <FriendsWrapperAbout>
      <FriendsAboutList>
        <li
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
            <Active>
              {workDays[0] && workDays[0].isOpen ? (
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
              {!onOpen || <FriendsWorkDays workDays={workDays} />}
            </Active>
          )}
        </li>

        <li>
          {address === undefined || address === null ? (
            <>
              <p>Addres: </p>
              <p>------------</p>
            </>
          ) : (
            <Active>
              <p>Addres: </p>
              <a href={addressUrl} target="_blank" rel="noreferrer">
                {address}
              </a>
            </Active>
          )}
        </li>
        <li>
          {email === undefined || email === null ? (
            <>
              <p>Email: </p>
              <p>------------</p>
            </>
          ) : (
            <Active>
              <p>Email: </p>
              <a href={emailAdres}>{email}</a>
            </Active>
          )}
        </li>
        <li>
          {phone === undefined || phone === null ? (
            <>
              <p>Phone: </p>
              <p>------------</p>
            </>
          ) : (
            <Active>
              <p>Phone: </p>
              <a href={telNumber}>{phone}</a>
            </Active>
          )}
        </li>
      </FriendsAboutList>
    </FriendsWrapperAbout>
  );
};

export default FriendsAbout;
