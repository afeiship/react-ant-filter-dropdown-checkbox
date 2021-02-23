import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntFilterDropdownCheckbox from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = { value: [] };
  render() {
    const items = [
      { value: 'blank', label: '空白单元格' },
      { value: 'not-filled', label: '未填单元格' },
      { value: 'fixed', label: '已修正' }
    ];
    const { value } = this.state;
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-ant-filter-dropdown-checkbox">
        <ReactAntFilterDropdownCheckbox
          items={items}
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}
        />

        <div className="code-container">
          <div className="is-code">
            <pre>
              <code>{JSON.stringify(items, null, 2)}</code>
            </pre>
          </div>
          <div className="is-code">
            <pre>
              <code>{JSON.stringify(value, null, 2)}</code>
            </pre>
          </div>
        </div>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
