import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { Dropdown, Checkbox, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import nxToggle from '@feizheng/next-toggle';

const CLASS_NAME = 'react-ant-filter-dropdown-checkbox';

export default class ReactAntFilterDropdownCheckbox extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    value: PropTypes.array,
    /**
     * The dropdown menu items.
     */
    items: PropTypes.array,
    /**
     * Select all text.
     */
    selectAllText: PropTypes.any,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    items: [],
    selectAllText: '全选',
    onChange: noop
  };

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = {
      visible: false,
      value: value || []
    };
  }

  get values() {
    const { items } = this.props;
    return items.map((item) => item.value);
  }

  get menu() {
    const { items } = this.props;
    const { value } = this.state;
    return (
      <Menu>
        {items.map((item, index) => {
          return (
            <Menu.Item key={index}>
              <Checkbox
                checked={value.includes(item.value)}
                value={item.value}
                onChange={this.handleItemClick}>
                {item.label}
              </Checkbox>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }

  handleVisibleChange = (inEvent) => {
    this.setState({ visible: inEvent });
  };

  handleItemClick = (inEvent) => {
    const { value } = this.state;
    nxToggle(value, inEvent.target.value);
    this.handleChange(value);
  };

  handleAllChange = (inEvent) => {
    const { checked } = inEvent.target;
    const _value = checked ? this.values : [];
    this.handleChange(_value);
  };

  handleChange(inValue) {
    const { onChange } = this.props;
    const target = { value: inValue };
    this.setState(target, () => {
      onChange({ target });
    });
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value && value !== this.state.value) {
      this.setState({ value });
    }
    return true;
  }

  render() {
    const {
      className,
      value,
      items,
      onChange,
      selectAllText,
      ...props
    } = this.props;
    const { visible } = this.state;
    const _value = this.state.value;

    return (
      <Dropdown
        overlay={this.menu}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        visible={visible}
        onVisibleChange={this.handleVisibleChange}
        {...props}>
        <span className={`${CLASS_NAME}__body`} data-visible={visible}>
          <Checkbox
            indeterminate={_value.length > 0 && _value.length < items.length}
            checked={_value.length === items.length}
            onChange={this.handleAllChange}>
            {selectAllText}
          </Checkbox>
          <DownOutlined className={`${CLASS_NAME}__icon`} />
        </span>
      </Dropdown>
    );
  }
}
