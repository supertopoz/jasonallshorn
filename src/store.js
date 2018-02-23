

const data = {
  title: 'Get in touch',
  titleComment: 'Do you want to get in touch or talk to me about a project? <br> Fill out the form below:',
  view: 'contact'
}

// Reducer - takes the action types and reduces them into a new state condition.
const text = (state = {}, actions) =>{
  switch (actions.type) {
    case 'UPDATE_PAGE_TEXT':
      return Object.assign({}, state, actions);
    default:
      return state
  }
}

const rollBack = (state = {}, actions) =>{
 // console.log(state)
}

// Store to hold state of the app - only one store but many properties? 
const updateText = Redux.createStore(text);
const rollBackText = Redux.createStore(text);

//Use subscribe() to update the UI in response to state changes.
updateText.subscribe(() => {
  const data = updateText.getState().data;
});

// The only way to mutate the internal state is to dispatch an action.
// Dispatch = "Please dispatch this change, please"
let index = 0;
const updateTextAction = (e) => ({type:'UPDATE_PAGE_TEXT',data})
const updateContactForm = (e) => ({type:'UPDATE_CONTACT_FORM',data})

$(document).ready(() => {
 updateText.dispatch(updateTextAction(data))
})


