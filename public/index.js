import ReactAntFilterDropdownCheckbox from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
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
      <div className="app-container">
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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
