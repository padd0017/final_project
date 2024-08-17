import GET from "./action";

const Crap = async (props) => {
  const { keyword, distance, lat, long } = props.searchParams;

  const jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmJjMmY1MWIxNzZiOTRkYjYyNWZkOGUiLCJuYW1lIjoiRWthbSBTaW5naCIsImdvb2dsZUlkIjoiMTA1NzY5MTM2NTU1ODUxMzI0NTcyIiwiY3JlYXRlZEF0IjoiMjAyNC0wOC0xNVQwNjoyNTozMC41OTZaIiwidXBkYXRlZEF0IjoiMjAyNC0wOC0xNVQwNjoyNTozMC41OTZaIiwiaWF0IjoxNzIzNzAzMTMwLCJleHAiOjE3MjM3ODk1MzB9.WVW_itD_IEPOhF_DRfWHejo00VHyGwOgLzruJ0xvkBo";
  let url = `http://localhost:4000/api/crap/?distance=${distance}&keyword=${keyword}&long=${long}&lat=${lat}`;

  const api = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  });

  const { data } = await api.json();

  console.log(data);

  console.log("we are now in create crap page");

  return (
    <div className="wrap">
      {data.map((item) => (
        <div className="cardd" key={item._id}>
          <h2 className="cardd-title">{item.title}</h2>

          {item.images.length > 0 ? (
            <img className="getAllImg" src={item.images[0]} alt={item.title} />
          ) : (
            <p>No image</p>
          )}

          <p className="cardd-status">Status: {item.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Crap;
