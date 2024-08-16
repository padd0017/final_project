const PostForm = () => {
  return (
    <div>
      <form
        method="POST"
        action="/mine"
        className="searchForm"
        encType="multipart/form-data"
      >
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="title"
            id="title"
            required
          ></input>

          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="description"
            id="description"
            required
          ></input>

          <label htmlFor="images">Upload Images</label>
          <input type="file" name="images" accept="image/*" multiple required />

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
