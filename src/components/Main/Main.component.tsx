import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner.component";
import { MessageCreator } from "../MessageCreator/MessageCreator.component";
import "./Main.style.css";
import { useRecoilState } from "recoil";
import { loadingSpinnerStateData } from "../../recoil/atoms.state";
import { useEffect } from "react";
const Main = () => {
  const [loading, setLoading] = useRecoilState(loadingSpinnerStateData);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <main className="main dark:text-white">
      <div className="container mx-auto flex justify-start items-start py-10 ">
        <MessageCreator title="comming soon" message={`Sorry`} />
      </div>
    </main>
  );
};

export default Main;
