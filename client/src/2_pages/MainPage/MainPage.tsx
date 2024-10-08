import Description from "@/3_widgets/mainPage/Description";
import MainListsWidget from "@/3_widgets/mainPage/MainListsWidget";
import SearchWidget from "@/3_widgets/mainPage/SearchWidget";

const MainPage = () => {
  return (
    <div className="px-1 max-w-[1000px] m-auto">
      <div className="md:mb-16 mb-8">
        <SearchWidget />
      </div>
      <div className="md:mb-16 mb-8">
        <MainListsWidget />
      </div>
      <Description />
    </div>
  );
};

export default MainPage;
