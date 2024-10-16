import "./singlePage.scss";
import Slider from "../../components/Slider/Slider";
import Map from "../../components/Map/Map";
import { useNavigate, useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function SinglePage() {
  const post = useLoaderData();
  const [saved, setSaved] = useState(post?.isSaved);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    setSaved((prev) => !prev);

    // Update localStorage
    const savedPosts = JSON.parse(localStorage.getItem("savedPosts")) || {};
    if (saved) {
      delete savedPosts[post.id]; // Remove from saved posts
    } else {
      savedPosts[post.id] = true; // Add to saved posts
    }
    localStorage.setItem("savedPosts", JSON.stringify(savedPosts)); // Update localStorage

    try {
      await apiRequest.post("/users/save", { postId: post.id });
    } catch (err) {
      console.error("Error saving the post:", err);
      setSaved((prev) => !prev); // Revert the state in case of error
    }
  };

  const handleSendMessage = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    console.log("Post object:", post); // Check the updated post structure

    try {
      // Use post.userId instead of post.user.id
      const response = await apiRequest.post("/chats", {
        receiverId: post.userId,
      });

      navigate("/profile");
      // navigate(`/chat/${response.data.id}`);
    } catch (err) {
      console.log(
        "Error creating or fetching chat:",
        err.response?.data || err.message
      );
    }
  };

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          {post.images && <Slider images={post.images} />}
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="Location pin" />
                  <span>{post.address}</span>
                </div>
                <div className="price">₹ {post.price}</div>
              </div>
              <div className="user">
                {post.user?.avatar && (
                  <img src={post.user.avatar} alt="User avatar" />
                )}
                <span>{post.user?.username}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail?.desc || ""),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="Utilities" />
              <div className="featureText">
                <span>Utilities</span>
                <p>
                  {post.postDetail?.utilities === "owner"
                    ? "Owner is responsible"
                    : "Tenant is responsible"}
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="Pet policy" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>
                  {post.postDetail?.pet === "allowed"
                    ? "Pets Allowed"
                    : "Pets not Allowed"}
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="Contact" />
              <div className="featureText">
                <span>Contact Number</span>
                <p>{post.postDetail?.phoneNumber}</p>
              </div>
            </div>
          </div>

          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="Size" />
              <span>{post.postDetail?.size} sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="Beds" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="Bathroom" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="School" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {post.postDetail?.school > 999
                    ? post.postDetail.school / 1000 + "km"
                    : post.postDetail?.school + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="Bus stop" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail?.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="Restaurant" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail?.restaurant}m away</p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button onClick={handleSendMessage}>
              <img src="/chat.png" alt="Chat icon" />
              Send a Message
            </button>
            <button
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
            >
              <img src="/save.png" alt="Save icon" />
              {saved ? "Place Saved" : "Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
