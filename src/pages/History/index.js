import { React, connect, useState, useEffect } from "libraries";
import { Layout, Typography } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../assets/scss/main.scss';
import { getAllTransfer} from "redux/actions"
import { Cards } from "components/molecules";

const { Sider, Content } = Layout;

const { Text, Title } = Typography;
const History = (props) => {
    const [transfers, setTransfers] = useState([])
    const getTransferAll = () =>{
        props.getAllTransfer().then(res=>{
        setTransfers(res.action.payload.data.data[0])
        })
        .catch(error=>{
        console.log(error)
        })
    }
        
    useEffect(() => {
        getTransferAll()
    }, [])
    
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
                            <Title level={4}>Transaction History</Title>
                            <Text type="secondary">This Week</Text>
                              <Cards numPhone={transfers.phone} nameUser={transfers.sender_name} count={transfers.amount}/>
                            {/* <Text type="secondary">This Month</Text> */}
                        </Content>
                    </div>
                   
                </Layout>
                <Footers/>
            </Layout>
        </>
    )
}


const mapStateToProps = (state) =>({
  users: state.users,
  transfer: state.transfer
})

const mapDispatchToProps = {getAllTransfer}
export default connect(mapStateToProps, mapDispatchToProps)(History)
