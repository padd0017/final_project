import Detail from "./Detail";

const getOnePage = async (props) => {
  console.log(props.params.id);
  let id = props.params.id;

  let jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmJjMmY1MWIxNzZiOTRkYjYyNWZkOGUiLCJuYW1lIjoiRWthbSBTaW5naCIsImdvb2dsZUlkIjoiMTA1NzY5MTM2NTU1ODUxMzI0NTcyIiwiY3JlYXRlZEF0IjoiMjAyNC0wOC0xNFQxNjowNjoyNC4yNjFaIiwidXBkYXRlZEF0IjoiMjAyNC0wOC0xNFQxNjowNjoyNC4yNjFaIiwiaWF0IjoxNzIzNjUxNTg0LCJleHAiOjE3MjM3Mzc5ODR9.bHTT0hS8YSfOYs80hEOLLjk8-pxT7xgDlY8dYqNPJVg";

  let data = await fetch(`http://localhost:4000/api/crap/${id}`, {
    method: "GET",
    headers: {
      Authorization: `bearer ${jwt}`,
      "Content-Type": "application/json", // could maybe changed to retrieve files
    },
  });
  let ekam = await data.json();

  return (
    <div>
      {ekam.data.status == "AVAILABLE" && (
        <button className="intBtn">I am interested in this</button>
      )}

      <Detail stuff={ekam} />
    </div>
  );
};

export default getOnePage;
