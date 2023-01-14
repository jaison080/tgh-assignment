import React, { useContext } from "react";
import { BookmarkedCard, Loader } from "../../components";
import { QuoteContext } from "../../contexts/QuoteContext";
import "../../components/QuoteCard/QuoteCard.css";
import "./BookmarksPage.css";
import { CustomTitle } from "../../utils";

function BookmarksPage() {
  const { bookmarkedQuotes, loading } = useContext(QuoteContext);
  if (!loading) {
    return (
      <>
        <CustomTitle title="Bookmarks" />
        <Loader />
      </>
    );
  }
  return (
    <>
      <CustomTitle title="Bookmarks" />
      <div className="bookmarkspage__container">
        {bookmarkedQuotes.length === 0 ? (
          <div className="quote__container_quote" data-aos="fade-up">
            No Bookmarks
          </div>
        ) : (
          bookmarkedQuotes.map((data) => {
            return <BookmarkedCard quote={data} key={data._id} />;
          })
        )}
      </div>
    </>
  );
}

export default BookmarksPage;
