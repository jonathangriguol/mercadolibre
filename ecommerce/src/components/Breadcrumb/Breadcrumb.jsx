import React from 'react';
import './Breadcrumb.scss';
import { Link } from 'react-router-dom';

const dummyCategories = [
    {id: 1, label: 'Electrónica, audio y video'},
    {id: 2, label: 'iPod'},
    {id: 3, label: 'Reproductores'},
    {id: 4, label: 'iPod touch'},
    {id: 1, label: '32 Gb'},
]
const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumb">
      {dummyCategories?.map((item, index) => (
        <>
        <Link className='breadcrumb__link'>
            {item.label}
        </Link>
        {index < dummyCategories.length-1 ? <span className='breadcrumb__caret'>&rsaquo;</span>:''}
        </>
      ))}
    </div>
  );
}

export default Breadcrumb;