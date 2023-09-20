import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";

class UserSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    }}

  readValue(event) {
    //console.log("value=", event.target.value);
    this.setState({
user:event.target.value


    })
  }
// form submit handler

submitHandler(event){
event.preventDefault();
this.props.search(this.state.user)


}
  render() {
    return (
      <div>
        <form autoComplete="off">
          <div className="form-group">
            <input
              type="search"
              name="user"
              value={this.state.user}
              onChange={(e) => this.readValue(e)}
              placeholder="Enter GIT username"
              id="user"
              required
            />
            <button className="btn">
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserSearch;
