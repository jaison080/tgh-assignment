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
        <div className="homepage__container"
        data-aos="fade-up"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
          <select
            className="homepage__container_select"
            
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

            <option value={"None"}>{"Any"}</option>
          </select>
        <button
          className="homepage__container_button"
          onClick={() => {
            if (tag && tag !== "None") {
              getRandomQuotebyTag(tag).then(() => {
                setTag("None");
              });
            }
            getRandomQuote();
          }}
        >
          Next Quote
        </button>

        </div>
      </div>
    </>
  );
}

export default HomePage;
