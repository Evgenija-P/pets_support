import { nanoid } from 'nanoid';
import { WorkDaysList, WorkDaysItem, Worky } from './FriendsWorkDays.styled';

const FriendsWorkDays = ({ workDays }) => {
  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  if (!Array.isArray(workDays)) {
    return;
  }

  const newWeek =
    workDays &&
    workDays.map((day, index) => {
      return { day: days[index], ...day };
    });

  return (
    <WorkDaysList>
      {newWeek.map(item => (
        <WorkDaysItem key={nanoid()}>
          {item.isOpen ? (
            <Worky>
              {item.day}
              {item.from}-{item.to}
            </Worky>
          ) : (
            <Worky>{item.day} Closed</Worky>
          )}
        </WorkDaysItem>
      ))}
    </WorkDaysList>
  );
};

export default FriendsWorkDays;
