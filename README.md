# Bootstrap-Common-Components

Set of components using Boostrap v-4 classes for react.

The collection currently contains - 

1.  Header
2.  Footer
3.  Banner
4.  Link
5.  Card

Future components - 

1. Buttons
2. Dropdown
3. Rating
4. TextBox Input
5. PopUp
6. Checkbox/Radio button
7. SearchBox

# Usage

1. create component folder by name inside Components/
2. Add components.js and componnets.css in the folder.
3. Default export the component.
4. Add the component in the index.js.

# Passing css to components

```javascript
import {Header} from '../path/to/components/';
import css from '/path/to/stylesheet/';

const classes = {
  container: `${css.container-class}`,
  image: `${css.image-class}`
}

<Header classes={classes} />

```

#Todo

Build a test page to display components.
