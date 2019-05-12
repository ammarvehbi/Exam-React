import React from 'react';

class UserInformation extends React.Component {
  render() {
    const person = this.props.showUser;
    return (
      <div>
        <img src={person.photo} alt="user-imge" />
        <div className="user">
          <h4>
            {person.name} {person.surname}
          </h4>
          <ul>
            <li>Email: {person.email}</li>
            <li>Gender: {person.gender}</li>
            <li>Age: {person.age}</li>
            <li>Country of origin: {person.region}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserInformation;
