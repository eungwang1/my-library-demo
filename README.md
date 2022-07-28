# openknowl-eungwang-library

## Installation

```
$ npm install --save openknowl-eungwang-library
$ yarn add openknowl-eungwang-library
```

## Guide

### useToast

@ required

```javascript
// root경로 (ex. App.tsx)
<div id='toast-root' />
```

@ the gist

```javascript
const { openToast } = useToast()
;<button
  onClick={() => {
    openToast({
      type: 'success',
      message: 'wow!',
    })
  }}
>
  click
</button>
```

## Demo

### useToast

https://codesandbox.io/s/romantic-mayer-5lclub?file=/src/App.tsx

## Props

### openToast

| Prop name | type                                     | Default value | required |
| --------- | ---------------------------------------- | ------------- | -------- |
| type      | "success" \| "error" \| "warn" \| "info" | n/a           | O        |
| message   | string                                   | ''            | X        |
