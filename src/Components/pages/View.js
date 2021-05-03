import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const View = () => {
    const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  
    return(
        <div className="container">
            <div className="py-4">
            <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">COMPANY NAME</th>
                                <th scope="col">MARKET CAP</th>
                                <th scope="col">Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  
                  
                </td>
              </tr>
            ))}
                        </tbody>
                    </table>
            </div>
        </div>
    );
};

export default View;