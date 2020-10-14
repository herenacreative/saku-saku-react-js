import { React, Link } from "libraries";
import { Layout, Space, Typography, Button, Modal } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss'
import { Cards, CardsText, InputPin } from "components/molecules";
import { render } from "@testing-library/react";
const { Header, Footer, Sider, Content } = Layout;

const { Title, Text } = Typography;
class Confirmation extends React.Component{
  // state = {
  //   ModalText: 'Content of the modal',
  //   visible: false,
  //   confirmLoading: false,
  // };

  // showModal = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // };

  // handleOk = () => {
  //   this.setState({
  //     ModalText: 'The modal will be closed after two seconds',
  //     confirmLoading: true,
  //   });
  //   setTimeout(() => {
  //     this.setState({
  //       visible: false,
  //       confirmLoading: false,
  //     });
  //   }, 2000);
  // };

  // handleCancel = () => {
  //   console.log('Clicked cancel button');
  //   this.setState({
  //     visible: false,
  //   });
  // };

  render(){
    // const { visible, confirmLoading, ModalText } = this.state;
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
                            <Title level={5}>Transfer To</Title>
                            <Cards nameUser="sinta" numPhone="0812313132"/>
                            <Title level={5}>Detail</Title>
                            <CardsText title="balance" desc="1200000"/>
                            <CardsText title="balance" desc="1200000"/>
                            <Button type="primary">Confirm</Button>
                            {/* <Button type="primary" onClick={this.showModal}>
                            Open Modal with async logic
                            </Button> */}
                        </Content>
                    </div>
                   
                </Layout>
                <Footers/>
            </Layout>

            {/* <Modal
              visible={visible}
              onOk={this.handleOk}
              confirmLoading={confirmLoading}
              onCancel={this.handleCancel}
              width={300}
            >
          <Title level={5}>Enter PIN to Transfer</Title>
          <Text type="secondary">Enter your 6 digits PIN for confirmation to continue transferring money. </Text>
          <InputPin/>
        </Modal> */}
        </>
    )
    }
}

export default Confirmation