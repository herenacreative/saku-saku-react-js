import { React, connect, Link, useEffect, useState, queryString, withRouter, useLocation } from "libraries";
import { Layout, Input, Typography, Form } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Footers, Headers, Navigation, } from "components/organisms";
import '../../assets/scss/main.scss';
import { getAllUsers } from 'redux/actions';
import { Cards, Searching } from "components/molecules";
import config from '../../configs/index';

const { Title } = Typography
const { Content } = Layout;

const Transfer = (props) => {
  // const qs = queryString.parse(props.location.search)
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  // const location = useLocation();
  
  const enterSearch = () => {
    // console.log('lock', props.history.location.search, 'l', props)
    if (props.history.location.search === "") {
      props.history.push(`/transfer?search=${search}`)
    } else {
      let qs = queryString.parse(props.history.location.search);

      if (qs.search) {
        const url = props.history.location.search.replace(
          `search=${qs.search}`,
          `search=${search}`
        )
        props.history.push(url)
      } else {
        props.history.push(`${props.history.location.search}&search=${search}`)
      }
      
    }
  }

  useEffect(() => {
    enterSearch()
  }, [])

  useEffect(() => {
    let qs = queryString.parse(props.history.location.search);
    let search = qs.search || "";
    let limit = qs.limit || "100";
    let page = qs.page || "";
    // console.log(search, 'ss', qs.search)
    const token = props.auth.data.tokenLogin
    // console.log(search, '9')
    // enterSearch()
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
              {/* <Searching/> */}
              <Form onFinish={enterSearch}>
              <Input
                value={search}
                onChange={e => setSearch(e.target.value)}
                size="large"
                placeholder="Search Reciver Here... "
                prefix={<SearchOutlined />}
                onKeyDown={e => enterSearch}
              />
              </Form>
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
const pushRoute = withRouter(Transfer)
export default connect(mapStateToProps, mapDispatchProps)(pushRoute)