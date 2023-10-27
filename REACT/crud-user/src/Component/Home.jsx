import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import { Link, useRoutes } from "react-router-dom";

const URL = "https://node-crud-api-0n4d.onrender.com";

function Home(props) {
  const [Users, setUsers] = useState([]);

  const getUser = async () => {
    await axios
      .get(`${URL}/api/user`)
      .then((res) => {
        console.log("users =", res);
      })
      .catch((err) => toast.error(err));
  };
  useEffect(() => {
    getUser();
  }, []);

  const deleteHandler = async (id) => {
    if (window.confirm(`ARE you sure to delete the user data?`)) {
      await axios
        .delete(`${URL}/api/user/delete/${id}`)
        .then((res) => {
          toast.success(res.data.msg);
          window.location.reload();
        })
        .catch((err) => toast.error(err.response.data.msg));
    } else {
      toast.warning("delete terminated");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">Home</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="table table-responsive">
            <table className="table table-bordered table-hover table-striped text-center">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {Users &&
                  Users.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>
                          <Link className="btn btn-info">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-danger m-2">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
