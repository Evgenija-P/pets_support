import {
  NoticesCategoriesListLink,
  NoticesCategoriesLink,
} from '../NoticesCategoriesNav/NoticesCategoriesNav.styled';

const NoticesAuthNav = () => {
  const [notices, setNotices] = useState([]);
  const { pathname: category } = useLocation();

  useEffect(() => {
    const fetchNotices = async () => {
      const { message: result } = await getNoticesByCategory(category);
      setNotices(result);
      try {
      } catch (error) {}
    };

    fetchNotices();
  }, [category]);

  return (
    <>
      <NoticesCategoriesListLink>
        <li>
          <NoticesCategoriesLink to="sell">Sell</NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="lost-found">
            Lost / Found
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="for-free">
            In good hands
          </NoticesCategoriesLink>
        </li>
      </NoticesCategoriesListLink>
    </>
  );
};

export default NoticesAuthNav;
