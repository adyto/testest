import React from 'react';
import { useStateContext } from '../../context/StateContext';
import {
  ChangeIMG,
  EmployeeIMG,
  HeartIMG,
  LeaveIMG,
  LockIMG,
  RenewalIMG,
  SettingIMG,
  TimeIMG,
} from '../../assets/images/img';
import Navbar from '../Navbar';
import { Link, NavLink } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Leave = () => {
  const { sideBar, toggleSideBar } = useStateContext();
  console.log(sideBar);
  const menuItem = [
    {
      href: '/leave',
      icon: LeaveIMG,
      name: 'Leave',
    },
    {
      href: '/time-correction',
      icon: TimeIMG,
      name: 'Time Correction',
    },
    {
      href: '/medical',
      icon: HeartIMG,
      name: 'Medical',
    },
    {
      href: '/change-status',
      icon: ChangeIMG,
      name: 'Change Status',
    },
    {
      href: '/renewal-contract',
      icon: RenewalIMG,
      name: 'Renewal Contract',
    },
    {
      href: '/general-request',
      icon: SettingIMG,
      name: 'General Request',
    },
    {
      href: '/employee-data',
      icon: EmployeeIMG,
      name: 'Employee Data',
    },
    {
      href: '/payslip',
      icon: LockIMG,
      name: 'Payslip',
    },
  ];
  return (
    <div className="relative">
      {sideBar && (
        <div className="absolute inset-0 z-10 items-center h-screen text-white w-72 xl:pt-32 xl:pl-10 bg-color-palette-1">
          <div className="flex flex-col gap-4">
            {menuItem.map((item) => (
              <NavLink to={item.href}>
                {({ isActive }) => (
                  <>
                    {item.href === '/medical' ? (
                      <div className="flex flex-row items-center space-x-4">
                        <img src={item.icon} />
                        <div className="flex flex-row justify-between w-44">
                          <p>{item.name}</p>
                          <p>drop</p>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={
                          isActive
                            ? 'flex flex-row items-center gap-4 text-color-palette-1 rounded-l-lg py-4 px-2 bg-white'
                            : 'flex flex-row items-center px-2 gap-4 '
                        }
                      >
                        <img src={item.icon} className="w-6" />
                        <p>{item.name}</p>
                      </div>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
          <div className="pt-16 text-center">
            <LeftOutlined onClick={toggleSideBar} />
          </div>
        </div>
      )}
      <Navbar />
      <div className="container flex flex-row w-full mx-auto">
        <div className="flex flex-row items-center justify-between w-full pt-8">
          <h1 className="uppercase font-Elephant">Leave Request</h1>
          <div className="flex flex-row gap-4">
            <Button>
              <Link to={'/'}>Back</Link>
            </Button>
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leave;
