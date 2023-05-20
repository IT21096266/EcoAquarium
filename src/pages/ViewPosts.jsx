import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { storage } from "../services/firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import styles from "../Styles/styles";

const ViewPosts = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    getPosts().then(content => setContent(content));
  }, []);

  return (
    <div>
      {content.map((doc) => (
        <div key={doc.id}>
          <h4>{doc.title}</h4>
          <p>{doc.content}</p>
          <img src={doc.imageUrl} alt="Post Image" />
        </div>
      ))}
    </div>
  );
};

export default ViewPosts;
