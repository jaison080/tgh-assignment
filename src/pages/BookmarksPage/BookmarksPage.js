import React, { useContext } from "react";
import { BookmarkedCard } from "../../components";
import { QuoteContext } from "../../contexts/QuoteContext";
import "../../components/QuoteCard/QuoteCard.css";
import "./BookmarksPage.css";
import { CustomTitle } from "../../utils";

function BookmarksPage() {
  const { bookmarkedQuotes } = useContext(QuoteContext);
  if (bookmarkedQuotes.length === 0) {
    return (
      <>
        <CustomTitle title="Bookmarks" />
        <div className="bookmarkspage__container">
          <div className="quote__container_quote" data-aos="fade-up">
            No Bookmarks
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <CustomTitle title="Bookmarks" />
      <div className="bookmarkspage__container">
        {bookmarkedQuotes.map((data) => {
          return <BookmarkedCard quote={data} key={data._id} />;
        })}
      </div>
    </>
  );
}

export default BookmarksPage;
