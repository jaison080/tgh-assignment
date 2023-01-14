import React, { useContext } from "react";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { QuoteContext } from "../../contexts/QuoteContext";
import "./QuoteCard.css";

function QuoteCard({ quote }) {
  const { addBookmark } = useContext(QuoteContext);
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
        <BsFillBookmarkPlusFill
          className="quote__container_bookmark"
          onClick={() => {
            addBookmark(quote);
            alert("Bookmark Added");
          }}
        />
      </div>
    </div>
  );
}

export default QuoteCard;
