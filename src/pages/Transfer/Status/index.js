import { React, connect, useHistory, moment } from "libraries";
import { Layout, Typography, Button, Avatar } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss'
import { Cards, CardsText } from "components/molecules";
import { ShareAltOutlined, DownloadOutlined } from '@ant-design/icons';
import { success, failed } from "assets";
import config from "../../../configs/index";

const { Content } = Layout;
const { Title } = Typography;
const Status = (props) => {
  const { statuses } = props
  const history = useHistory()
  // const getData = props.location ? props.location : props.location.input.getDetail
  const getData = props.location.input.getDetail
  // const getProfile = props.users ? props.users : props.users.data[0]
  const getProfile = props.users.data[0]
  const time = moment(getData.created_at || moment.now()).format("lll");
  // console.log(props.location, 'll', props)
  return (
    <>
      <Layout className="dashboard__temp">
        <Headers />
        <Layout className="sider__nav">
          <Navigation />
          <div className="main__content">
            <Content>
              {statuses}
              <CardsText title="Amount" desc={getData ? getData.amount : '-'} />
              <CardsText title="Balance Left" desc={getData ? getData.balance : '-'} />
              <CardsText title="Date & Time" desc={getData ? time : '-'} />
              <CardsText title="Notes" desc={getData ? getData.notes : '-'} />
              <Title level={5}>Transfer To</Title>
              <Cards image={`${config.imgURL}/${getProfile.photo}`} numPhone={getProfile.phone} nameUser={getProfile.fullname} />
              <div style={{ textAlign: "right", marginTop: "15px" }}>
                <Button type="primary" icon={<ShareAltOutlined />} />
                <Button style={{ margin: "0 5px 0 5px" }} type="primary" icon={<DownloadOutlined />}>
                  Download PDF
                </Button>
                <Button type="primary" onClick={() => history.push('/dashboard')}>Back To Home</Button>
              </div>
            </Content>
          </div>

        </Layout>
        <Footers />
      </Layout>
    </>
  )
}

const FailedTransaction = () => {
  return (
    <>
      <Status statuses={<div style={{ textAlign: "center", margin: '10px' }}>
        <Avatar src={failed} style={{ margin: '20px' }} />
        <Title level={5}>Transfer Failed</Title>
      </div>} />
    </>
  )
}

const SuccessTransaction = () => {
  return (
    <>
      <Status statuses={<div style={{ textAlign: "center", margin: '10px' }}>
        <Avatar src={success} style={{ margin: '20px' }} />
        <Title level={5}>Transfer Success</Title>
      </div>} />
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users
})
export default connect(mapStateToProps)(Status, SuccessTransaction, FailedTransaction)