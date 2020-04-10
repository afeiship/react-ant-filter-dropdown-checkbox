# react-ant-filter-dropdown-checkbox
> Filter dropdown for checkbox.

## installation
```shell
npm install -S @feizheng/react-ant-filter-dropdown-checkbox
```

## update
```shell
npm update @feizheng/react-ant-filter-dropdown-checkbox
```

## properties
| Name          | Type   | Required | Default | Description                           |
| ------------- | ------ | -------- | ------- | ------------------------------------- |
| className     | string | false    | -       | The extended className for component. |
| value         | array  | false    | []      | Default value.                        |
| items         | array  | false    | []      | The dropdown menu items.              |
| selectAllText | any    | false    | '全选'  | Select all text.                      |
| onChange      | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-filter-dropdown-checkbox/dist/style.scss";

  // customize your styles:
  $react-ant-filter-dropdown-checkbox-options: ()
  ```
2. import js
  ```js
  import ReactAntFilterDropdownCheckbox from '@feizheng/react-ant-filter-dropdown-checkbox';
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
            value={value}
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

  ```

## documentation
- https://afeiship.github.io/react-ant-filter-dropdown-checkbox/
