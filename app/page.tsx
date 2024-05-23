
import Header from "./components/mainPage/header";
import Nav from "./components/mainPage/nav";
import Welcome from "./components/welcome";
import Specialities from "./components/mainPage/specialties";
import Why from "./components/mainPage/why";
import How from "./components/mainPage/how";

export default function Home() {
  return (
    <div className="w-full relative">
      <Nav />
      <Header />
      <Welcome />
      <Specialities />
      <Why />
      <How />
    </div>
  );
}
