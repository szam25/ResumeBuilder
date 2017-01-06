var bio = {
    "name": "souvik zaminder",
    "role": "system engineer",
    "contacts": {
        "mobile": "8902459912",
        "email": "s.zaminder@gmail.com",
        "github": "pingla pingla",
        "twitter": "yeipeeeee",
        "location": "kolkata",
        "blog": "ping pong"
    },
    "welcomeMessage": "this is souvik who is a system engineer",
    "skills": ["drawing", "painting", "developer", "entertainer"],
    "biopic": "images/fry.jpg"
};


var education = {
    "schools": [{
        "name": " BaranagarRKMission ",
        "location": "kolkata",
        "degree": "secondary school",
        "majors": ["science"],
        "dates": "1996-2008",
        "url": "rkmissionbaranagar.org"
    }, {
        "name": " IIEST ",
        "location": "howrah",
        "degree": "B.tech & M.tech",
        "majors": ["engineering"],
        "dates": "2008-2016",
        "url": "www.iiest.ac.in"

    }],
    "onlineCourses": [{
        "title": "Front end Web Developer Nanodegree",
        "school": "udacity",
        "dates": "2015-2016",
        "url": "https://www.udacity.com/course"
    }],
};

var work = {
    "jobs": [{
        "employer": "xyz",
        "title": "cook",
        "location": "kolkata",
        "dates": "2012-2016",
        "description": " freshers"
    }]
};

var projects = {
    "projects": [{
            "title": "Basic JAVA",
            "dates": "2015-2016",
            "description": "basic interaction with java",
            "images": ["images/6-Months-Java-Training-in-Chandigarh-Mohali-and-Panchkula-.png"]
        },

        {
            "title": "Networking",
            "dates": "2013-2014",
            "description": "computer networking",
            "images": ["images/computer_networks.jpg"]

        }
    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);

    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace('%data%', skill);
        $("#skills").append(formattedSkill);
    });


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedblog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

    $("#footerContacts, #topContacts").prepend(formattedMobile, formattedEmail, formattedLocation, formattedgithub, formattedblog, formattedtwitter);

};
education.display = function() {


    education.schools.forEach(function(school) {


        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name.replace('#', school.url));
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

        $(".education-entry:last").append(formattedName, formattedDegree, formattedDates, formattedLocation, formattedMajor);



    });



    education.onlineCourses.forEach(function(course) {

        $("#education").append(HTMLonlineClasses);

        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formatteddates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", course.url);

        $(".education-entry:last").append(formattedTitle, formattedSchool, formatteddates, formattedUrl);
    });

};
work.display = function() {

    work.jobs.forEach(function(job) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);

        $(".work-entry:last").append(formattedEmployer, formattedTitle, formattedDates, formattedDescription, formattedWorkLocation);



    });

};
projects.display = function() {

    projects.projects.forEach(function(project) {

        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        project.images.forEach(function(image) {
            var formattedProjectImage = HTMLprojectImage.replace('%data%', image);
            $('.project-entry:last').append(formattedProjectImage);
        });

        $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);


    });



};




work.display();
bio.display();
education.display();
projects.display();


$("#mapDiv").append(googleMap);