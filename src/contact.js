import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './contact.css';

function Contact() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        if (res.status === 200) { //200 = OK
          console.log(res.data);
          setData(res.data.users); 
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err))
  }, []);

  return (
    <div className="contact">
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th> 
            <th>Gender</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><img src={item.image} alt="Profile" width="50" height="50" /></td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.username}</td>
              <td>{item.domain}</td>
              <td>{item.ip}</td>
              <td>{item.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
