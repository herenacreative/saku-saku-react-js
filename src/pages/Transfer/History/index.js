import { React, Link,  connect, useState, useEffect } from "libraries";
import { Layout, Empty, Skeleton, Typography } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss';
import { getAllTransfer } from "redux/actions"
import { Cards } from "components/molecules";
import config from '../../../configs/index';

const { Content } = Layout;
const { Text, Title } = Typography;

const History = (props) => {
  const [transfers, setTransfers] = useState([])

  const getTransferAll = () => {
    const token = props.auth.data.tokenLogin
    const id = props.auth.data.id
    props.getAllTransfer(token, id)
      .then(res => {
        setTransfers(res.value.data.data[0])
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getTransferAll()
  }, [])

  return (
    <>
      <Layout className="dashboard__temp">
        <Headers />
        <Layout className="sider__nav">
          <Navigation />
          <div className="main__content">
            <Content>
              <Title level={4}>Transaction History</Title>
              <Text type="secondary">This Week</Text>
              {props.transfer.data
                ? props.transfer.data.length > 0
                  ? props.transfer.data.map((item, id) => {
                    return (
                      <Cards
                        key={id}
                        numPhone={item.phone}
                        nameUser={<Link to={`/transfer/${item.id}`}>{item.fullname}</Link>}
                        count={item.amount}
                        image={`${config.imgURL}/${item.photo}`}
                      />
                    )
                  })
                  : <Empty />
                : <Skeleton active />
              }
              <Text type="secondary">This Month</Text>
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
  transfer: state.transfer
})
const mapDispatchToProps = { getAllTransfer }

export default connect(mapStateToProps, mapDispatchToProps)(History)