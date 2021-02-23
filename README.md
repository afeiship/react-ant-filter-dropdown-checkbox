# react-ant-filter-dropdown-checkbox
> Filter dropdown for checkbox.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-filter-dropdown-checkbox
```

## properties
| Name          | Type   | Required | Default | Description                           |
| ------------- | ------ | -------- | ------- | ------------------------------------- |
| className     | string | false    | -       | The extended className for component. |
| value         | array  | false    | -       | Default value.                        |
| items         | array  | false    | []      | The dropdown menu items.              |
| selectAllText | any    | false    | '全选'  | Select all text.                      |
| onChange      | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-filter-dropdown-checkbox/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-filter-dropdown-checkbox/dist/style.scss";

  // customize your styles:
  $react-ant-filter-dropdown-checkbox-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntFilterDropdownCheckbox from '@jswork/react-ant-filter-dropdown-checkbox';
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

  ```

## documentation
- https://afeiship.github.io/react-ant-filter-dropdown-checkbox/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-filter-dropdown-checkbox/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-filter-dropdown-checkbox
[version-url]: https://npmjs.org/package/@jswork/react-ant-filter-dropdown-checkbox

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-filter-dropdown-checkbox
[license-url]: https://github.com/afeiship/react-ant-filter-dropdown-checkbox/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-filter-dropdown-checkbox
[size-url]: https://github.com/afeiship/react-ant-filter-dropdown-checkbox/blob/master/dist/react-ant-filter-dropdown-checkbox.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-filter-dropdown-checkbox
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-filter-dropdown-checkbox
