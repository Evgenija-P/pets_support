import { useState } from 'react';
import FriendsWorkDays from '../FriendsWorkDays/FriendsWorkDays';
import { FriendsWrapperAbout, Active, AboutItem } from './FriendsAbout.styled';

const FriendsAbout = ({ item }) => {
  const { phone, email, workDays, address, addressUrl } = item;
  const [onOpen, setOnOpen] = useState(false);
  const telNumber = 'tel:' + phone;
  const emailAdres = `mailto:` + email;

  return (
    <FriendsWrapperAbout>
      <ul>
        <AboutItem
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
              <p>Інформація відсутня</p>
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
        </AboutItem>
        <AboutItem>
          {address === undefined || address === null ? (
            <>
              <p>Addres: </p>
              <p>Інформація відсутня</p>
            </>
          ) : (
            <Active>
              <p>Addres: </p>
              <a href={addressUrl} target="_blank" rel="noreferrer">
                {address}
              </a>
            </Active>
          )}
        </AboutItem>
        <AboutItem>
          {email === undefined || email === null ? (
            <>
              <p>Email: </p>
              <p>Інформація відсутня</p>
            </>
          ) : (
            <Active>
              <p>Email: </p>
              <a href={emailAdres}>{email}</a>
            </Active>
          )}
        </AboutItem>
        <AboutItem>
          {phone === undefined || phone === null ? (
            <>
              <p>Phone: </p>
              <p>Інформація відсутня</p>
            </>
          ) : (
            <Active>
              <p>Phone: </p>
              <a href={telNumber}>{phone}</a>
            </Active>
          )}
        </AboutItem>
      </ul>
    </FriendsWrapperAbout>
  );
};

export default FriendsAbout;
