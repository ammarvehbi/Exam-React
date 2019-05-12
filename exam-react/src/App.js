import React from 'react';
import './App.css';
import People from './components/People/People';
import USerInformation from './components/UserInformation/UserInformation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      people: [],
      currentUser: null,
      noUser: 'No user to show yet...',
    };
  }

  getUsers = () => {
    this.setState({
      currentUser: null,
    });
    return fetch('http://uinames.com/api/?amount=5&ext')
      .then(res => res.json())
      .then(
        data => {
          this.setState({
            isLoaded: true,
            people: data,
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  showUser = index => {
    this.setState({
      currentUser: index,
      noUser: '',
    });
  };

  render() {
    return (
      <div>
        <div className="button-div">
          <button onClick={this.getUsers}>Get Users</button>
        </div>

        <div className="main-div">
          <div className="no-user">
            <p>{this.state.noUser}</p>
          </div>
          <People className="users-div" people={this.state.people} showUser={this.showUser} />
        </div>

        {this.state.currentUser !== null && (
          <USerInformation showUser={this.state.people[this.state.currentUser]} />
        )}
      </div>
    );
  }
}

export default App;
