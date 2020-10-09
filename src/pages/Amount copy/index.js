import { React, connect, useEffect, useState, useHistory } from "libraries";
import { Layout, Space, Typography, InputNumber, Input, Button, Modal } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../assets/scss/main.scss'
import { Cards, InputPin } from "components/molecules";
import { HighlightOutlined } from '@ant-design/icons';
import {getUser, getPostTransfer} from 'redux/actions'

const { Sider, Content } = Layout;
const { Text, Title } = Typography;

const Amount = (props) => {
  const [user, setUser] = useState([])
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible({
      visible: true,
    });
  };

  const handleOk = e => {
    console.log(e);
    setVisible({
      visible: true,
    });
  };

  const handleCancel = e => {
    console.log(e);
    setVisible({
      visible: true,
    });
  };

    const getUseId = () =>{
      const id = props.match.params.id
      // console.log(props.match.params.id, 'pp')
      props.getUser(id).then(res=>{
        setUser(res.action.payload.data.data[0])
        })
      .catch(error=>{
        console.log(error)
      })
    }

    useEffect(() => {
      getUseId()
    }, [])
    const price =`${user.balance}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
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
                            <Cards numPhone={user.phone} nameUser={user.fullname}/>
                            <div style={{width: "300px"}}>
                                <Text type="secondary">
                                    Type the amount you want to transfer and then
                                    press continue to the next steps.
                                </Text>
                            </div>
                            <div style={{textAlign: "center", margin: "9% 0 9%"}}>
                            <Space direction="vertical" align="center">
                                <InputNumber
                                    defaultValue=""
                                    formatter={value => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={value => value.replace(/\Rp\s?|(,*)/g, '')}
                                    // onChange={onChange}
                                    style={{fontSize: "30px", border: "none", width: "300px", borderBottom: '.2px solid'}}
                                />
                                <Text>Rp {price} Available</Text>
                                <Input
                                    bordered={false}
                                    style={{width: "300px", borderBottom: '.2px solid'}}
                                    placeholder="Add some notes"
                                    prefix={<HighlightOutlined className="site-form-item-icon" />}
                                />
                            </Space>
                            </div>
                            <Button type="primary" onClick={showModal}>
                              Show Modal
                            </Button>
                        </Content>
                    </div>
                   
                </Layout>
                <Footers/>
            </Layout>

            <Modal
              visible={visible}
              okText="Submit"
              onCancel={handleCancel}
              onOk={handleOk}
              width={300}
            >
              <Title level={5}>Enter PIN to Transfer</Title>
              <Text type="secondary">Enter your 6 digits PIN for confirmation to continue transferring money. </Text>
              <InputPin/>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) =>({
  users: state.users,
  transfer: state.transfer
})

const mapDispatchToProps = {getUser}
export default connect(mapStateToProps, mapDispatchToProps)(Amount)
