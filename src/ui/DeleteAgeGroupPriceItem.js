import React from 'react';
import { useAgeGroup } from './AgeGroupContext';
import { XMarkIcon } from '@heroicons/react/24/solid';
import './DeleteAgeGroupPriceItem.css';

function DeleteAgeGroupPriceItem({ id }) {
  const { deleteListItem } = useAgeGroup();

  return (
    <button className="delete-btn" onClick={() => deleteListItem(id)}>
      <XMarkIcon />
      <span>刪除</span>
    </button>
  );
}

export default DeleteAgeGroupPriceItem;
