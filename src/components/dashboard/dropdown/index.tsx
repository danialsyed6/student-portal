import React, { useEffect, useRef, useState } from 'react';

import more from '../../../assets/more.svg';
import './style.css';

interface IProps {}

const Dropdown = (p: IProps) => {
  const [open, setOpen] = useState(false);
  // const dropdownRef = useRef<LegacyRef<HTMLDivElement>>();
  const dropdownRef = useRef<any>();

  useEffect(() => {
    const listener = (e: any) => {
      if (!dropdownRef?.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, []);

  return (
    <div className="pointer" onClick={() => setOpen(!open)} ref={dropdownRef}>
      <img src={more} alt="more" style={{ zIndex: 0 }} />

      <div
        className={`dropdown-menu ${open ? 'active' : 'inactive'}`}
        onClick={e => e.stopPropagation()}
      >
        <ul>
          <li className="dropdownItem">
            <span>Add</span>
          </li>
          <li className="dropdownItem">
            <span>Edit</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
