import DiscussionForm from "./components/DiscussionForm";
import MarketStories from "./components/MarketStories";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <div className="flex">
      <SideBar/>
      <DiscussionForm/>
      <MarketStories/>
    </div>
  );
}
