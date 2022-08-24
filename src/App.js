import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Components/Table";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://api.covid19api.com/summary")
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(eror => console.log('errer'.erre));
    
    setData(response.data.Countries);
  };

  

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Table Countries={data} />
    </div>
  );
};

export default App;
