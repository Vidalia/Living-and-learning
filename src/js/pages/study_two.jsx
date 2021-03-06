var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var StudyPageTwo = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Albert Sloman Library</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Overlooking the lakes and parkland at the heart of our Colchester Campus is the Albert Sloman Library. All six floors are stuffed full of books, journals, newspapers, databases, e-books, audio- visual materials, group study spaces and PCs.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://libwww.essex.ac.uk/"> www.essex.ac.uk/welcome/library</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Peer Mentoring</h2>
          <p>Whether you’re an undergraduate or postgraduate student, you can have a peer mentor – a fellow student who can answer your questions about life at university and help you settle in.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> peermentor@essex.ac.uk (Undergraduate students)<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> pgmentor@essex.ac.uk (Postgraduate students)<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/students/study-resources/mentoring/default.aspx"> www.essex.ac.uk/welcome/mentoring</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Timetables</h2>
          <p>Once you’ve chosen all your modules and they’ve been confirmed, they’ll appear on your personal timetable. You can see your timetable online – just login with your Essex username and password.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/students/course-admin/timetables.aspx"> www.essex.ac.uk/welcome/timetable</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Module enrolment</h2>
          <p>You can select your optional module choices for your course via eNROL<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/enrol/home/home_phase1.asp"> www.essex.ac.uk/welcome/enrol</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"studyBack")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button  onClick={this.onClick.bind(this,"study_three")} style={{position:"absolute", right:"0px"}}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = StudyPageTwo;
