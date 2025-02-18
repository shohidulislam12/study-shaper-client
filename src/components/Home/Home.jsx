import Banner from "./Banner";
import Feature from "./Feature";
import HowWork from "./HowWork";
import NewsComponent from "./NewsComponent";
import StudySession from "./StudySession";
import TutorSection from "./TutorSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StudySession></StudySession>
            <TutorSection></TutorSection>
            <NewsComponent></NewsComponent>
            <Feature></Feature>
            <HowWork></HowWork>
       
          
            
        </div>
    );
};

export default Home;