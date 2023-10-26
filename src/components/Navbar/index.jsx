import React from 'react';
import { useStateContext } from '../../context/StateContext';
import { BreadcrumbIMG, Logo, RingIMG, avatar } from '../../assets/images/img';
import AuthService from '../../services/AuthService';

const Navbar = () => {
  const { toggleSideBar } = useStateContext();
  const logOut = () => {
    console.log('11');
    AuthService.logout();
  };
  return (
    <div className="container flex flex-row justify-between mx-auto xl:py-3">
      <div className="flex flex-row items-center gap-9">
        <div className="flex flex-row items-center gap-5">
          <img src={BreadcrumbIMG} onClick={toggleSideBar} />
          <img src={Logo} className="xl:h-12" />
        </div>
        <p className="text-color-palette-1">EMPLOYEE SELF SERVICE</p>
      </div>
      <div className="flex flex-row items-center gap-9">
        <p>
          ESS Version<span className="ml-1 font-bold font-Raleway">1.0</span>
        </p>
        <div className="flex flex-row items-center space-x-4">
          <img src={RingIMG} onClick={logOut} />
          <img src={avatar} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
