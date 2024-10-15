import { Link, Navigate } from "react-router-dom";
import "./card.scss";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { toast } from "react-toastify"; // Import toast for notifications

function Card({ item }) {
  const { currentUser } = useContext(AuthContext);
  const [saved, setSaved] = useState(false);

  // Load saved state from localStorage on component mount
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("savedPosts")) || {};
    if (savedPosts[item.id]) {
      setSaved(true); // Set saved state if the post is in localStorage
    }
  }, [item.id]);

  const handleSave = async () => {
    if (!currentUser) {
      Navigate("/login");
      return; // Early return to prevent further execution if user is not logged in
    }

    setSaved((prev) => !prev);

    // Update localStorage
    const savedPosts = JSON.parse(localStorage.getItem("savedPosts")) || {};
    if (saved) {
      delete savedPosts[item.id]; // Remove from saved posts
      toast.success("Post unsaved");
    } else {
      savedPosts[item.id] = true; // Add to saved posts
      toast.success("Post saved successfully");
    }
    localStorage.setItem("savedPosts", JSON.stringify(savedPosts)); // Update localStorage

    try {
      await apiRequest.post("/users/save", { postId: item.id }); // Use item.id here
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev); // Revert the save state on error
      toast.error("Failed to save the post"); // Show error message
    }
  };

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">₹ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div
              className="icon"
              style={{
                backgroundColor: saved ? "#fece51" : "white",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <img
                onClick={handleSave}
                src="/save.png"
                alt=""
                style={{
                  cursor: "pointer", // Change cursor to pointer to indicate it's clickable
                  filter: saved ? "none" : "grayscale(100%)", // Optional: Add a grayscale effect when unsaved
                }}
              />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
