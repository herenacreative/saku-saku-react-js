import { React, connect } from "libraries";
import { Layout, Typography, Button } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss'
import { Cards, CardsText } from "components/molecules";
import { ShareAltOutlined, DownloadOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title } = Typography;
const Status = (props) => {
    console.log(props.location.input, 'innn')
    return (
        <>
            <Layout className="dashboard__temp">
                <Headers/>
                <Layout className="sider__nav">
                    <Navigation />
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


const mapStateToProps = (state) => ({
    auth: state.auth,
})
export default connect(mapStateToProps)(Status)