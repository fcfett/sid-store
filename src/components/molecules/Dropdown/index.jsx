import React, { Component, createRef } from 'react';
import './style.scss';

import Trigger from '../Trigger';
import Icon from '../../atoms/Icon';
import Helpers from '../../../utils/helpers';
import Validators from '../../../utils/validators';

const INITIAL_STATE = {
  selected: [],
  changed: false
};

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.toggleRef = createRef();
    this.setToggle = this.setToggle.bind(this);
    this.bindOptions = this.bindOptions.bind(this);
    this.getSelected = this.getSelectionLabel.bind(this);
    this.setSelected = this.setSelected.bind(this);
    this.setInitalValue = this.setInitalValue.bind(this);
    this.hasChanged = this.hasChanged.bind(this);
    this.getOptionIndex.bind(this);
  }

  componentDidMount() {
    if (!Validators.isUndefined(this.props.selected)) {
      this.hasInitialized = false;
      this.setInitalValue();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { onChange } = this.props;
    if (onChange) onChange(this);
    if (!Validators.isUndefined(this.props.selected)) {
      const { data } = this.props;

      if (!Helpers.areEqualObjects(data, prevProps.data) && data) {
        this.setInitalValue();
      }

      if (this.hasInitialized && onChange) {
        const { selected } = this.state;
        if (!Helpers.areEqualObjects(selected, prevState.selected)) onChange(selected);
      }

      this.hasInitialized = true;
    }
  }

  hasChanged() {
    const { changed } = this.state;
    return changed || false;
  }

  setInitalValue() {
    const data = this.props.data || [];
    if (data.length > 0) {
      const { selected } = this.props;
      if (selected) {
        const selectedEntries = Object.entries(selected);
        const filteredData =
          data.filter((option) => selectedEntries.every(([key, val]) => option[key] === val)) || data;
        this.setSelected(filteredData.slice().shift());
      } else {
        this.setSelected(data.slice().shift());
      }
    }
  }

  setToggle(toggle) {
    const toggleElement = this.toggleRef.current;
    const toggleValue = Validators.isUndefined(toggle) ? !toggleElement.checked : toggle;
    toggleElement.checked = toggleValue;
  }

  getOptionIndex(option) {
    const array = [...this.state.selected];
    const key = Object.values(this.props.model.value).shift();
    for (const index in array) {
      if (array[index][key] === option[key]) return index;
    }
    return -1;
  }

  setSelected(option) {
    if (this.props.multiple) {
      const newSelected = [...this.state.selected];
      let optionIndex = this.getOptionIndex(option);
      if (optionIndex >= 0) {
        newSelected.splice(optionIndex, 1);
      } else {
        newSelected.push(option);
      }
      this.setState({ selected: newSelected, changed: true });
    } else {
      const checkbox = this.toggleRef;
      if (checkbox) checkbox.current.checked = false;
      this.setState({ selected: [{ ...option }], changed: true });
    }
  }

  toggleAllSelected() {
    const { data } = this.props;
    const { selected } = this.state;
    const selectedData = data.length === selected.length ? [] : data;
    this.setState({ selected: selectedData, changed: true });
  }

  getSelectionLabel() {
    const { selected } = this.state;
    const {
      data,
      multiple,
      model: { key }
    } = this.props;

    if (!data || data.length === 0) return 'Sem opções';
    if (!selected || selected.length === 0) return 'Selecione';
    if (multiple && selected.length === data.length) return 'Todos';

    const firstOption = selected[0];
    if (firstOption && firstOption[key]) return `${firstOption[key]}`;

    return Helpers.getEmptyPlaceholder();
  }

  isSelected(item) {
    return this.getOptionIndex(item) >= 0;
  }

  bindOptionValue(item, model) {
    if (typeof model.value === 'object') {
      const value = {};
      for (const [key, val] of Object.entries(model.value)) {
        value[key] = item[val];
      }
      return value;
    } else return item[model];
  }

  bindOptions(id, data, model) {
    return data.map((item, index) => {
      const key = item[model.key];
      return (
        <li
          key={`${id}-option-${index}`}
          title={key}
          className={`dropdown-item ${this.isSelected(item) ? 'selected' : ''}`}
          onClick={() => this.setSelected(item)}
        >
          {key}
        </li>
      );
    });
  }

  render() {
    const { id, multiple, className } = this.props;
    const { selected, changed } = this.state;
    const data = this.props.data || [];
    const model = this.props.model || {};
    const options = this.bindOptions(id, data, model);
    const hasSelected = selected.length > 0;
    const isAllSelected = selected.length === data.length;
    const hasOptions = data.length > 0;
    const mainLabel = this.getSelectionLabel();
    const othersLabel = selected.length > 1 && `+ ${selected.length - 1}`;

    const getSelectedClassName = () => (hasSelected ? (isAllSelected ? 'selected' : 'partial') : '');

    return (
      <div
        className={`dropdown ${multiple ? 'multiple' : ''} ${className ? className : ''} ${changed ? 'changed' : ''}`}
      >
        <input type="checkbox" className="toggle-dropdown hidden" id={id} ref={this.toggleRef} disabled={!hasOptions} />
        <Trigger htmlFor={id} className="btn-trigger-dropdown" title={`${mainLabel} ${othersLabel || ''}`}>
          <span>
            {mainLabel}
            {!isAllSelected && othersLabel && <strong className="others">{othersLabel}</strong>}
          </span>
          <Icon name="down" height={18} width={18} />
        </Trigger>
        <div className="dropdown-options">
          <ul className="dropdown-list">
            {multiple && (
              <li
                key={`${id}-option-all`}
                title="Todos"
                className={`dropdown-item ${getSelectedClassName()}`}
                onClick={() => this.toggleAllSelected()}
              >
                Todos
              </li>
            )}
            {options}
          </ul>
        </div>
      </div>
    );
  }
}
