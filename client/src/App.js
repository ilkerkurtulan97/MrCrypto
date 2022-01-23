import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Navigation from "./components/Navigation";
import Coin from "./components/Coin";
import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");

  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      pageCountSet();
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        setUserName(res.data.name);
        setUserSurname(res.data.surname);
        console.log(res.data.name);
        console.log(res.data.surname);
      })
      .catch((err) => {
        console.log("Could not get profile data !");
      });
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const getCoins = (currentPage) => {
    const res = axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`
    )
    .then((res) => {
      setCoins(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  }

  const handlePageClick = (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    getCoins(currentPage);

  }

  const pageCountSet = () => {
    const total = 100
    setPageCount(Math.ceil(total/10));
  }

  return (
    <div className="coin-app">
      <Navigation username={userName} surname={userSurname} />
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          ></input>
        </form>
      </div>

      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.total_volume}
          />
        );
      })}

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default App;
