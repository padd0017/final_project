// const created = async () => {

//   let a = await fetch("http://localhost:3000/mine", {method:"POST"})
// //   let b = await a.json();
// console.log({a});

//   // useEffect(async()=>{
//   //     let a= await fetch("/mine");
//   //     let b= await a.json()
//   // console.log(b)

//   // },[])

//   return (
//     <div>
//       <h2>Create</h2>
//     </div>
//   );
// };

// export default created;

// pages/created.js or app/created/page.js

'use client'; // Ensure this is a client component

import { useEffect, useState } from 'react';

const Created = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/mine'); // Make a GET request to /mine
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.data); // Assuming the data is under a 'data' key
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Created Page</h2>
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>Location: {data.location.coordinates.join(', ')}</p>
        <p>Status: {data.status}</p>
        {data.images.length > 0 ? (
          <img src={data.images[0]} alt={data.title} style={{ maxWidth: '100%' }} />
        ) : (
          <p>No image available</p>
        )}
      </div>
    </div>
  );
};

export default Created;
