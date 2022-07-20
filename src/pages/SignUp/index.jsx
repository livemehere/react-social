import React from 'react';
import { Button, Form, Input } from 'antd';

const SignUp = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  return (
    <div style={{ padding: '2em' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>콩스타그램</h1>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="이름" name="name" rules={[{ required: true, message: '이름을 입력해주세요' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="이메일" name="email" rules={[{ required: true, message: '이메일을 입력해주세요' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="비밀번호" name="password" rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="비밀번호 확인"
          name="password-check"
          rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item style={{ justifyContent: 'center' }}>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SignUp;
