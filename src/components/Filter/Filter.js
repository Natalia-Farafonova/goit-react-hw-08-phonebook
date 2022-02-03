import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../../redux/contacts/contacts-slicer';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <label className={s.findFild}>
      Filter contacts name
      <input
        className={s.inputFind}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

// =========================================================

// import React from 'react';

// const Filter = ({ value, onChange }) => (
//   <label>
//     <input type="text" value={value} onChange={onChange} />
//   </label>
// );

// export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
