import React from 'react';
import { useAgeGroup } from './AgeGroupContext';

function DeleteAgeGroupPriceItem({ id }) {
  const { deleteListItem } = useAgeGroup();

  return <div onClick={() => deleteListItem(id)}>刪除</div>;
}

export default DeleteAgeGroupPriceItem;
