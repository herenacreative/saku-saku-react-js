import { React } from "libraries";
import { Layout, Typography, Button, Input } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined
} from '@ant-design/icons';

const { Content } = Layout;
const { Text, Title } = Typography;

const ChangePassword
  = () => {
    return (
      <>
        <Layout className="dashboard__temp">
          <Headers />
          <Layout className="sider__nav">
          <Navigation />
            <div className="main__content">
              <Content>
                <Title level={5}> Change Password </Title>
                <div style={{ width: "300px", margin: "20px 0 20px 0" }}>
                  <Text type="secondary">
                    You must enter your current password and then type your new password twice.
                  </Text>
                </div>
                <div style={{ width: "300px", margin: "20px 0 20px 0" }}>
                  <Input.Password
                    className="input__line"
                    bordered={false}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Current password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                  <Input.Password
                    className="input__line"
                    bordered={false}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="New password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                  <Input.Password
                    className="input__line"
                    bordered={false}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Repeat New password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                  <Button type="primary" block>
                    Change Password
                  </Button>
                </div>
              </Content>
            </div>

          </Layout>
          <Footers />
        </Layout>
      </>
    )
  }

export default ChangePassword