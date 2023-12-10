import { useDispatch, useSelector } from 'react-redux';
import FilterStyled, { Label } from './Filter.styled';

import { setFilter } from 'redux/filterSlice';
import { selectContactFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectContactFilter);

  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterStyled>
      <Label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          required
          onChange={handleChange}
        />
      </Label>
    </FilterStyled>
  );
};
