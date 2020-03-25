# reactjs-boilerplate-compelete
complete reactjs boilerplate with API call resolver and bootstrap enabled

# Article Referance
https://medium.com/@awaisshaikh94/making-api-calls-in-react-using-redux-thunk-b3f29ca04cf7

# Code Snippets
https://gist.github.com/muhammadawaisshaikh/0bd51c748d7dd1393f30857db9250786

# Redux Implementation Steps:

> npm i redux redux-thunk redux-persist redux-logger --save

app > redux +
redux > actions > actions.js
redux > actions > taskAction.js
redux > reducers > index.js
redux > taskReducer > taskReducer.js
redux > store > store.js

- update App.js by mapDispacthToProps to call taskActions to perfrom API calls, as mentioned in code snippets/gist
- update App index.js by adding reducer and connect with store, as mentioned in code snippets/gist