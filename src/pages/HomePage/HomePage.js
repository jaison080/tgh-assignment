import { useContext } from "react";
import { Loader, QuoteCard } from "../../components";
import { QuoteContext } from "../../contexts/QuoteContext";
import { CustomTitle } from "../../utils";
import "./HomePage.css";

function HomePage() {
  const {
    loading,
    quote,
    tag,
    tags,
    setTag,
    getRandomQuote,
    getRandomQuotebyTag,
  } = useContext(QuoteContext);
  if (!loading) {
    return (
      <>
        <CustomTitle title="Home" />
        <Loader />
      </>
    );
  }
  return (
    <>
      <CustomTitle title="Home" />
      <div className="homepage__container">
        <QuoteCard quote={quote} />
        <div>
          <select
            className="homepage__container_select"
            data-aos="fade-up"
            value={tag}
            onChange={(e) => {
              setTag(e.target.value);
            }}
          >
            {tags?.map((data, index) => {
              return (
                <option value={data.name} key={index}>
                  {data.name}
                </option>
              );
            })}

            <option value={"None"}>{"None"}</option>
          </select>
        </div>
        <div
          className="homepage__container_button"
          data-aos="fade-up"
          onClick={() => {
            if (tag && tag !== "None") {
              getRandomQuotebyTag(tag);
              setTag("None");
            }
            getRandomQuote();
          }}
        >
          Next Quote
        </div>
      </div>
    </>
  );
}

export default HomePage;
