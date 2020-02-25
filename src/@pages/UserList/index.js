import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserListAction } from '../../@store/actions';

// const UserList = props => {
//   useEffect(() => {
//     async function fetchData() {
//       await props.getUserListAction();
//       console.log({ props: props.userList });
//     }

//     fetchData();
//   });

//   return <div>UserList</div>;
// };

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    await this.props.getUserListAction();
    console.log({ user: this.props.userList });
  }
  render() {
    return <div>UserList</div>;
  }
}

const mapStateToProps = state => ({
  userList: state.getUserListReducer
});

export default connect(mapStateToProps, { getUserListAction })(UserList);
