import { React, connect, Link, useEffect, useState, qs } from "libraries";
import { Layout, Input, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Footers, Headers, Navigation, } from "components/organisms";
import '../../assets/scss/main.scss';
import { getAllUsers } from '../../redux/actions/users';
import { Cards } from "components/molecules";
import config from '../../configs/index';

const { Title } = Typography
const { Content } = Layout;

const Transfer = (props) => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    let parsed = qs.parse(props.location.search);
    let search = parsed.search || "";
    let limit = parsed.limit || "100";
    let page = parsed.page || "";
    const token = props.auth.data.tokenLogin
    props.getAllUsers(token, search, page, limit)
      .then(res => {
        setUsers(res.action.payload.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Layout className="dashboard__temp">
        <Headers />
        <Layout className="sider__nav">
          <Navigation />
          <div className="main__content">
            <Content>
              <Title level={3}>Search Receiver</Title>
              {/* <form> */}
              <Input
                value={search}
                onChange={e => setSearch(e.target.value)}
                size="large"
                placeholder="Search Reciver Here... "
                prefix={<SearchOutlined />}
              />
              {/* </form> */}
              {
                users.map((item, id) => {
                  return <>
                    <Cards
                      key={id}
                      numPhone={item.phone}
                      nameUser={<Link to={`/transfer/${item.id}`}>
                                  {item.fullname}
                                </Link>}
                      image={`${config.imgURL}/${item.photo}`}
                    />
                  </>
                })
              }
            </Content>
          </div>
        </Layout>
        <Footers />
      </Layout>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.topUp
})

const mapDispatchProps = { getAllUsers }
export default connect(mapStateToProps, mapDispatchProps)(Transfer)