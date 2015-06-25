'use strict';

/**
 * @file Main autocomplete component
 */

import React from 'react';
import {forIn} from 'lodash';
import AutoCompleteCategory from './../AutoCompleteCategory/AutoCompleteCategory.component.js';

export default React.createClass({
  propTypes: {
    visible: React.PropTypes.bool,
    data: React.PropTypes.object
  },

  /*
   * Retrieves the categories from the data prop and renders a
   * AutoCompleteCategory for each category.
   *
   * @return {Array}
   */
  getCategories() {

    let categories = [];
    const data = this.props.data || {};

    forIn(data, (value, key) => {
      categories.splice(value.weight, 0,
        <AutoCompleteCategory key={key} label={value.label} data={value.data} />);
    });

    return categories;
  },

  render() {
    const categories = this.getCategories();
    let classNames = 'autocomplete--container';
    classNames += this.props.visible ? '' : ' autocomplete--container-hidden';

    return (
      <div className={classNames} >
        {categories}
      </div>
    );
  }
});
