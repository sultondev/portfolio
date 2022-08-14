import { MessageCreator } from "../MessageCreator/MessageCreator.component";
import "./Main.style.css";
const Main = () => {
  return (
    <main className="main dark:text-white">
      <div className="container mx-auto flex justify-start items-start py-10">
        <MessageCreator title="comming soon" message={`Sorry`} />
      </div>
    </main>
  );
};

export default Main;
