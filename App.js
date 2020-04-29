import React from 'react';
import './App.css';

export default class App extends React.Component {
    state = {
      value: "",
      list: [],
      addToDo: {
        name: "",
        isCheck: false
      }
    };
    changeHandler = e => {
      const { value } = e.target;
      this.setState({
        value: value
      });
    };
    addHandler = () => {
      if (this.state.value !== "") {
        this.setState(
          state => ({
            addToDo: {
              name: state.value,
              isCheck: false
            }
          }),
          () => {
            this.setState(state => ({
              list: [...state.list, this.state.addToDo],
              value: ""
            }));
          }
        );
      }
    };
    checkHandler = index => {
      let copy = [].concat(this.state.list);
      copy[index].isCheck = true;
      this.setState(state => ({
        list: copy
      }));
    };
  
    deleteHandler = index => {
      this.setState(state => ({
        list: state.list.filter((_, i) => i !== index)
      }));
    };
  
    render() {
      const { value, list } = this.state;
      return (
        <div className="App">
          <input type="text" value={value} onChange={this.changeHandler} />
          <button onClick={this.addHandler}>Create</button>
          <div className="toDo-container">
            {list.map((list, index) => (
              <div className="list-container" key={index}>
                <input
                  onChange={() => this.checkHandler(index)}
                  type="checkbox"
                />
                <span
                  style={list.isCheck ? { textDecoration: "line-through" } : {}}
                >
                  {list.name}
                </span>
                <button onClick={() => this.deleteHandler(index)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }



