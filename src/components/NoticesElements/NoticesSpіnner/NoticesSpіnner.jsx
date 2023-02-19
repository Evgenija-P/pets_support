import PropagateLoader from 'react-spinners/PropagateLoader';
import { Wrapper } from './NoticesSpinner.styled';
import { colors } from '../../../styles/stylesLayout';
import { useSelector } from 'react-redux';
import { selectNoticesObj } from '../../../redux/notices/selectors';
const NoticesSpinner = () => {
  const { isLoading } = useSelector(selectNoticesObj);
  return (
    <Wrapper>{isLoading && <PropagateLoader color={colors.accent} />}</Wrapper>
  );
};
export default NoticesSpinner;
