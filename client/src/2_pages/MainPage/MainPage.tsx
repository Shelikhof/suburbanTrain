import Description from "@/3_widgets/mainPage/Description";
import MainListsWidget from "@/3_widgets/mainPage/MainListsWidget";
import SearchWidget from "@/3_widgets/mainPage/SearchWidget";
import Container from "@/6_shared/ui/Container";

const MainPage = () => {
  return (
    <Container>
      <div className="md:mb-16 mb-8">
        <SearchWidget />
      </div>
      <div className="md:mb-16 mb-8">
        <MainListsWidget />
      </div>
      <Description />
    </Container>
  );
};

export default MainPage;
