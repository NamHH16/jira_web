import React from "react";
import { Button, Input, Layout } from "antd";
import { LockOutlined, MailOutlined, TwitterOutlined } from "@ant-design/icons";
import { createFromIconfontCN } from "@ant-design/icons";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { USER_SIGNIN_API } from "../redux/constant/CyberBug";
import { signinCyberbugAction } from "../redux/action/CyberBugAction";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
const { Sider, Content } = Layout;

const LoginCyberBug = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  return (
    <Layout>
      <Sider
        width={window.innerWidth / 2}
        style={{
          height: window.innerHeight,
          backgroundImage: "url(https://picsum.photos/2000)",
          backgroundSize: "100%",
        }}
      ></Sider>
      <Content>
        <form
          onSubmit={handleSubmit}
          className="container"
          style={{ height: window.innerHeight }}
        >
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
              height: window.innerHeight,
              backgroundColor: "rgb(241 242 246)",
            }}
          >
            <h3
              className="text-center"
              style={{ fontSize: 35, fontWeight: 300 }}
            >
              Login Cyberbugs
            </h3>
            <div className="d-flex mt-3">
              <Input
                onChange={handleChange}
                style={{ width: "100%", minWidth: 300 }}
                name="email"
                size="large"
                placeholder="Email"
                prefix={<MailOutlined />}
              />
            </div>
            <div className="text-danger">{errors.email}</div>

            <div className="d-flex mt-3">
              <Input
                onChange={handleChange}
                style={{ width: "100%", minWidth: 300 }}
                type="password"
                name="password"
                size="large"
                placeholder="Password"
                prefix={<LockOutlined />}
              />
            </div>
            <div className="text-danger">{errors.password}</div>
            <Button
              htmlType="submit"
              className="mt-5"
              size="large"
              style={{
                backgroundColor: "rgb(102,117,223)",
                color: "#fff",
                minWidth: 300,
              }}
            >
              Login
            </Button>
            <div className="social mt-3 d-flex flex-row">
              <Button
                style={{ backgroundColor: "rgb(59,89,152)" }}
                icon={<IconFont type="icon-facebook" />}
                type="primary"
                shape="circle"
              ></Button>
              <Button
                icon={<TwitterOutlined />}
                type="primary ml-3"
                shape="circle"
              ></Button>
            </div>
          </div>
        </form>
      </Content>
    </Layout>
  );
};

const LoginCyberBugWithFormik = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("*Email is required!")
      .email("*Email is invalid!"),
    password: Yup.string()
      .min(6, "*Password must have min 6 characters!")
      .max(32, "*Password have max 32 characters!"),
  }),

  handleSubmit: ({ email, password }, { props, setSubmitting }) => {
    props.dispatch(signinCyberbugAction(email, password));
  },

  displayName: "Login Cyberbugs",
})(LoginCyberBug);

export default connect()(LoginCyberBugWithFormik);
