import React from 'react';
import WithDva from '../../utils/store';

const CreatorPage = props => {
  return (
    <div>
      <h2>Survey Creator - create a new survey</h2>
    </div>
  );
};
export default WithDva(state => {
  return { global: state.global };
})(CreatorPage);
