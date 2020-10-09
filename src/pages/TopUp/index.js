import { React, connect, useEffect, useState } from "libraries";
import { Layout, Space, Typography } from 'antd';
import { Footers, Headers, Navigation,  } from "components/organisms";
import '../../assets/scss/main.scss';
import {getAllTopUp} from '../../redux/actions/topUp'
import { CardsText } from "components/molecules";
// import { HighlightOutlined, SmileOutlined, SmileFilled } from '@ant-design/icons';

const { Sider, Content } = Layout;
const { Title } = Typography;
const TopUp = (props) => {
	const [topups, setTopups] = useState([])
	const [lengthLimitedStr, setLengthLimitedStr] = useState("");
		
    useEffect(() => {
		const token = props.auth.data.tokenLogin 
        props.getAllTopUp(token).then(res => {           
            setTopups(res.action.payload.data.data) 
        })
        .catch(error=>{
            console.log(error)
				})	
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
					<div className="main__content">
						<Content>
							<Title level={5}>How To Top Up</Title>
							{
								topups.map((item, id)=>{
									return <>
									<div className="shadow__box">
										<Space key={id} direction="horizontal">
											<p>{item.num}</p>
											<p>{item.description}</p>
										</Space>
									</div>
								</>
								})
							}
						</Content>
					</div>
				</Layout>
				<Footers/>
			</Layout>
        </>
    )
}

const mapStateToProps = (state) => ({
	topUp: state.topUp,
	auth: state.auth
})

const mapDispatchProps = {getAllTopUp}
export default connect(mapStateToProps, mapDispatchProps)(TopUp)
