import { useEffect, useState } from "react";
import axios from "axios";

const AxiosTest = () => {
  const [updateDate, setUpdateDate] = useState("charging...");

  useEffect(() => {
    const owner = "drmorrison1832";
    const repo = "to-do-list-exercice-front";
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;
    axios
      .get(apiUrl)
      .then((response) => {
        setUpdateDate(response.data[0].commit.committer.date);
      })
      .catch((error) => {
        console.error("Error fetching commits:", error);
      });
  }, []);

  return (
    <div className="test-axios">
      (Axios test) Last commit date: {updateDate}
    </div>
  );
};

export default AxiosTest;
