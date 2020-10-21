import { React, connect, Link, useEffect, useState, useHistory } from "libraries";
import { Layout, Typography, Modal, message, Row, Col, Button, Space, Empty, Skeleton, Image, Input, Form } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../assets/scss/main.scss';
import { getIdUsers, getAllUsers, patchUser } from 'redux/actions';
import { Cards } from "components/molecules";
import config from '../../configs/index';
import { EditOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Text, Title } = Typography;

const Profile = (props) => {
  const pht = props.auth.data.photo
  const name = props.auth.data.fullname
  const fn = name.split(' ').slice(0, -1).join(' ');
  const ln = name.split(' ').slice(-1).join(' ');

  const [user, setUser] = useState([])
  const [photo, setPhoto] = useState(pht)
  const [visible, setVisible] = useState(false)
  const [firstname, setFirstname] = useState(fn)
  const [lastname, setLastname] = useState(ln)
  const history = useHistory()

  const showModal=()=>{
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const getUserAll = () => {
    const token = props.auth.data.tokenLogin
    props.getAllUsers(token)
      .then(res => {
        setUser(res.value.data.data[0])
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getUserAll()
  }, [])

  const handleSubmit = () => {
    // e.preventDefault()
    const id = props.auth.data.id
    const token = props.auth.data.tokenLogin
    const formData = new FormData();
    formData.append('photo', photo)
    formData.append('fullname', firstname.concat(' ', lastname))

    props.patchUser(id, formData, token)
      .then(() => {
        message.success('Update Profile Successfully')
        setVisible(false)
        window.location.reload();
      })
      .catch((error) => {
        message.error('Upss Update Profile Not Successful...')
        console.log(error);
      })
  }

  return (
    <>
      <Layout className="dashboard__temp">
        <Headers />
        <Layout className="sider__nav">
          <Navigation />
          <Content>

            <Row>
              <Col className="main__content" style={{ textAlign: "center" }}>
                <Space direction="vertical">
                  <Image width={50} height={50} src={`${config.imgURL}/${props.auth.data.photo}`} />
                  <EditOutlined onClick={showModal}/>
                  <Title level={5}>{props.auth.data.fullname}</Title>
                  <Text type="secondary">{props.auth.data.phone}</Text>
                </Space>
              </Col>
            </Row>

            <Row>
              <Col flex="1 1 200px" className="main__content" style={{ marginTop: '10px' }}>
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

              <Col flex="1 1 200px" className="main__content" style={{ marginTop: '10px' }}>
                <div className="flex__sb">
                  <Text>Contacts Info</Text>
                  <Link to={`/transfer`}>See All</Link>
                </div>
                {props.users.data
                  ? props.users.data.length > 0
                    ? props.users.data.map((item, id) => {
                      return (
                        <Cards
                          key={id}
                          numPhone={item.phone}
                          nameUser={<Link to={`/transfer/${item.id}`}>{item.fullname}</Link>}
                          image={`${config.imgURL}/${item.photo}`}
                        />
                      )
                    })
                    : <Empty />
                  : <Skeleton active />
                }
              </Col>
            </Row>
          </Content>
        </Layout>
        <Footers />
      </Layout>

      <Modal
        title= "Update Profile"
        visible={visible}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
      >
        <Form onFinish={handleSubmit}>
          <Input
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
            placeholder="Input your Fistname"
          />
            <Input
              style={{ marginTop: "20px" }}
              value={lastname}
              onChange={e => setLastname(e.target.value)}
              placeholder="Input your Lastname"
            />
          <Input style={{ marginTop: "20px" }} type="file" onChange={e => setPhoto(e.target.files[0])}/>
          <span style={{ marginTop: "20px", float: "right" }}>
            <Button style={{ marginRight: "20px"}} type="primary" htmlType="submit" className="btn__primary">
            Update Profile
            </Button>
            <Button onClick={handleCancel} type="primary" className="btn__primary">
              Cancel
            </Button>
          </span>
        </Form>
      </Modal>
    </>
  )
}

const mapStateToProps = (state) => ({
  users: state.users,
  auth: state.auth
})
const mapDispatchToProps = { getIdUsers, getAllUsers, patchUser }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)