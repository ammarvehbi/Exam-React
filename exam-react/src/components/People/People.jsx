import React from 'react';

class People extends React.Component {
  render() {
    return (
      <ul className="people-list">
        {this.props.people.map((person, index) => (
          <li className="list-item" key={person.name} onClick={() => this.props.showUser(index)}>
            {person.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default People;
