import React, {useState} from 'react';
import {Layout, Forms, Buttons, isRequired} from 'reacy-ui';

const fields = [
  {type: 'string', name: 'login', placeholder: 'Login or e-mail or phone number', },
  {type: 'password', name: 'password', placeholder: 'Password'}
];

const validators = {
  login: [isRequired],
  password: [isRequired]
};


export const LoginForm: React.FC<{}> = () => {
  const [data, setData] = useState({
    login: '',
    password: ''
  });
  return (
    <Layout.Panel>
      <Forms.Form
        fields={fields}
        validators={validators}
        onChange={newData => setData({...data, ...newData})}
        buttons={[<Buttons.Button mods={['primary']}>Log in</Buttons.Button>]}
      />
    </Layout.Panel>
  );
}
