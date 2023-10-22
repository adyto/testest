import React, { useState } from 'react';
import { Logo, loginBanner } from '../../assets/images/img';
import { Button, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log(userId);
    console.log(password);
  };
  return (
    <div className="fixed flex flex-row justify-between h-full xl:mx-14 xl:my-9">
      <div className="flex flex-col xl:w-[500px] xl:mr-48">
        <img src={Logo} className="xl:w-56" />
        <h1 className="text-5xl font-Elephant text-color-palette-1 xl:pt-14 xl:pb-16">
          EMPLOYEE SELF SERVICE
        </h1>
        <div className="flex flex-col gap-6 xl:mb-28 xl:mt-16">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-bold font-Raleway">User Id</p>
            <Input
              placeholder="your employeeid"
              onChange={(e) => setUserId(e.target.value)}
              value={userId}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xl font-bold font-Raleway">Password</p>
            <Input.Password
              placeholder="input password"
              onChange={(e) => setPassword(e.target.value)}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </div>
        </div>
        <Button
          className="text-white bg-color-palette-1"
          size="large"
          onClick={onSubmit}
        >
          Login
        </Button>
        <div className="flex flex-row items-center mx-auto space-x-2 font-Raleway xl:mt-9">
          <p className="font-light text-gray-400">ESS Version</p>
          <p className="font-bold">1.0</p>
        </div>
        <p className="pt-16 xl:pt-24">
          Powered by<span className="pl-2 font-bold">SYNERGY</span>
        </p>
      </div>
      <div className="my-auto">
        <img />
        <img src={loginBanner} className="max-w-2xl" />
      </div>
    </div>
  );
};

export default Login;
