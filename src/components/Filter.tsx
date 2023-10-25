import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type Option = {
  value: string;
  label: string;
};

type FilterProps = {
  title: string;
  options: Option[];
};

const Filter: React.FC<FilterProps> = ({ title, options }) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs mb-2">{title}</span>
      <select
        className="border p-2 rounded appearance-none focus:outline-none focus:shadow-outline w-full text-xs"
        name={title}
        id={title}
        style={{ width: '150px' }}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};



export default Filter;
