import { useEffect } from "react";
import { getPost } from "./API/postAPI";
import { Posts } from "./components/Posts";

const App = () => {
  
  return (
    <section className="main-section">
      <Posts />
    </section>
  )
}
export default App;