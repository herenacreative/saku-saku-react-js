import { React, connect } from "libraries";
import { Typography, List, Avatar, Image } from 'antd';
import '../../../assets/scss/main.scss';
// import { getAllTransfer } from 'redux/actions';

const { Text } = Typography;

const Cards = (props) => {
  const {image, numPhone, nameUser, count} = props;
  // const [transfers, setTransfers] = useState([])

  // const getTransferAll = () => {
  //   const token = props.auth.data.tokenLogin
  //   const id = props.auth.data.id

  //   props.getAllTransfer(token, id)
  //   .then(res=>{
  //     setTransfers(res.value.data.data[0])
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

    return (
        <>
          <List.Item className="shadow__box">
            <List.Item.Meta
              avatar={<Image 
              width={50} height={50} src={image}/>}
              title={nameUser}
              description={numPhone}
            />
            {/* {console.log(props.auth.data, 'props auth')} */}
            <Text>{count}</Text>
          </List.Item>              
        </>
    )
}

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   transfer: state.transfer
// })

// const mapDispatchToProps = {getAllTransfer}

export default Cards;
