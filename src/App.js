import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
// import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import mypic from './image/mypic.jpg'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData:{}
    }
  }

  
  getResumeData(){
    // $.ajax({
    //   url: 'https://joshuacassidy.github.io/portfolio/data.json',
    //   url: '.',
    //   dataType: 'json',
    //   cache: false,
    //   success: function(data){
    //     this.setState({resumeData:data})
    //   }.bind(this),
    //   error: function(xhr,status,err){
    //     console.log(err);
    //     alert(err);
    //   }
    // })
    const data={
      "main": {
        "name": "Nand Kumar",
        "occupation": "Student",
        // "description": "Currently studying a B.Tech in Computer Science and Engineering at the Dronacharya College of Engineering.",
        "description": "Third year CS student ,who loves to working on algorithm and their visualization emphasising on writing readable code. Full Stack Web Developer with excellent problem solving skills and ability to perform well in a team.",
        "image": mypic,
        "bio": "My name is Nand Kumar, I'm twenty-one years old and currently in my third year at the Dronacharya College of Engineering attending B.Tech CSE. I'm Hard working and work on my own initiative. I started programming during the lockdown in 2020, in C++, where I learned for one years before branching out into other technologies such as Python, JavaScript, React, C#, Java, Node.js, MongoDB, MySQL, and many more.",
        "email": "nknittin16436@outlook.com",
        "phone": "+91 9625391880",
        "contact": "If you have any questions or would just like to chat feel free to contact me.",
        "address": {
          "street": "Rajendra Park",
          "city": "Gurgaon",
          "state": "Haryana",
          "country": "India"
        },
        "social": [
          {
            "name": "linkedin",
            "url": "https://www.linkedin.com/in/nand-kumar",
            "className": "fa fa-linkedin"
          },
          {
            "name": "github",
            "url": "https://github.com/nknittin16436",
            "className": "fa fa-github"
          }
        ]
      },
      "resume": {
        "education": [
          {
            "school": "B.tech Computer Science",
            "certificate": "Degree",
            "graduated": "August 2020 - Present",
            "description": "Started B.Tech at Dronacharya College Of Engineering ."
          },
          {
            "school": "Diploma In Mechanical Engineering",
            "certificate": "Degree",
            "graduated": "July 2018  - August 2020",
            "description": "Completed Diploma In Mechanical Engineering From Government Polytechnic ,Manesar."
          },
          {
            "school": "XII BOARDS(HBSE)",
            "certificate": "SCHOOLING",
            "graduated": "April 2016  - June 2018",
            // "description": "Completed Diploma In Mechanical Engineering From Government Polytechnic ,Manesar."
          },
          {
            "school": "X BOARDS(HBSE)",
            "certificate": "Degree",
            "graduated": "April 2014  - March 2016",
            // "description": "Completed Diploma In Mechanical Engineering From Government Polytechnic ,Manesar."
          }
        ],
        "skills": [
          {
            "name": "Web Development",
            "level": "90%"
          },
          {
            "name": "Web Design",
            "level": "60%"
          },
          {
            "name": "Problem Solving",
            "level": "90%"
          },
          {
            "name": "TeamWork",
            "level": "85%"
          },
          {
            "name": "Computer Architecture",
            "level": "90%"
          },
          {
            "name": "Technical Skills",
            "level": "85%"
          }
        ],
        "programming_experience": [
          {
            "name": "C++",
            "level": "80%"
          },
          {
            "name": "React",
            "level": "70%"
          },
          {
            "name": "HTML5",
            "level": "80%"
          },
          {
            "name": "CSS",
            "level": "90%"
          },
          {
            "name": "JSON",
            "level": "79%"
          },
          {
            "name": "Node",
            "level": "80%"
          },
          {
            "name": "BootStrap",
            "level": "80%"
          },
          {
            "name": "JavaScript",
            "level": "88%"
          },
         
          {
            "name": "Mongo Database",
            "level": "85%"
          },
          {
            "name": "Redux",
            "level": "50%"
          },
          {
            "name": "Java",
            "level": "50%"
          },
          {
            "name": "Git",
            "level": "81%"
          },
          {
            "name": "Python",
            "level": "45%"
          },
        ]
      },
      "portfolio": {
        "projects": [
          {
            "title": "Note App",
            "category": "A cloud based To Do app for your daily tasks made with MERN.The purpose of this app is to save all your notes on Cloud Database which you can access from anywhere around the globe until and unless you are in North Korea",
            "image": "note.png",
            "url": "https://merinoteapp.herokuapp.com"
          },
          {
            "title": "Weather App",
            "category": "A Weather API based application for real-time weather information.",
            "image": "weather.png",
            "url": "https://nknittin16436.github.io/livemausam/"
          },
          {
            "title": "PostMan Clone",
            "category": "A Postman clone made with HTML ,Bootstrap And Vanilla Javascript ,which simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.",
            "image": "postman.png",
            "url": "https://nknittin16436.github.io/postman-clone"
          },
          {
            "title": "Covid Mapper",
            "category": "A website with HTML,CSS and Javascript which plots the number of covid cases around the globe",
            "image": "covid.png",
            "url": "https://nknittin16436.github.io/Covid-O-Map/"
          },
         
          
        ]
      },
    }
    ;
    this.setState({resumeData:data});
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() { 
    // console.log(this.state.resumeData);
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
