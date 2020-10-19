import { React, Link, connect } from "libraries";
import { Layout, Typography } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss';
import { CardsText } from "components/molecules";

const { Content } = Layout;
const { Text, Title } = Typography;

const PersonalInfo = (props) => {
  const name = props.auth.data.fullname
  const firstname = name.split(' ').slice(0, -1).join(' ');
  const lastname = name.split(' ').slice(-1).join(' ');
  
  return (
    <>
      <Layout className="dashboard__temp">
        <Headers />
        <Layout className="sider__nav">
          <Navigation />
          <div className="main__content">
            <Content>
              <Title level={5}> Personal Information </Title>
              <div style={{ width: "300px", margin: "20px 0 20px 0" }}>
                <Text type="secondary">
                  We got your personal information from the sign up proccess.
                  If you want to make changes on your information, contact our support.
                </Text>
              </div>
              <CardsText title="First Name" desc={firstname}/>
              <CardsText title="Last Name" desc={lastname}/>
              <CardsText title="Verified Email" desc={props.auth.data.email}/>
              <CardsText title="Phone" desc={props.auth.data.phone} count={<Link to="/manage-number-phone">manage</Link>} />
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

export default connect(mapStateToProps)(PersonalInfo)