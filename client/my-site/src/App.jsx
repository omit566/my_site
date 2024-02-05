import HeaderTwo from '../components/HeaderTwo/HeaderTwo';
import Dropdown from '../components/HeaderTwo/Nav/Dropdown';
import HeaderOne from '../components/header/HeaderOne/HeaderOne';
import Section from '../components/HeaderTwo/Nav/Section';
import Sections from '../components/swiper/Sections';
import SectionOne from '../components/swiperTwo/SectionOne';
import SectionThree from '../components/sectionthree/SectionThree';
import SectionFive from '../components/SectionFive/SectionFive';
import SectionSix from '../components/SectionSix.jsx/SectionSix';
import SectionSeven from '../components/SectionSeven/SectionSeven';









const App = () => {

  return (
    <>
    <div>

      <HeaderOne></HeaderOne>
      <HeaderTwo></HeaderTwo>
      <Dropdown></Dropdown>
      <Section></Section>
      <Sections></Sections>
      <SectionOne></SectionOne>
      <SectionThree></SectionThree>
      <SectionFive></SectionFive>
      <SectionSix></SectionSix>
      <SectionSeven></SectionSeven>
      </div>
    </>
  );
};

export default App;