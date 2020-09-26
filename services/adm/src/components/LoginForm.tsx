import React, {useState} from 'react';
import {Layout, Forms, Buttons, isRequired} from 'reacy-ui';

const fields = [
  {type: 'string', name: 'login', placeholder: 'Login or e-mail or phone number', },
  {type: 'password', name: 'password', placeholder: 'Password'},
  {type: 'checkbox', name: 'agreement', title: 'I agree with terms of agreement', value: true}
];

const validators = {
  login: [isRequired],
  password: [isRequired],
  agreement: [isRequired]
};


export const LoginForm: React.FC<{}> = () => {
  const [data, setData] = useState({
    login: '',
    password: '',
    agreement: false
  });
  return (
    <Layout.Panel>
      <Forms.Form
        fields={fields}
        validators={validators}
        onChange={newData => setData({...data, ...newData})}
        buttons={[<Buttons.Button>Log in</Buttons.Button>]}
      />
    </Layout.Panel>
  );
}
