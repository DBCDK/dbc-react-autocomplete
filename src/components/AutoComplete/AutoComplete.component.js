'use strict';

import React from 'react';
import AutoCompleteCategory from './../AutoCompleteCategory.component.js';

import './AutoComplete.scss';

const _DATA = [{label: 'author', data: ['Test', 'Hest', 'Fest', 'Gæst']}];

let AutoComplete = React.createClass({
  render() {
    let categories = this._getCategories();
    let classNames = 'autocomplete--container';
    classNames += (this.props.visible === true) ? '' : ' autocomplete--container-hidden';

    return (
      <div className={classNames} >
        {categories}
      </div>
    );
  },

  _getCategories() {
    let categories = [];
    _DATA.forEach((value, key) => {
      categories.push(<AutoCompleteCategory key={key} label={value.label} />);
    });

    return categories;
  }
});

export default AutoComplete;
