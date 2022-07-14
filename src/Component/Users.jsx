import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Cart } from "./Cart";
import { Navbar } from "./Navbar";

export const Users = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [page, setpage] = useState(1);
  const [total, settotal] = useState(0);

  const getdata = () => {
    axios
      .get(`https://api.github.com/search/users?q=${text}&per_page=10&&page=${page}`)
      .then((e) => {
        setData(e.data.items);
         settotal(e.data.total_count);
      });
  };
  useEffect(() => {getdata()}, [page]);

  return (
    <div>
      <div className="navbar">
        <Navbar getData={getdata} text={text} setText={setText} />
      </div>
      <div className="buton">
      <button disabled={page===1} onClick={() => setpage(page - 1)}>Prev</button>
        <button disabled={page*10 > total} onClick={() => setpage(page + 1)}>Next</button>
      </div>
      <div>
        {data.length > 0 &&
          data?.map((item, index) => {
            return <Cart item={item} />;
          })}        
      </div>
    </div>
  );
};
