# A Simple Popup Tip Component for Vue.js
[![npm version](https://www.npmjs.com/package/@myu68/toast-designer)]()

## Installation
```
npm i @myu68/toast-designer
```

## Usage
In `main.js` of a Vue Project:
```javascript
import toast from '@myu/toast-designer';
Vue.use(toast);
```

In any Vue component, you can simply use `this.$toast()` to popup a tip:
```javascript
<script>
export default {
  mounted() {
    this.$toast({
      type: 'success',
      msg: 'Fight!'
    });
  }
}
</script>
```

## Options and Defaults
### type
*string*  
Default value is `success`.  
Type of toast, could be one of these values: `success` | `warning` | `danger` | `loading`.

### msg
*string*  
The info you want to show on the toast. (should be short)

### duration
*number*  
Default value is `3`.  
How many seconds he toast should be shown, after that it could disapear automaticly.  
Specially, you can set a value of `-1`, which means showing the toast forever.

### position
*string*  
Default value is `top-center`.  
Position of toast, could be one of these values: `top-left` | `top-center` | `top-right` | `bottom-left` | `bottom-center` | `bottom-right` | `center-center`.

### fullWith
*boolean*  
Default value is `false`.  
Determines the toast appears in a full-with way or not.


## Example
```javascript
this.$toast({
  type: 'warning',
  msg: 'Caution!',
  duration: 6,
  position: 'top-center',
  fullWith: false
});
```
