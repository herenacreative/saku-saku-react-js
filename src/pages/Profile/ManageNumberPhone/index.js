import { React, connect, useHistory } from "libraries";
import { Layout, Typography } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss';
import { CardsText } from "components/molecules";
import { EditOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Text, Title, Paragraph } = Typography;

const ManageNumberPhone = (props) => {
  const history = useHistory()

  return (
    <>
      <Layout className="dashboard__temp">
        <Headers />
        <Layout className="sider__nav">
          <Navigation />
          <div className="main__content">
            <Content>
              <Title level={5}> Manage Phone Number </Title>
              <div style={{ width: "300px", margin: "20px 0 20px 0" }}>
                <Text type="secondary">
                  You can only delete the phone number and then you must add another phone number.
                </Text>
              </div>
              <div style={{ width: "300px", margin: "20px 0 20px 0" }}>
                <CardsText title="Primary" desc={props.auth.data.phone} count={<EditOutlined onClick={() => history.push("/add-number-phone")}/>}/>
              </div>
            </Content>
          </div>
        </Layout>
        <Footers />
      </Layout>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(ManageNumberPhone)