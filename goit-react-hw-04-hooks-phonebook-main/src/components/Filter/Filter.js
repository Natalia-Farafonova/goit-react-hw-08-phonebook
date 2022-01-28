import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
