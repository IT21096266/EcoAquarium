import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { storage } from "../services/firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import styles from "../Styles/styles";
import jsPDF from "jspdf";
import "jspdf-autotable";

const UploadContent = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(null);
  const [commentContent, setCommentContent] = useState("");

  const upload = async () => {
    setLoading(true);

    try {
      const storageRef = ref(storage, `Images/Upload/${Date.now()}-${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      await uploadTask;
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

      setContent("");
      setImage(null);

      // Add the posted content to the posts
      setPosts([...posts, { content, imageURL: downloadURL, comments: [] }]);

      //  comment form
      setShowCommentForm(true);
    } catch (error) {
      console.log(error);
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setContent("");
    setImage(null);
    setShowCommentForm(false);
  };

  const handleAddComment = (postIndex, comment) => {
    const updatedPosts = [...posts];
    updatedPosts[postIndex].comments.push(comment);
    setPosts(updatedPosts);
  };

  const handleDeleteComment = (postIndex, commentIndex) => {
    const updatedPosts = [...posts];
    updatedPosts[postIndex].comments.splice(commentIndex, 1);
    setPosts(updatedPosts);
  };

  const handleEditComment = (postIndex, commentIndex) => {
    setSelectedCommentIndex(commentIndex);
    setCommentContent(posts[postIndex].comments[commentIndex]);
  };

  const handleUpdateComment = (postIndex, commentIndex) => {
    const updatedPosts = [...posts];
    updatedPosts[postIndex].comments[commentIndex] = commentContent;
    setPosts(updatedPosts);
    setSelectedCommentIndex(null);
    setCommentContent("");
  };

  const handleDeletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Posted Content", 10, 10);

    posts.forEach((post, index) => {
      doc.setFontSize(12);
      doc.text(`Post ${index + 1}: ${post.content}`, 10, 20 + index * 30);
      if (post.imageURL) {
        doc.addImage(post.imageURL, "JPEG", 10, 25 + index * 30, 50, 50);
      }

      doc.setFontSize(14);
      doc.text("Comments", 10, 30 + index * 30);

      post.comments.forEach((comment, commentIndex) => {
        doc.setFontSize(12);
        doc.text(`Comment ${commentIndex + 1}: ${comment}`, 10, 35 + index * 30 + commentIndex * 10);
      });
    });

    doc.save("content.pdf");
  };

  return (
    <div className="bg-primary w-full h-full flex items-center justify-center">
      <div className="w-2/3">
        <Helmet title="Address List">
          <div style={{ textAlign: "center", fontSize: "30px" }}>Welcome to the Community</div>
          <br />
          Add your questions here:
          <br />
          <textarea
            name="postContent"
            rows={4}
            cols={40}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.textarea}
          ></textarea>
          <br />
          <div>
            <label htmlFor="image">Upload:</label>
            <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <br />
          <div className={styles.imagePreview}>
            {image && <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ width: "100px" }} />}
          </div>
          <div className={styles.buttonContainer}>
            <button
              type="button"
              onClick={upload}
              disabled={!content || !image || isLoading}
              className={`${styles.button} font-semibold ${styles.ALbtn}`}
            >
              {isLoading ? "Uploading..." : "Post"}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className={`${styles.button} font-semibold ${styles.ALbtn}`}
              style={{ marginLeft: "10px" }}
            >
              Clear
            </button>
          </div>
          <br></br>
          <br></br>
          <hr></hr>
        </Helmet>
        {posts.length > 0 && (
          <div className="posted-content">
            <h2>Posted</h2>
            {posts.map((post, postIndex) => (
              <div key={postIndex} className="post">
                <p>{post.content}</p>
                {post.imageURL && (
                  <div className="image-container">
                    <img src={post.imageURL} alt="Posted" className="posted-image" />
                  </div>
                )}
                <button onClick={() => handleDeletePost(postIndex)}>Delete</button>

                {showCommentForm && (
                  <div className="comments">
                    <br></br>
                    {post.comments.map((comment, commentIndex) => (
                      <div key={commentIndex}>
                        {selectedCommentIndex === commentIndex ? (
                          <div style={{ display: "flex", marginTop: "10px" }}>
                            <input
                              type="text"
                              value={commentContent}
                              onChange={(e) => setCommentContent(e.target.value)}
                            />
                            <button onClick={() => handleUpdateComment(postIndex, commentIndex)}>Save</button>
                          </div>
                        ) : (
                          <>
                            <p>{comment}</p>
                            <div style={{ display: "flex", marginTop: "10px" }}>
                              <button
                                style={{ marginRight: "20px", fontStyle: "italic" }}
                                onClick={() => handleEditComment(postIndex, commentIndex)}
                              >
                                Edit
                              </button>
                              <button
                                style={{ fontStyle: "italic" }}
                                onClick={() => handleDeleteComment(postIndex, commentIndex)}
                              >
                                Delete
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                    <form
                      className="comment-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        const commentContent = e.target.elements.commentContent.value;
                        handleAddComment(postIndex, commentContent);
                        e.target.reset();
                      }}
                    >
                      <input type="text" name="commentContent" placeholder="Add a comment..." />
                      <button type="submit">Add</button>
                    </form>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        <br></br>
        <br></br>
        <div className={styles.buttonContainer}>
          {posts.length > 0 && (
            <button
              type="button"
              onClick={handleGeneratePDF}
              className={`${styles.button} font-semibold ${styles.ALbtn}`}
            >
              Generate
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadContent;
