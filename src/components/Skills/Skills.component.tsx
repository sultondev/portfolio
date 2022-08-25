import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loadingSpinnerStateData } from "../../recoil/atoms.state";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner.component";

const Skills = () => {
  const [loading, setLoading] = useRecoilState(loadingSpinnerStateData);

  useEffect(() => {
    setLoading(false);
  }, []);

  return <div className="">SKILLS</div>;
};

export default Skills;
