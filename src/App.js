import logo from './logo.svg';
import Header from './components/header';
import Content from './components/Content';
import data from './components/Data'

function App() {
  const propData = data.map(event =>{
    return <Content 
    key={event.id}
    {...event}
    />
  })
  return (
    <div className="App">
      <Header />
      <section className='card--list'>
        {propData}
      </section>
    </div>
  );
}

export default App;
