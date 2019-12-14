const today = new Date()
const formatted = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
const data = [
  {
    id: 1, 
    name: 'Item1',
    selected: false,
    created_at: formatted,
  },
  {
    id: 2, 
    name: 'Item2',
    selected: false,
    created_at: formatted
  },
  {
    id: 3, 
    name: 'Item3',
    selected: false,
    created_at: formatted
  },
]

export default data;