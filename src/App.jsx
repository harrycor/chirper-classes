import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      msg: "",
      info: [{name: "jonny b walkin", msg: "scotchy scotchy scotch"}, {name: "The Dude", msg: "Lets Bowl"}, {name: "The Monopoloy Guy", msg: "Check the Stache"}],
    };
  }

  handleSubmit(e) {
      this.setState({
          info: [...this.state.info, {name: this.state.name, msg: this.state.msg}],
          name: "",
          msg: ""
      })
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} placeholder="name" />
          <input value={this.state.msg} onChange={e => this.setState({ msg: e.target.value })} placeholder="message" />
          <button
            onClick={(e) => this.handleSubmit(e)}
            className="btn btn-primary"
          >
            submit
          </button>
        </div>
        <div className="card">
          {this.state.info.map((val) => {
            return (
              <div className="card-body">
                <h1>{val.name}</h1>
                <p className="card-text">{val.msg}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
