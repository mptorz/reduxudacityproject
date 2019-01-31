import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select, Button } from 'antd';
import { setSignedUser } from '../actions/index';

const { Option } = Select;

class LogIn extends Component {
  state = {
    selectedUser: '',
  };

  handleOnClick = () => {
    if (this.state.selectedUser === '') {
      alert('Error! You must select a user to sign in');
    } else {
      this.props.dispatch(setSignedUser(this.state.selectedUser));
    }
  };

  render() {
    const { users } = this.props;

    return (
      <div>
        <h1>Please log in</h1>
        <Select
          style={{ width: 150 }}
          onChange={value => this.setState({ selectedUser: value })}
        >
          {Object.values(users).map(user => (
            <Option key={user.id} value={user.id}>
              {user.name}
            </Option>
          ))}
        </Select>
        <Button onClick={() => this.handleOnClick()} style={{ margin: 10 }}>
          Log In
        </Button>
        {/* JSON.stringify(this.props) */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};
export default connect(mapStateToProps)(LogIn);