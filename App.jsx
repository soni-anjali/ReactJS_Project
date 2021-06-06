import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Note
        name="Javascript and React.Js"
        abc="This was an amazing bootcamp taken up by Shaurya Sir.
      We covered everthing from Scratch including Javascript and React.js,HTML."
      />
      <Note
        name="Web Dev"
        abc="This was an amazing bootcamp taken up by Shaurya Sir.
      We covered everthing from Scratch including HTML ,CSS and Bootstrap."
      />
      <Note
        name="Python"
        abc="This was an amazing bootcamp taken up by Shaurya Sir.
      We covered everthing from Scratch including Python and Machine Learning."
      />
    </div>
  );
}

export default App;