import { React, connect, Link, useEffect, useState, useHistory } from "libraries";
import { Layout, Typography, Row, Col, Button, Space, Empty, Skeleton } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../assets/scss/main.scss';
import Avatar from "antd/lib/avatar/avatar";
import { getIdUsers, getAllUsers }from 'redux/actions';
import { Cards } from "components/molecules";
import configs from '../../configs/index';

const { Sider, Content } = Layout;

const { Text, Title } = Typography;
const Profile = (props) => {
  const [user, setUser] = useState([])
  const [userAll, setUserAll] = useState([])
  const history = useHistory()
  // const getUserId = () =>{
	//  props.getIdUsers().then(res=>{
  //     setUser(res.action.payload.data.data[0])
  //   })
  //   .catch(error=>{
  //     console.log(error)
  //   })
  // }

  const getUserAll = () =>{
  const token = props.auth.data.tokenLogin 
	 props.getAllUsers(token).then(res=>{
      setUserAll(res.value.data.data[0])
      console.log(res.value, 'tes')
    })
    .catch(error=>{
      console.log(error)
    })
  }

  useEffect(() => {
    // getUserId()
	  getUserAll()
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
                        <Content>
                            <Row>
                                <Col className="main__content" style={{textAlign: "center"}}>
                                    <Space direction="vertical">
                                      <Avatar shape="square" src={`${configs.imgURL}/props.auth.data.photo`}/>
                                      <Title level={5}>{props.auth.data.fullname}</Title>
                                      <Text type="secondary">{props.auth.data.phone}</Text>
                                    </Space>
                                </Col> 
                            </Row>
                            <Row>
                                <Col flex="1 1 200px" className="main__content" style={{marginTop: '10px'}}>
                                    <Button
                                      onClick={() => history.push("/personal-info")}
                                      type="primary" 
                                      className="btn__default" 
                                      block
                                    >
                                        Personal Information
                                    </Button>
                                    <Button 
                                      onClick={() => history.push("/change-password")} 
                                      type="primary" 
                                      className="btn__default" 
                                      block
                                    >
                                        Change Password
                                    </Button>
                                    <Button 
                                      onClick={() => history.push("/change-pin")} 
                                      type="primary" 
                                      className="btn__default" 
                                      block
                                    >
                                        Change PIN
                                    </Button>
                                    <Button type="primary" className="btn__default" block>
                                        Logout
                                    </Button>
                                </Col>
                                <Col flex="1 1 200px" className="main__content" style={{marginTop: '10px'}}>
                                  <div className="flex__sb">
                                    <Text>Contacts Info</Text>
                                    <Link to={`/transfer`}>See All</Link>
                                  </div>
                                  {userAll ? userAll.length > 0 ? userAll.map((item, id)=>{
                                    return(
                                      <Cards 
                                        key={id}
                                        numPhone={item.phone} 
                                        nameUser={<Link to={`/transfer/${item.id}`}>{item.fullname}</Link>}
                                        photo=""
                                      />
                                    ) 
                                   })
                                  : <Empty />
                                :<Skeleton active />
                                } 
                                </Col>
                            </Row>
                           
                       </Content>                   
                </Layout>
                <Footers/>
            </Layout>
        </>
    )
}

const mapStateToProps = (state) =>({
  users: state.users,
  auth: state.auth
})

const mapDispatchToProps = {getIdUsers, getAllUsers}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
