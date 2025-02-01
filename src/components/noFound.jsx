import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router';

const AppNoFound = () => (
  <Result style={{
    marginTop: '60px',
  }}
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
   <Link to={'/'}><Button type="primary">Go to Login Page</Button></Link>
}
  />
);
export default AppNoFound;