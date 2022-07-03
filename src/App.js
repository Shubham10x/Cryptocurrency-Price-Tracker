import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import Axios from 'axios'
import Coin from './component/Coin'
function App() {
  const [listofcoins,setlistofcoins]=useState([])
  const [searchWord, setSearchWord] = useState("");
  useEffect(()=>{
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((Response)=>{
setlistofcoins(Response.data.coins)
    })
  },[])
  const filteredCoins = listofcoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">
      <div className="bruh">
        <input type="text" className='ko' placeholder='Search Crypto Here'  onChange={(event) => {
            setSearchWord(event.target.value);
          }}/></div>
      <div className="joi">{filteredCoins.map((coin)=>{return <Coin 
      name={coin.name} 
      icon={coin.icon}
      price={coin.price} 
      symbol={coin.symbol}/> })}</div>
      </div>
  );
}

export default App;
