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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function getBookmarksfromLocalStorage() {
    setBookmarkedQuotes([]);
    if (localStorage.getItem("bookmarks") !== null) {
      const ids = JSON.parse(localStorage.getItem("bookmarks"));
      let temp = [];
      ids.forEach(async (id) => {
        await axios.get(`${BackendBaseUrl}/quotes/${id}`).then((res) => {
          temp.push(res.data);
          setBookmarkedQuotes(temp);
        });
      });
    }
  }
  function addBookmark(quote) {
    localStorage.setItem(
      "bookmarks",
      JSON.stringify(
        [quote, ...bookmarkedQuotes].map(function (obj) {
          return obj._id;
        })
      )
    );
    getBookmarksfromLocalStorage();
    getRandomQuote();
  }
  function removeBookmark(id) {
    localStorage.setItem(
      "bookmarks",
      JSON.stringify(
        bookmarkedQuotes
          .filter((quote) => quote._id !== id)
          .map(function (obj) {
            return obj._id;
          })
      )
    );
    getBookmarksfromLocalStorage();
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
