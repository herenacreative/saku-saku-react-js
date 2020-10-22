import { React, connect, useEffect, useState, useHistory, moment, Link } from "libraries";
import { Layout, Table, Typography, Button, message, Popconfirm } from 'antd';
import { EditTopup, Footers, Headers, NavigationAdmin } from "components/organisms";
import '../../../assets/scss/main.scss';
import { getAllUsers, getAdminTransfer, deleteTransfer } from 'redux/actions';
import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const {Title} = Typography

const DataTransferAdmin = (props) => {
    const [transferAdmin, setTransferAdmin] = useState([])
    const [user, setUser] = useState([])
    const history = useHistory()

    useEffect(() => {
        // console.log(props.getAdminTransfer, 'po')
        const token = props.auth.data.tokenLogin
        props.getAdminTransfer(token)
            .then(res => {
                setTransferAdmin(res.action.payload.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        // console.log(props.getAdminTransfer, 'po')
        const token = props.auth.data.tokenLogin
        props.getAllUsers(token)
            .then(res => {
                setUser(res.action.payload.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const onDelete = (id) => {
        const token = props.auth.data.tokenLogin
        props.deleteTransfer(token, id)
            .then((res) => {
                window.location.reload();
                message.success(res.value.data.message)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            fixed: 'left',
            width: '50px',
            sorter: {
                compare: (a, b) => a.num - b.num,
                multiple: 1,
            },
        },
        {
            title: 'Sender ID',
            dataIndex: 'sender_id',
            sorter: {
                compare: (a, b) => a.sender_id - b.sender_id,
                multiple: 1,
            },
        },
        {
            title: 'Receiver ID',
            dataIndex: 'receiver_id',
            sorter: {
                compare: (a, b) => a.receiver_id - b.receiver_id,
                multiple: 1,
            },
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            sorter: {
                compare: (a, b) => a.amount - b.amount,
                multiple: 1,
            },
        },
        {
            title: 'Date & Time',
            dataIndex: 'created_at',
            sorter: {
                compare: (a, b) => a.created_at - b.created_at,
                multiple: 1,
            },
        },
        {
            title: 'Notes',
            dataIndex: 'notes',
        },
        {
            title: 'Delete',
            dataIndex: 'delete',
            fixed: 'right',
        }
    ]

    const onChange = (pagination, filters, sorter, extra) => {
        console.log(pagination, filters, sorter, extra);
    }

    const data = [{}]

    transferAdmin.map((item, id) => {
        const time = moment(item.created_at || moment.now()).format("lll");
        data.push({
            key: id,
            id: item.id,
            sender_id: <Link to={`/transfer/${item.sender_id}`}>{item.sender_id}</Link>,
            receiver_id: <Link to={`/transfer/${item.receiver_id}`}>{item.receiver_id}</Link>,
            amount: item.amount,
            created_at: time,
            notes: item.notes,
            update:
                <EditTopup match={props.match} detailTopup={item} onClick={() => history.push(`data-transfer-admin/${item.id}`)} />,
            delete:
                <Popconfirm title="Are you sure？" onConfirm={() => onDelete(item.id)} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                    <Button
                        style={{ marginRight: "10px" }}
                        type="primary"
                        shape="circle"
                        icon={<DeleteOutlined />}
                    />
                </Popconfirm>
        })
        return data
    })

    return (
        <>
            <Layout className="dashboard__temp">
                <Headers />
                <Layout className="sider__nav">
                    <NavigationAdmin />
                    <div className="main__content">
                        <div style={{ margin: '20px' }}>
                            <span style={{marginLeft: '15%', fontSize: '24px', fontWeight:'bold'}}>
                                Data Transfer
                            </span>
                        </div>
                        <Table width="100" columns={columns} dataSource={data} scroll={{ x: 1300 }} onChange={onChange} />
                    </div>
                </Layout>
                <Footers />
            </Layout>
        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    transfer: state.transfer,
    users: state.users,
})

const mapDispatchProps = { getAdminTransfer, deleteTransfer, getAllUsers }
export default connect(mapStateToProps, mapDispatchProps)(DataTransferAdmin)