import React from "react";
import "./Register.css";
import { Form, Input, Button, Image } from "antd";

import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

function Register(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(localStorage)
  };

  return (
    <div className="register-container">
      <Image
        className="logo"
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <div className="container-form-register">
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item>
            <div className="register-label">
              <span>Đăng Ký</span>
            </div>
          </Form.Item>
          <Form.Item name="Email" rules={[]}>
            <div className="register-input">
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </div>
          </Form.Item>
          <Form.Item name="Fullname" rules={[]}>
            <div className="register-input">
              <Input prefix={<UserOutlined />} placeholder="Họ và tên" />
            </div>
          </Form.Item>
          <Form.Item name="Mật khẩu" rules={[]}>
            <div className="register-input">
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Mật khẩu"
              />
            </div>
          </Form.Item>
          <Form.Item name="Xác nhận mật khẩu" rules={[]}>
            <div className="register-input">
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Xác nhận mật khẩu"
              />
            </div>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Đăng ký
            </Button>
          </Form.Item>
          <Form.Item>
            <p>
              Đã tài khoản?<a href="/login"> Đăng nhập ngay</a>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
