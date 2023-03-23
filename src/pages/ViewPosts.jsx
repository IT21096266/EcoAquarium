import React, { useState } from "react";
import styles from "../Styles/styles";
import Helmet from "../components/Helmet/Helmet";

function ViewPosts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post 1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      comments: [
        { id: 1, content: "Comment 1" },
        
      ],
    },
  
  ]);

  const [newComment, setNewComment] = useState("");

  const handleNewCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleNewCommentSubmit = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            { id: post.comments.length + 1, content: newComment },
          ],
        };
      } else {
        return post;
      }
    });
    setPosts(updatedPosts);
    setNewComment("");
  };

  const handleCommentEdit = (postId, commentId, newContent) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const updatedComments = post.comments.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, content: newContent };
          } else {
            return comment;
          }
        });
        return { ...post, comments: updatedComments };
      } else {
        return post;
      }
    });
    setPosts(updatedPosts);
  };

  const handleCommentDelete = (postId, commentId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const updatedComments = post.comments.filter(
          (comment) => comment.id !== commentId
        );
        return { ...post, comments: updatedComments };
      } else {
        return post;
      }
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <main className="mt-1 p-12 w-full ">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Helmet title="View Posts" />

            {posts.map((post) => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <h4>Comments</h4>
                <ul>
                  {post.comments.map((comment) => (
                    <li key={comment.id}>
                      {comment.content} <br></br>
                      <button
                        onClick={() =>
                          handleCommentEdit(
                            post.id,
                            comment.id,
                            prompt("Enter new comment content")
                          )
                        }
                      >
                        Edit
                      </button>
                      
                      <button
                        onClick={() => handleCommentDelete(post.id, comment.id)}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleNewCommentSubmit(post.id);
                  }}
                >
                  <label htmlFor="newComment">Add a new comment:</label>
                  <input
                    type="text"
                    id="newComment"
                    value={newComment}
                    onChange={handleNewCommentChange}
                  />

                  <br></br>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ViewPosts;
