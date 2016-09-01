var React = require("-aek/react");
var Container = require("-components/container");
var {VBox, Panel} = require("-components/layout");
var {AekReactRouter, RouterView} = require("-components/router");

var router = new AekReactRouter();

var IndexPage = require("./pages/index");
var SecondPage = require("./pages/second");
var ContentPage = require("./pages/content");
var StudyPage = require("./pages/study");
var StudyPageTwo = require("./pages/study_two");
var StudyPageThree = require("./pages/study_three");
var StudyPageFour = require("./pages/study_four");
var HealthPage = require("./pages/health");
var HealthPageTwo = require("./pages/health_two");
var HealthPageThree = require("./pages/health_three");
var HealthPageFour = require("./pages/health_four");
var HealthPageFive = require("./pages/health_five");
var HealthPageSix = require("./pages/health_six");
var HealthPageSeven = require("./pages/health_seven");
var HealthPageEight = require("./pages/health_eight");
var TechPage = require("./pages/tech");
var TechOnePage = require("./pages/tech_one");
var TechTwoPage = require("./pages/tech_two");
var TechThreePage = require("./pages/tech_three");
var TechFourPage = require("./pages/tech_four");
var CareerPage = require("./pages/career");
var CareerPageTwo = require("./pages/career_two");
var CareerPageThree = require("./pages/career_three");
var SuPage = require("./pages/su");
var SuPageTwo = require("./pages/su_two");
var SuPageThree = require("./pages/su_three");
var SuPageFour = require("./pages/su_four");
var Screen = React.createClass({

  selectButton:function(page){
    if (page == "second") {
      router.goto("/second/");
    }
    else if (page == "content") {
      router.goto("/content/");
    }
    else if(page == "study"){
      router.goto("/study/");
    }
    else if(page == "study_two"){
      router.goto("/study_two/");
    }
    else if(page == "study_three"){
      router.goto("/study_three/");
    }
    else if(page == "study_four"){
      router.goto("/study_four/");
    }
    else if(page == "health"){
      router.goto("/health/");
    }
    else if(page == "health_two"){
      router.goto("/health_two/");
    }
    else if(page == "health_three"){
      router.goto("/health_three/");
    }
    else if(page == "health_four"){
      router.goto("/health_four/");
    }
    else if(page == "health_five"){
      router.goto("/health_five/");
    }
    else if(page == "health_six"){
      router.goto("/health_six/");
    }
    else if(page == "health_seven"){
      router.goto("/health_seven/");
    }
    else if(page == "health_eight"){
      router.goto("/health_eight");
    }
    else if(page == "study"){
      router.goto("/study/");
    }
    else if (page == "tech") {
      router.goto("/tech/");
    }
    else if (page == "tech_one") {
      router.goto("/tech_one/");
    }
    else if (page == "tech_two") {
      router.goto("/tech_two/");
    }
    else if (page == "tech_three") {
      router.goto("/tech_three/");
    }
    else if (page == "tech_four") {
      router.goto("/tech_four/");
    }
    else if(page == "career"){
      router.goto("/career/");
    }
    else if(page == "career_two"){
      router.goto("/career_two/");
    }
    else if(page == "career_three"){
      router.goto("/career_three/");
    }
    else if(page == "su"){
      router.goto("/su/");
    }
    else if(page == "su_two"){
      router.goto("/su_two/");
    }
    else if(page == "su_three"){
      router.goto("/su_three/");
    }
    else if(page == "su_four"){
      router.goto("/su_four/");
    }
  },

  render:function() {
    return (
      <Container>
        <VBox>
            <Panel>
              <RouterView router={router}>
                <IndexPage path="/" onSelect={this.selectButton}/>
                <SecondPage path="/second/" onSelect={this.selectButton}/>
                <ContentPage path="/content/" onSelect={this.selectButton}/>
                <StudyPage path="/study/" onSelect={this.selectButton}/>
                <StudyPageTwo path="/study_two/" onSelect={this.selectButton}/>
                <StudyPageThree path="/study_three/" onSelect={this.selectButton}/>
                <StudyPageFour path="/study_four/" onSelect={this.selectButton}/>
                <HealthPage path="/health/" onSelect={this.selectButton}/>
                <HealthPageTwo path="/health_two/" onSelect={this.selectButton}/>
                <HealthPageThree path="/health_three/" onSelect={this.selectButton}/>
                <HealthPageFour path="/health_four/" onSelect={this.selectButton}/>
                <HealthPageFive path="/health_five/" onSelect={this.selectButton}/>
                <HealthPageSix path="/health_six/" onSelect={this.selectButton}/>
                <HealthPageSeven path="/health_seven/" onSelect={this.selectButton}/>
                <HealthPageEight path="/health_eight/" onSelect={this.selectButton}/>
                <TechPage path="/tech/" onSelect={this.selectButton}/>
                <TechOnePage path="/tech_one/" onSelect={this.selectButton}/>
                <TechTwoPage path="/tech_two/" onSelect={this.selectButton}/>
                <TechThreePage path="/tech_three/" onSelect={this.selectButton}/>
                <TechFourPage path="/tech_four/" onSelect={this.selectButton}/>
                <CareerPage path="/career/" onSelect={this.selectButton}/>
                <CareerPageTwo path="/career_two/" onSelect={this.selectButton}/>
                <CareerPageThree path="/career_three/" onSelect={this.selectButton}/>
                <SuPage path="/su/" onSelect={this.selectButton}/>
                <SuPageTwo path="/su_two/" onSelect={this.selectButton}/>
                <SuPageThree path="/su_three/" onSelect={this.selectButton}/>
                <SuPageFour path="/su_four/" onSelect={this.selectButton}/>
              </RouterView>
            </Panel>
        </VBox>
      </Container>
    );
  }
});

React.render(<Screen/>,document.body);
