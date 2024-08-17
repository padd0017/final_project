const Detail = (props) => {
  let { data } = props.stuff;
  console.log({ Component: data });

  const { title, description, images, status } = data;
  console.log({ title, description, images, status });

  return (
    <div className="card-header">

      <div >
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        <p>{description}</p>
        {images.length > 0 ? (
          <div className="card-images">
            {images.map((image, index) => (
              <img key={index} src={image} alt={title} />
            ))}
          </div>
        ) : (
          <p>No images available</p>
        )}
      </div>
      <div className={`card-status ${status.toLowerCase()}`}>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default Detail;
