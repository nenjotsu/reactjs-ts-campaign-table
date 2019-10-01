import * as React from 'react';
import message from 'antd/lib/message';
import isEmpty from 'lodash/isEmpty';
import Input from 'antd/lib/input';

const { Search } = Input;

const Complete: React.SFC<{ onSearch: Function }> = ({ onSearch }) => {
  function handleSearch(value: string) {
    if (isEmpty(value)) {
      message.error('Please provide keyword');
      return;
    }
    if (typeof value === 'string' && !isNaN(parseInt(value, 10))) {
      message.error('Please provide text');
      return;
    }
    onSearch(value);
  }

  return (
    <Search
      placeholder="Search name..."
      onSearch={value => handleSearch(value)}
      size="large"
      enterButton
    />
  );
};

export default Complete;
