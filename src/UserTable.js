import React, { Component } from 'react';
import axios from 'axios';

class UserTable extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    // Make an HTTP request to fetch user data
    axios.get('https://dummyjson.com/users')
      .then(response => {
        if (Array.isArray(response.data)) {
          this.setState({ users: response.data });
        } else {
          console.error('Data is not in the expected format:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Profile Pic</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>E-mail</th>
              <th>Username</th>
              <th>Domain</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td><img src={user.profilePic} alt="Profile Pic" width="50" height="50" /></td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.domain}</td>
                <td>{user.university}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserTable;
