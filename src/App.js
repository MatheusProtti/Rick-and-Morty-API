import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {

  const [page, setPage] = useState(1)
  const [ characterData, setCharacterData] = useState([])

  let url = `https://rickandmortyapi.com/api/character/?page=${page}`

  const nextPage = () => {
    setPage((prevNumber) => prevNumber + 1)
  }

  const previusPage = () => {
    if(page !== 1){
      setPage((prevNumber) => prevNumber - 1)
    }
  }

  useEffect(() => {

    async function fetchData() {
      let data = await fetch(url)
       .then((res) => res.json());
      
      setCharacterData(data.results)
    }
  
    fetchData()
  }, [url]);

  return (
    <div className="App">
      <Header />
      
      <div className='containerCards'>
          <div className='pagination'>
            <img src='./Images/previous.png' alt='' className='prevButton' onClick={previusPage}/>
            <p>Page: {page}</p>
            <img src='./Images/previous.png' alt='' className='nextButton' onClick={nextPage}/>
          </div>
          <Card characters={characterData} />
      </div>  
    </div>
  );
}

export default App;
