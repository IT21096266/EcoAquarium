import React, { useState } from "react";
import styles from "../Styles/styles";
import Helmet from "../components/Helmet/Helmet";

const Upload = () => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages((prevState) => [...prevState, e.target.result]);
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Text: ", text);
    console.log("Images: ", images);
    // send the data to the server
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <Helmet title="Upload Post" />
      <main className="mt-1 p-12 w-full">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>

            <h1>Add Content</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  style={{ width: "50%" }}
                  id="text"
                  placeholder="Write something..."
                  value={text}
                  onChange={handleTextChange}
                  rows="7"
                  cols="10"
                ></textarea>
              </div>
              <div className="mb-4">
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  multiple
                />
              </div>
              {images.map((image, index) => (
                <div key={index} className="mb-4">
                  <img src={image} alt="uploaded" className="w-64 h-auto" />
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                    type="button"
                    onClick={() => handleDeleteImage(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
              <div>
                {images.length > 0 && (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Post
                  </button>
                )}
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                  type="button"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Upload


