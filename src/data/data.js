const today = new Date()
const formatted = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
const data = [
  {
    id: 1, 
    name: 'Setup React app using create-react-app',
    selected: false,
    created_at: formatted,
  },
  {
    id: 2, 
    name: 'Install Redux using react-redux',
    selected: false,
    created_at: formatted
  },
  {
    id: 3, 
    name: 'Setup reducers and actions',
    selected: false,
    created_at: formatted
  },
  {
    id: 4, 
    name: 'Connect actions to container components',
    selected: false,
    created_at: formatted
  },
  {
    id: 5, 
    name: 'Pass action props to presentational components',
    selected: false,
    created_at: formatted
  },
  {
    id: 6, 
    name: 'Add some styles using SemanticUI React',
    selected: false,
    created_at: formatted
  },

  
]

export default data;