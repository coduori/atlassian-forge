import ForgeUI, {
  useEffect,
  render,
  useState,
  Fragment,
  Macro,
  Text,
} from "@forge/ui";
import api from "@forge/api";
const App = () => {
  const [planets, setPlanets] = useState([]);
  useEffect(async () => {
    const response = await api.fetch(
      "https://oduori.atlassian.net/rest/agile/1.0/board/2/sprint",
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${Buffer.from(
            "oduori.oranga@gmail.com:TW4G1ax7TvUkfF0KFcmiDD7D"
          ).toString("base64")}`,
          Accept: "application/json",
        },
      }
    );
    const resData = response.json();
    setPlanets(resData);
  }, []);
  return (
    <Fragment>
      <Text>Oduori Did it!</Text>
      <Text>Sprint Name: {planets.name}</Text>
      <Text>Sprint Activity: {planets.state}</Text>
      <Text>Sprint Goal: {planets.goal}</Text>
    </Fragment>
  );
};

export const run = render(<Macro app={<App />} />);
