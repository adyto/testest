import React, { useState } from 'react';
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
import { Button, DatePicker, Input, Select, Modal } from 'antd';

const Leave = () => {
  const { sideBar, toggleSideBar } = useStateContext();
  const [chooseApprover, setChooseApprover] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [absentType, setAbsentType] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [Remark, setRemark] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalOpenSuccess, setIsModalOpenSuccess] = useState(false);
  console.log(dateStart);
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
  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  console.log(Remark);
  const handleFormSubmit = () => {
    console.log('submit');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalOpen(false);
      setIsModalOpenSuccess(true);
    }, 3000);
  };
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
      <div className="container flex flex-col w-full mx-auto">
        <div className="flex flex-row items-center justify-between w-full pt-8">
          <h1 className="uppercase font-Elephant">Leave Request</h1>
          <div className="flex flex-row gap-4">
            <Button>
              <Link to={'/'}>Back</Link>
            </Button>
            <Button onClick={() => setIsModalOpen(true)}>Submit</Button>
          </div>
        </div>
        <Select
          className="max-w-xs my-6 "
          showSearch
          placeholder="Choose Approver"
          optionFilterProp="children"
          onChange={(value) => setChooseApprover(value)}
          filterOption={filterOption}
          options={[
            {
              value: 'jack',
              label: 'Jack',
            },
            {
              value: 'lucy',
              label: 'Lucy',
            },
            {
              value: 'tom',
              label: 'Tom',
            },
          ]}
        />
        <div className="flex flex-row justify-between font-Bookman">
          <div className="flex flex-col gap-6 px-5 py-4 border rounded-lg">
            <div className="flex flex-col gap-4">
              <p className="font-bold">Leave Type</p>
              <Select
                className=" w-96"
                showSearch
                placeholder="Choose"
                optionFilterProp="children"
                onChange={(value) => setLeaveType(value)}
                filterOption={filterOption}
                options={[
                  {
                    value: 'cuti-khusus',
                    label: 'Cuti Khusus',
                  },
                  {
                    value: 'cuti-tahunan',
                    label: 'Cuti Tahunan',
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Absent Type</p>
              <Select
                className=" w-96"
                showSearch
                placeholder="Choose"
                optionFilterProp="children"
                onChange={(value) => setAbsentType(value)}
                filterOption={filterOption}
                options={[
                  {
                    value: 'cuti-menikah',
                    label: 'Cuti Menikah',
                  },
                  {
                    value: 'cuti-Liburan',
                    label: 'Cuti Liburan',
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Date</p>
              <div className="flex flex-row justify-between">
                <DatePicker
                  onChange={(date) => setDateStart(date)}
                  placeholder="start date"
                />
                <DatePicker
                  onChange={(date) => setDateEnd(date)}
                  placeholder="end date"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Remark</p>
              <Input.TextArea
                rows={4}
                onChange={(e) => setRemark(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col max-w-xl gap-6 px-5 py-4 font-bold border rounded-lg">
            <p>Leave Balance</p>
            <div className="flex flex-col gap-8">
              <div className="flex flex-row space-x-36">
                <div className="flex flex-col font-bold">
                  <p>Cuti Tahunan</p>
                  <p>2023 - 2023</p>
                </div>
                <div className="flex flex-col font-bold">
                  <p>12 Used</p>
                  <p>6 remaining</p>
                </div>
              </div>
              <div className="flex flex-row space-x-36">
                <div className="flex flex-col font-bold">
                  <p>Cuti Tahunan</p>
                  <p>2023 - 2023</p>
                </div>
                <div className="flex flex-col font-bold">
                  <p>12 Used</p>
                  <p>6 remaining</p>
                </div>
              </div>
              <div className="flex flex-row space-x-36">
                <div className="flex flex-col font-bold">
                  <p>Cuti Tahunan</p>
                  <p>2023 - 2023</p>
                </div>
                <div className="flex flex-col font-bold">
                  <p>12 Used</p>
                  <p>6 remaining</p>
                </div>
              </div>
            </div>
            <p className="mt-6">
              Next Public Holiday
              <span className="block pt-3">25 Desember 2023</span>
            </p>
          </div>
        </div>
        <Modal
          title="Submit Form"
          open={isModalOpen}
          //   onOk={handleFormSubmit}
          onCancel={() => setIsModalOpen(false)}
          footer={[
            <Button
              key="back"
              className="text-red-500 bg-white border-red-500"
              onClick={() => setIsModalOpen(false)}
            >
              Yes, I will check agian
            </Button>,
            <Button
              key="submit"
              //   type="primary"
              className="text-white bg-color-palette-1"
              loading={loading}
              onClick={handleFormSubmit}
            >
              Submit
            </Button>,
          ]}
        >
          <p>Are you sure want to submit request?</p>
          <p>please check your data again</p>
        </Modal>
        <Modal
          title="Submit Form Success"
          open={isModalOpenSuccess}
          //   onOk={handleFormSubmit}
          onCancel={() => setIsModalOpenSuccess(false)}
          footer={[
            <Button
              key="back"
              className="text-white bg-color-palette-1"
              onClick={() => setIsModalOpenSuccess(false)}
            >
              Close
            </Button>,
          ]}
        >
          <p>Your request has been submitted</p>
          <p>to your approver</p>
        </Modal>
      </div>
    </div>
  );
};

export default Leave;
