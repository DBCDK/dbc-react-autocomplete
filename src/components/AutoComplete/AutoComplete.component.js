'use strict';

/**
 * @file Main autocomplete component
 */

import React from 'react';
import AutoCompleteCategory from './../AutoCompleteCategory/AutoCompleteCategory.component.js';

export default React.createClass({
  render() {
    const categories = this._getCategories();
    let classNames = 'autocomplete--container';
    classNames += (this.props.visible === true) ? '' : ' autocomplete--container-hidden';

    return (
      <div className={classNames}>
        {categories}
      </div>
    );
  },

  /*
   * Retrieves the categories from the data prop and renders a
   * AutoCompleteCategory for each category.
   *
   * @return {Array}
   */
  _getCategories() {

    let categories = [];
    const data = this.props.data || [];
    data.forEach((value, key) => {
      categories.push(
        <AutoCompleteCategory key={key} label={value.label} data={value.data}/>);
    });

    return categories;
  },

  propTypes: {
    visible: React.PropTypes.bool,
    data: React.PropTypes.array
  }
});
