import { React, Link } from "libraries";
import { Layout, Space, Typography, Button } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss'
import { Cards, CardsText } from "components/molecules";
import { ShareAltOutlined, DownloadOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const Status = () => {
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
                        <Navigation/>
                    </Sider>
                    <div  className="main__content">
                        <Content>
                            <CardsText title="test" desc="test"/>
                            <CardsText title="test" desc="test"/>
                            <CardsText title="test" desc="test"/>
                            <CardsText title="test" desc="test"/>
                            <Title level={5}>Transfer To</Title>
                            <Cards numPhone="092131321" nameUser="koko"/>
                            <div style={{textAlign: "right", marginTop: "15px"}}>
                                <Button type="primary" icon={<ShareAltOutlined />}/>
                                <Button style={{margin: "0 5px 0 5px"}} type="primary" icon={<DownloadOutlined />}>
                                    Download PDF
                                </Button>
                                <Button type="primary">Back To Home</Button>
                            </div>
                        </Content>
                    </div>
                   
                </Layout>
                <Footers/>
            </Layout>
        </>
    )
}

export default Status
