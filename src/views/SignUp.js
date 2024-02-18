import React from "react";
import { Button, Form, Input, Layout } from "antd";
import { Container } from "@cloudscape-design/components";
import TopNav from "../components/TopNav";
const { Header, Content } = Layout;


const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignUp = () => {
  return (
    <Layout>
      <Header>
        <TopNav />
      </Header>

      <Content>
        <div
          className="centered-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh" /* Full viewport height */,
            textAlign: "center" /* Center text if needed */,
            width: "80%",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <Container
            style={{
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 20,
              }}
              style={{
                margin: "auto",
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className="container">
                <h1>Sign Up For - Zero</h1>
              </div>

              <Form.Item
                label="Firstname"
                name="Firstname"
                rules={[
                  {
                    required: true,
                    message: "Please input your Firstname!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Lastname"
                name="Lastname"
                rules={[
                  {
                    required: true,
                    message: "Please input your Lastname!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="ConfirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Container>
        </div>
      </Content>
    </Layout>
  );
};
export default SignUp;
