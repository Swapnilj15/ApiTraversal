import React, { useState, useEffect } from "react";

import "../index.css";

function FetchData() {
  const [data, setData] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  //   const [edit, setEdit] = useState(false);
  const URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setData(response);
      });
  };
  function handleClickDelete(id) {
    setData((prevEvent) => {
      return prevEvent.filter((item) => {
        return id !== item.id;
      });
    });
  }

  function handleClickEdit(id) {
    alert(id);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <div className="table">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {data
            .filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.title.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
            .map((item, i) => (
              <tr key={i}>
                {/* <SearchData title={item.title} /> */}
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td
                  className="pointer"
                  onClick={() => handleClickEdit(item.id)}
                >
                  Edit
                </td>
                <td
                  className="pointer"
                  onClick={() => handleClickDelete(item.id)}
                >
                  Delete
                </td>
              </tr>
            ))}
        </tbody>
      </div>
    </>
  );
}

export default FetchData;
