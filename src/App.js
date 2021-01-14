import Body from './comps/body'
import Header from './comps/header'
import './styles/app.css'
const Data =  require('./data.json')

function App() {
  return (
    <div className="App">
      <Header />
      <Body data={Data} />
    </div>
  );
}

export default App;
