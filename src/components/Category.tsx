import React from 'react';
import Filter from './Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

type FilterData = {
  title: string;
  options: { value: string; label: string }[];
};

const filters: FilterData[] = [
  {
    title: 'Categoria',
    options: [
      { value: 'option1', label: 'Opción 1' },
      { value: 'option2', label: 'Opción 2' },
      { value: 'option3', label: 'Opción 3' },
    ],
  },
  {
    title: 'Sub Categoria',
    options: [
      { value: 'subOption1', label: 'Sub Opción 1' },
      { value: 'subOption2', label: 'Sub Opción 2' },
      { value: 'subOption3', label: 'Sub Opción 3' },
    ],
  },
  {
    title: 'Marca',
    options: [
      { value: 'brand1', label: 'Marca 1' },
      { value: 'brand2', label: 'Marca 2' },
      { value: 'brand3', label: 'Marca 3' },
    ],
  },
  {
    title: 'Condicion',
    options: [
      { value: 'condition1', label: 'Condition 1' },
      { value: 'condition2', label: 'Condition 2' },
      { value: 'condition3', label: 'Condition 3' },
    ],
  },
  {
    title: 'Precios',
    options: [
      { value: 'price1', label: 'Price 1' },
      { value: 'price2', label: 'Price 2' },
      { value: 'price3', label: 'Price 3' },
    ],
  },

  
];

const Category: React.FC = () => {
  return (
    <div className="border border-gray-200 p-4 flex space-x-4 bg-white ml-auto mt-6 mr-auto rounded-xl" style={{ width: "70%" }} >
      {filters.map((filter, index) => (
        <Filter key={index} title={filter.title} options={filter.options} />
      ))}
      <span className="text-xs  mb-2">More</span>
      <FontAwesomeIcon icon={faFilter} className="text-xs" />
    </div>

  );
};

  
export default Category;
