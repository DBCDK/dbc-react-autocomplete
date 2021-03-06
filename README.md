# dbc-react-autocomplete

**Deprecated! Use [dbc-react-components](https://github.com/DBCDK/dbc-react-components) instead.**

[![GitHub tag](https://img.shields.io/github/tag/DBCDK/dbc-react-autocomplete.svg?style=flat-square)](https://github.com/DBCDK/dbc-react-autocomplete)
[![David](https://img.shields.io/david/DBCDK/dbc-react-autocomplete.svg?style=flat-square)](https://david-dm.org/DBCDK/dbc-react-autocomplete#info=dependencies)
[![David](https://img.shields.io/david/dev/DBCDK/dbc-react-autocomplete.svg?style=flat-square)](https://david-dm.org/DBCDK/dbc-react-autocomplete#info=devDependencies)

Node module that delivers a generic autocomplete functionality.

No input field is provided within this component as it should be attached an existing input field in your application.
See the examplesfolder for an working example of implementation.

## API
This autocomplete component takes the following parameteres (props) when implemented:

### visible (boolean)
  Defines whether the autocomplete shuld be visible a not.
  Default value is ```fal7se```

```javascript
  // This will show the autocomplete 
  <AutoComplete visible={true} />
  
  // This will hide the autocomplete 
  <AutoComplete visible={false} />
```

### data (Array)
The data to be shown in the autocomplete container.
This data should be structured as JSON-objects wrapped in an array. See below for an example or take a look in ```examples/app.js```.

```javascript
  //data example
  let data = [
    {
      label: 'Title',
      data: [
        {
          text: 'Test Hest',
          img: 'http://dummyimage.com/50x50/000/fff'
        }
      ]
    },
    {
      label: 'Author',
      data: [
        {
          text: 'Hest Hest',
          img: ''
        },
        {
          text: 'Fest Hest',
          img: ''
        }
      ]
    }];
    
    //implemntation example
    <AutoComplete visible={true} data={data} />
```
