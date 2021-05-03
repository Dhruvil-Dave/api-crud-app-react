import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import img1 from "./google.png";
import img2 from "./fb.png";
import img3 from "./amazon.png";

const Home = () => {

    const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

    return(
        <div className="container">
            <div className="py-4">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100 shadow">
                    <img src={img1} class="card-img-top" alt="..."/>
                    <div class="card-body bg-light">
                        <h5 class="card-title">Google</h5>
                        <p class="card-text"><h2>1515 USD</h2></p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow">
                    <img src={img2} class="card-img-top" alt="..."/>
                    <div class="card-body bg-light">
                        <h5 class="card-title">Facebook</h5>
                        <p class="card-text"><h2>266 USD</h2></p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow">
                    <img src={img3} class="card-img-top" alt="..."/>
                    <div class="card-body bg-light">
                        <h5 class="card-title">Amazon</h5>
                        <p class="card-text"><h2>3116 USD</h2></p>
                    </div>
                    </div>
                </div>
  
        </div>
<br/><br/>
                    <input type="text" placeholder="Search by Company Name"/><br/><br/>
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
                  <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>
                    Edit
                  </Link>
                  <Link class="btn btn-danger" onClick={() => deleteUser(user.id)}>
                    Delete
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

export default Home;