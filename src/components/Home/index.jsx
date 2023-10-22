import React from 'react';
import Navbar from '../Navbar';
import {
  Avatar2,
  ChangeIMG,
  Clock,
  CopyIMG,
  EmployeeIMG,
  HeartIMG,
  LeaveIMG,
  LockIMG,
  MapsIMG,
  MessageIMG,
  PhoneIMG,
  RenewalIMG,
  SettingIMG,
  TimeIMG,
} from '../../assets/images/img';
import { LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Footer from '../Footer';
// import DetailForm from './DetailForm';
// import ContactForm from './ContactForm';
import { useStateContext } from '../../context/StateContext';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const { sideBar, toggleSideBar } = useStateContext();
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
  console.log(sideBar);
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
                      <div className="flex flex-row items-center gap-4 ">
                        <img src={item.icon} />
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
      <div className="container flex flex-row justify-between mx-auto font-Bookman xl:pt-10">
        <div className="flex flex-col">
          <h1 className="font-bold xl:text-lg xl:mb-3">Thursday, 10 October</h1>
          <h2 className="font-bold xl:text-2xl xl:pb-5">
            Nice to see you, Mamad !
          </h2>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-col border rounded-lg xl:py-3 xl:px-6">
              <div className="flex flex-row items-center space-x-4">
                <img src={Clock} />
                <p className="font-bold xl:text-2xl">
                  Absent / Time Correction
                </p>
              </div>
              <div className="flex flex-row items-center gap-3 xl:my-5">
                <p className="font-bold xl:text-4xl">10</p>
                <p>days remaining to submit</p>
              </div>
              <p>Libur Nasional : 26 Oktober</p>
              <Button
                className="text-white bg-color-palette-1 xl:mt-3"
                size="large"
              >
                Submit
              </Button>
            </div>
            <div className="flex flex-col border rounded-lg xl:py-3 xl:px-6">
              <div className="flex flex-row items-center space-x-4">
                <img src={CopyIMG} />
                <p className="font-bold xl:text-2xl">Payslip</p>
              </div>
              <div className="flex flex-col xl:py-7">
                <p>Payslip November : not available</p>
                <p>Payslip October : Available</p>
              </div>
              <Button
                className="text-white bg-color-palette-1 xl:mt-5"
                size="large"
              >
                Submit
              </Button>
            </div>
          </div>
          <h3 className="font-bold xl:text-3xl xl:mt-14 xl:mb-10">
            Personnel Data Information
          </h3>
          <h4 className="font-bold xl:text-xl xl:mb-4">
            Update my contact info
          </h4>
          <h5 className="font-bold xl:text-xl">
            Update my personnal information
          </h5>
        </div>
        <div className="flex flex-col border rounded-lg xl:py-5 xl:px-4">
          <div className="flex flex-row items-center">
            <img src={Avatar2} />
            <div className="flex flex-col space-x-5">
              <span className="block font-bold xl:text-2xl">Mamad Surjana</span>
              <span className="block xl:text-lg">000032</span>
              <span className="block xl:text-lg">HCM Dept head</span>
            </div>
          </div>
          <div className="flex flex-col xl:my-7 xl:gap-4">
            <div className="flex flex-row items-center space-x-5">
              <img src={MessageIMG} />
              <span>Mamad@totalbp.com</span>
            </div>
            <div className="flex flex-row items-center space-x-5">
              <img src={PhoneIMG} />
              <span>08xxxxxxxxx</span>
            </div>
            <div className="flex flex-row items-center space-x-5">
              <img src={MapsIMG} />
              <span>HO</span>
            </div>
          </div>
          <span className="block font-bold xl:text-2xl xl:mb-6">
            Atasan Langsung
          </span>
          <div className="flex flex-row items-center">
            <img src={Avatar2} />
            <div className="flex flex-col ">
              <span className="block font-bold xl:text-2xl">Dina Melati</span>
              <span className="block xl:text-lg">HCM Director</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
