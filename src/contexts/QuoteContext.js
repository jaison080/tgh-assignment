import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BackendBaseUrl } from "../configs/urls";

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("None");
  const [tags, setTags] = useState();
  const [bookmarkedQuotes, setBookmarkedQuotes] = useState([]);
  useEffect(() => {
    getRandomQuote();
    getTags();
    getBookmarksfromLocalStorage();
  }, []);
  function getBookmarksfromLocalStorage() {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    if (bookmarks) {
      setBookmarkedQuotes(bookmarks);
    }
  }
  function addBookmark(quote) {
    const newBookmarks = [...bookmarkedQuotes, quote];
    setBookmarkedQuotes(newBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  }
  function removeBookmark(id) {
    const newBookmarks = bookmarkedQuotes.filter((quote) => quote._id !== id);
    setBookmarkedQuotes(newBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  }
  async function getRandomQuote() {
    await axios.get(`${BackendBaseUrl}/random`).then((res) => {
      setQuote(res.data);
      setLoading(true);
    });
  }
  async function getRandomQuotebyTag(tag) {
    await axios.get(`${BackendBaseUrl}/random?tags=${tag}`).then((res) => {
      setQuote(res.data);
      setLoading(true);
    });
  }
  async function getTags() {
    await axios.get(`${BackendBaseUrl}/tags`).then((res) => {
      setTags(res.data);
      setLoading(true);
    });
  }

  return (
    <QuoteContext.Provider
      value={{
        quote,
        loading,
        tag,
        tags,
        bookmarkedQuotes,
        setBookmarkedQuotes,
        setTag,
        setLoading,
        setQuote,
        setTags,
        getRandomQuote,
        getRandomQuotebyTag,
        addBookmark,
        removeBookmark,
        getTags,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
