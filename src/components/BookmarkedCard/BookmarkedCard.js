import React, { useContext } from "react";
import { BsFillBookmarkXFill } from "react-icons/bs";
import { QuoteContext } from "../../contexts/QuoteContext";
import "../QuoteCard/QuoteCard.css";

function BookmarkedCard({ quote }) {
  const { removeBookmark } = useContext(QuoteContext);
  return (
    <div className="quote__container" data-aos="fade-up">
      <div className="quote__container_quote">{quote?.content}</div>
      <div
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <div className="quote__container_author">-{quote?.author}</div>
        <BsFillBookmarkXFill
          className="quote__container_bookmark"
          onClick={() => {
            removeBookmark(quote._id);
            alert("Bookmark Removed");
          }}
        />
      </div>
    </div>
  );
}

export default BookmarkedCard;
