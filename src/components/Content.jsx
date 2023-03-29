import axios from "axios";
import React, { useEffect, useState } from "react";

const Content = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://www.scorebat.com/video-api/v3/feed/?token=NzE2NjVfMTY4MDA1NzI5MV9mNzc1ZGM0YmVhYjdiMjZjNjZlNzc4ZjRjMzk1ZTI2ZjIzNWI4NWJi`,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data.response);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="content-container">
      {data.map((item) => (
        <div className="itemDiv" key={item.title}>
          <div className="itemHeading">
            <h4>{item.title}</h4>
          </div>
          <div className="itemImage">
            <img src={item.thumbnail} alt="#" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
