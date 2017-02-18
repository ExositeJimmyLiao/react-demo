import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const deviceJson = [
  {
    id: '000001',
    name: '冷氣機1',
  },
  {
    id: '000002',
    name: '冷氣機2',
  },
  {
    id: '000003',
    name: '冷氣機3',
  }, 
];

const Device = (props) => (
  <div>
    <h3>Device ID: {props.id}</h3>
    <p>Device Name: {props.name}</p>
  </div>
);

const DeviceList = (props) => {
  const list = props.list.map((item) => {
    return <Device key={item.id} name={item.name} id={item.id}/>
  });
  return (
    <div>
      {list}
    </div>
  );
}

class DeviceAdd extends Component {

  addOnClick = (event) => {
    event.preventDefault();
    this.props.onChange({
      id: this.idDom.value,
      name: this.nameDom.value,
    });
    this.idDom.value = '';
    this.nameDom.value = '';
  }
 
  render() {
    return (
      <form>
        <h3>New Device</h3>
        <p>Device ID: <input type="text" ref={dom => this.idDom = dom}/></p>
        <p>Device Name: <input type="text" ref={dom => this.nameDom = dom}/></p>
        <button onClick={this.addOnClick}>
          <h3>Add</h3>
        </button>
      </form>
    );
  }
}

class DeviceApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: deviceJson
    };
  }

  onAddDevice = (device) => {
    this.setState({
      list: [...this.state.list, device]
    });
  }

  render() {
    return (
      <div>
        <DeviceAdd onChange={this.onAddDevice}/>
        <DeviceList list={this.state.list}/>
      </div>
    );
  }
}

ReactDOM.render(
  <DeviceApp />,
  document.getElementById('root'),
)
