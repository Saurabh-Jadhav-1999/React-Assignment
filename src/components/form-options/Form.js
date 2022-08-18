import React, { useState } from "react";
import "../css/Form.css";
const Form = (props) => {
  const user = props.user;

  const [updateUser, setUpdateUser] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    website: user.website,
    id: user.id,
    username: user.username
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUpdateUser({ ...updateUser, [name]: value })
  }

  const updateUserHandler = (event) => {
    event.preventDefault();
    props.updateUser(updateUser, user.id);
    props.setModal();
  }

  return (
    <form onSubmit={updateUserHandler}>
      <div className="modal-container" id="modal-container">
        <div className="modal">
          <div className="modal-header">
            Basic Modal
            <button id="close" onClick={props.setModal}>
              <svg
                viewBox="64 64 896 896"
                className=""
                data-icon="close"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
              </svg>
            </button>
          </div>
          <div className="modal-content">
            <div className="modal-user-name">
              <label htmlFor="name">Name: </label>
              <input id="inputBox" type="text" name="name" onChange={onChangeHandler} defaultValue={`${user.name}`} required />
            </div>
            <div className="modal-user-email">
              <label htmlFor="email">Email: </label>
              <input id="inputBox" type="email" name="email" onChange={onChangeHandler} defaultValue={`${user.email}`} required />
            </div>
            <div className="modal-user-phone">
              <label htmlFor="phone">Phone: </label>
              <input id="inputBox" type="text" name="phone" onChange={onChangeHandler} defaultValue={`${user.phone}`} required />
            </div>
            <div className="modal-user-website">
              <label htmlFor="website">Website: </label>
              <input id="inputBox" type="text" name="website" onChange={onChangeHandler} defaultValue={`${user.website}`} required />
            </div>
          </div>
          <div className="modal-footer">
            <input type="submit" value="OK" id="ok"></input>
            <button id="cancel" value="Cancel" onClick={props.setModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
