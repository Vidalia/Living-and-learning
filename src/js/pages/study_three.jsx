var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var StudyPageThree = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Develop your talent</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Unleash your potential and visit our Talent Development Centre. Providing support on academic literacy, numeracy, English language, employability and IT to help you be the best you can be. www.essex.ac.uk/welcome/tdc </p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Moodle</h2>
          <p>Moodle is our online learning environment. It lets you get to course materials, and has smart features to enhance your learning and provide an online space for interactive teaching. www.essex.ac.uk/welcome/moodle </p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>FASER</h2>
          <p>You can use FASER to submit your coursework online, produce a watermarked copy of your work and receive feedback all in one place. www.essex.ac.uk/welcome/faser </p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Listen Again</h2>
          <p>Did you miss something? Our Listen Again service lets you listen to lectures again (see what we did there?) so you don’t miss a thing. www.essex.ac.uk/welcome/listenagain </p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Find your way around campus</h2>
          <p>Find Your Way is our interactive campus map app. Download it to help you find any location on campus and get directions quickly and easily. Trust us, you’ll need it! There’s also a handy web version. www.essex.ac.uk/welcome/findyourway</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"study_two")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"study_four")}>Next</Button>
          </BasicSegment>
      </BasicSegment>
      </Page>
    );
  }
});
module.exports = StudyPageThree;
