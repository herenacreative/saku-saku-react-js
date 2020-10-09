import { React, Link, connect } from "libraries";
import { Layout, Space, Typography } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../assets/scss/main.scss';
import { CardsText } from "components/molecules";

const { Header, Footer, Sider, Content } = Layout;

const { Text, Title } = Typography;
const PersonalInfo = (props) => {
    return (
        <>
            <Layout className="dashboard__temp">
                <Headers/>
                <Layout className="sider__nav">
                    <Sider
                        className="nav__nav"
                        breakpoint="xs"
                        collapsedWidth="0"
                        onBreakpoint={broken => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                        {/* <div className="nav"> */}
                            <Navigation/>
                        {/* </div> */}
                    </Sider>
                    <div  className="main__content">
                        <Content>
                            <Title level={5}> Personal Information </Title>
                            <div  style={{width: "300px", margin: "20px 0 20px 0"}}>
                                <Text type="secondary">
                                    We got your personal information from the sign up proccess. 
                                    If you want to make changes on your information, contact our support.
                                </Text>
                            </div>
                            <CardsText title="First Name" desc="Sinta" count="ji"/>
                            <CardsText title="First Name" desc="Sinta"/>
                            <CardsText title="Phone" desc={props.auth.data.phone} count={<Link to ="/manage-number-phone">manage</Link>}/>
                        </Content>
                    </div>
                   
                </Layout>
                <Footers/>
            </Layout>
        </>
    )
}
const mapStateToProps = (state) => ({
  auth: state.auth
})
export default connect(mapStateToProps)(PersonalInfo)

