import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        count: 1
    }
  }

  render() {

    const { name, location, url } = this.props;

    return (
      <div>
        <h1>Name: {name}</h1>
        <h1>Count: {this.state.count} </h1>
        <button onClick={()=>{
            this.setState({
                count: this.state.count + 1
            })
        }}>➕</button>
        <h1>Location: {location}</h1>
        <img src={url} alt="img"/>
      </div>
    );
  }
}

export default UserClass;
