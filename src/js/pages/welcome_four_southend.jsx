var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var WelcomePageFourSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>What to bring</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>You’ll need to supply your own bedding and towels, coat hangers, cooking utensils, crockery, cutlery, saucepans and frying pans</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Get connected to Wi-Fi</h2>
          <p>There is internet access in all rooms, provided by StudentCom. You don’t need to bring anything with you, everything is provided, but you will need to register. Find out more online, including how to register for your internet service.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.essex.ac.uk/welcome/services"> www.essex.ac.uk/welcome/services</a></p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Get a TV licence</h2>
          <p>StudentCom provides a television service through the portal, and a selection of free-to-view channels are available. You’ll also have the option of paying for additional channels. If you use this service, have a TV in your room, or if you watch TV on your laptop, you must buy a TV licence.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.tvlicensing.co.uk"> www.tvlicensing.co.uk</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"welcome_three_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"sports_southend")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = WelcomePageFourSouthend;
