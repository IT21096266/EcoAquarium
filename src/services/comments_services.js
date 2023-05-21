
import { firestore } from './firebase-config'
import {
  fetchComments,
  addComment,
  updateComment,
  deleteComment
} from "../services/comments_services";

export const fetchComments = async (postId) => {
  try {
    const commentsRef = db.collection("comments").where("postId", "==", postId);
    const snapshot = await commentsRef.get();
    const comments = [];
    snapshot.forEach((doc) => {
      comments.push({ id: doc.id, ...doc.data() });
    });
    return comments;
  } catch (error) {
    console.log("Error fetching comments:", error);
    return [];
  }
};


export const addComment = async (postId, content) => {
  try {
    const comment = {
      postId,
      content,
      createdAt: new Date().toISOString(),
    };
    const docRef = await db.collection("comments").add(comment);
    return { id: docRef.id, ...comment };
  } catch (error) {
    console.log("Error adding comment:", error);
    return null;
  }
};

// update an existing comment
export const updateComment = async (commentId, content) => {
  try {
    await db.collection("comments").doc(commentId).update({
      content,
    });
    return true;
  } catch (error) {
    console.log("Error updating comment:", error);
    return false;
  }
};

//  delete a comment
export const deleteComment = async (commentId) => {
  try {
    await db.collection("comments").doc(commentId).delete();
    return true;
  } catch (error) {
    console.log("Error deleting comment:", error);
    return false;
  }
};
