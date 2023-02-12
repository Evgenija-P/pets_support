import CategoryRadioInput from '../CategoryRadioInput';

import * as styled from './NoticeCategories.styled';

const NoticeCategories = ({ categories, btnLabels }) => {
  const BTN_LABELS = ['lost/found', 'in good hands', 'sell'];

  return (
    <styled.CategoryList>
      {categories.map((category, idx) => (
        <styled.CategoryItem key={category}>
          <CategoryRadioInput
            label={BTN_LABELS[idx]}
            name="categoryName"
            value={category}
            id={category}
          />
        </styled.CategoryItem>
      ))}
    </styled.CategoryList>
  );
};

export default NoticeCategories;
