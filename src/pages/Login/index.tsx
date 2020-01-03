import React, { FC, useState, useEffect } from "react";
import api from "../../services/api";
import history from "../history";

import { Form, Icon, Input, Button, notification } from "antd";
import { Container } from "./styles";

const Login: FC = (props: any) => {
  const [token, setToken] = useState<string>("");

  const requestSessionToken = async () => {
    const {
      data: {
        data: { access_key }
      }
    } = await api.post("auth/session-request", {
      system_api_key: localStorage.getItem("key")
    });
    setToken(access_key);
  };

  const registerSession = async (values: {
    email: string;
    password: string;
  }) => {
    const {
      data: {
        data: { access_key }
      }
    } = await api.post(
      "auth/session-register",
      {
        organization_user: {
          email: values.email,
          password: values.password
        }
      },
      {
        headers: {
          Authorization: "Bearer " + token
        }
      }
    );
    localStorage.setItem("token", access_key);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    props.form.validateFields(
      async (err: [], values: { email: string; password: string }) => {
        if (!err) {
          try {
            await registerSession(values);
            history.push("home");
          } catch (err) {
            showNotification();
          }
        }
      }
    );
  };

  const tokenExists = () => {
    const token = !!localStorage.getItem("token");

    return token ? history.push("/home") : history.push("/");
  };

  useEffect(() => {
    tokenExists();
    localStorage.setItem("key", "505763d6-4202-4b05-9efc-93b366939bcf");
    requestSessionToken();
  }, []);

  const showNotification = () => {
    notification["error"]({
      message: "ERROR!!!",
      description: "Please check your email or password are correct."
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <Container>
      <section>
        <h1>
          Welcome to <span>adopets </span>
        </h1>
        <Form data-testid={"form-submit"} onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Please input your email!" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="E-mail"
                data-testid={"input-email"}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
                data-testid={"input-password"}
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button btn"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </section>
    </Container>
  );
};

export default Form.create()(Login);
