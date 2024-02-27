//SEO Related settings
const seo = {
  title: "Kiran's Portfolio",
  description:
    "Kiran's Personal Portfolio",
  og: {
    title: "Kiran Naragund Portfolio",
    type: "website",
    url: "http://kirannaragund.com/",
  },
};

//Home Page
const greeting = {
  title: "Kiran Naragund",
  logo_name: "KiranNaragund",
  
  subTitle:
    "Passionate about holistic solutions addressing complex challenges, I develop sustainable systems that make a positive impact through end-to-end product development.",
  resumeLink:
    "https://drive.google.com/file/d/1pPQA2tOBkr9jm0zQ3AercUBWFhyv5Xvy/view?usp=sharing",
  portfolio_repository: "https://github.com/Kiran1689/Kiran1689.github.io",
  githubProfile: "https://github.com/Kiran1689",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/Kiran1689",
    fontAwesomeIcon: "fa-github", 
    backgroundColor: "#181717", 
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kiran-a-n",
    fontAwesomeIcon: "fa-linkedin-in", 
    backgroundColor: "#0077B5", 
  },
  
  {
    name: "Gmail",
    link: "mailto:kirannaragund197@gmail.com",
    fontAwesomeIcon: "fa-google", 
    backgroundColor: "#D14836", 
  },
  {
    name: "Twitter",
    link: "https://twitter.com/kiran__a__n",
    fontAwesomeIcon: "fa-twitter", 
    backgroundColor: "#1DA1F2", 
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/kiran_a_n/",
    fontAwesomeIcon: "fa-instagram", 
    backgroundColor: "#E4405F", 
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
		  "⚡ Strong background in ETL (Extract, Transform, Load) processes for data preparation",
		  "⚡ Hypothesis testing and statistical analysis techniques",
		  "⚡ Skilled in creating compelling data visualizations with PowerBI for insights",
		],

      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
		{
		  skillName: "Pandas",
		  fontAwesomeClassname: "simple-icons:pandas",
		  style: {
			backgroundColor: "transparent",
			color: "#150458",
		  },
		},
		{
		  skillName: "NumPy",
		  fontAwesomeClassname: "simple-icons:numpy",
		  style: {
			backgroundColor: "transparent",
			color: "#11557C",
		  },
		},
		{
		  skillName: "scikitlearn",
		  fontAwesomeClassname: "simple-icons:scikitlearn",
		  style: {
			backgroundColor: "transparent",
			color: "#F7931E",
		  },
		},
		{
		  skillName: "Scipy",
		  fontAwesomeClassname: "simple-icons:scipy",
		  style: {
			backgroundColor: "transparent",
			color: "#8CAAE6",
		  },
		},
		
		{
		  skillName: "Data Visualization",
		  fontAwesomeClassname: "simple-icons:powerbi",
		  style: {
			backgroundColor: "transparent",
			color: "#E97627",
		  },
		},
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "logos-pytorch",
      style: {
        backgroundColor: "transparent",
      },
    },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React",
        "⚡ Creating application backend in Node, Express & Django",
        "⚡ Designing and implementing RESTful APIs for seamless integration",
        "⚡ Continuously learning and staying updated on the latest web development trends and technologies"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Working on multiple cloud platforms",
        "⚡ Working with databases such as MySQL, MongoDB, or PostgreSQL",
        "⚡ Implementing continuous integration and deployment (CI/CD) pipelines for cloud-based applications",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying applications on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    }
  ],
};

// Education Page
const certifications = {
  certifications: [
    {
      title: "Machine Learning Specialization",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/P3LRH2XM3PMG",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Advanced Learning Algorithms",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/SHRT2KB6HJJZ",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Supervised ML",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/3MDPJMSS8DQH",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Paper Publication",
      subtitle: "- ISJEM",
      logo_path: "isjem.png",
      certificate_link:
        "https://drive.google.com/file/d/1MGS9vht22hwQuZoZwu8tOl5KUjgYIX4U/view?usp=sharing",
      alt_name: "ISJEM",
      color_code: "#4285F499",
    },
    {
      title: "Virtual Internship",
      subtitle: "- BlackBird",
      logo_path: "black.png",
      certificate_link:
        "https://drive.google.com/file/d/17-iX5Hc1Cgu9jGmsoGZfi6lfhc7x1eww/view?usp=sharing",
      alt_name: "Internship",
      color_code: "#0C9D5899",
    },
    {
      title: "AWS",
      subtitle: "- Simplilearn",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1mGWzAqH711YJ0FmzHOwN1Gs8HnmvC74i/view?usp=sharing",
      alt_name: "aws",
      color_code: "#FA9C1B",
    },
    {
      title: "Virtual Internship",
      subtitle: "- Accenture",
      logo_path: "accenturelogo.png",
      certificate_link:
        "https://drive.google.com/file/d/1soGDd0-dBE25P3Jcijaun3B1H0Qifums/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#4285F499",
    },
    {
      title: "Coding Compitation",
      subtitle: "- Agoda",
      logo_path: "Codegoda-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1r9m4vftAwM5NwVePH2M-2deqhVV2LwVO/view?usp=sharing",
      alt_name: "Agoda",
      color_code: "#4D0C83",
    },
    {
      title: "Hackathon",
      subtitle: "- PrepInsta",
      logo_path: "prepinsta.png",
      certificate_link:
        "https://drive.google.com/file/d/1htXr6ISaD8tUNtj8j14AbIrRIeaRV9jb/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#000000",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "PES University ",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "pesu.png",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Achieved a commendable GPA of 7.07, showcasing strong academic performance and a solid understanding of the coursework throughout the degree program.",
        "⚡ Successfully completed several impactful projects, demonstrating practical application of theoretical knowledge and the ability to work on diverse topics within the field of computer science engineering.",
      ],
      website_link: "https://pes.edu/",
    },


    {
      title: "RTES PU Collage",
      subtitle: "Senior Secondary",
      logo_path: "rtespu.png",
      duration: "2017 - 2019",
      descriptions: [
        "⚡ Demonstrated exceptional proficiency in the PCM (Physics, Chemistry, Mathematics) subjects with an impressive score of 92.33%, contributing to an overall outstanding score of 89.33% in the Pre-University Course.",
        "⚡ Selected for the prestigious Merit cum Means Scholarship, awarded to the top 10% of students in the college, recognizing exceptional scholastic achievements and commitment to learning.",
        "⚡ Received recognition from the respected director for consistently delivering the best performance in academics, reflecting a consistent drive for excellence and a strong work ethic.",
      ],
      website_link: "https://goo.gl/maps/ZT65DK3HiezX19Ex7/",
    },


    {
      title: "Lions High School",
      subtitle: "Secondary",
      logo_path: "lions.png",
      duration: "2014 - 2017",
      descriptions: [
        "⚡ Attained an impressive overall score of 93.60% during schooling, demonstrating consistent academic excellence across various subjects.",
        "⚡ Recognized as the recipient of the prestigious 'Student of the Year' award, acknowledging exceptional leadership, academic performance, and contributions to the school community.",
        "⚡ Showcased exceptional writing skills by securing two state-level awards for essay writing competitions, reflecting talent, creativity, and effective communication abilities.",
      ],
      website_link: "https://goo.gl/maps/5yHPApeyu2aGWv9J7/",
    },
  ], 
};



const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Exercism",
      iconifyClassname: "simple-icons:exercism",
      style: {
        color: "#3B00B9",
      },
      profileLink: "https://exercism.org/profiles/Kiran1689",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/kirannaragund197",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/kiran_a_n/",
    },
    {
      siteName: "CodeChef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/kiran1689",
    },
    {
      siteName: "GeeksForGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2F8D46",
      },
      profileLink: "https://auth.geeksforgeeks.org/user/kirannaragund",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: false,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "C Labs R&D Pvt Ltd",
          company_url: "https://cyberwarfare.live/",
          logo_path: "cwl.png",
          duration: "Jan 2024 - Present",
          location: "Bangalore",
          description:
            "I'm currently working as a Full-Stack Developer at CyberWarFare Labs.",
          color: "#000000",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer",
          company: "BlackBird",
          company_url: "https://www.blackbird.vc/",
          logo_path: "blackbird.png",
          duration: "March 2023 - May 2023",
          location: "Virtual",
          description:
            "I have worked on client projects, and developed components for email and password form validation tasks using email-validator library and unit tested validation logic using jest.",
          color: "#000000",
        }
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "November 2023 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like AutoGPT, Supabase, Tensorflow, Facebook, Scrapy, Exercism, Python, Github community, Forem etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
        {
          title: "Mentor",
          company: "Exercism",
          company_url: "https://exercism.org/",
          logo_path: "exercism.png",
          duration: "September 2023 - PRESENT",
          location: "Work From Home",
          description:
            "Exercism is a coding platform for collaborative learning. As an active participant on Exercism I've mentored over 170+ students worldwide. Through real-world coding exercises, I am providing guidance to learners, helping them to enhance their programming skills and achieve their learning goals.",
          color: "#4285F4",
        },
        {
          title: "Moderator",
          company: "Dev Community",
          company_url: "https://dev.to/",
          logo_path: "devcommunity.png",
          duration: "November 2023 - PRESENT",
          location: "Work From Home",
          description:
            "I am a part of core community moderation team at DEV. As a DEV Tag Moderator, I actively contribute to organizing and improving content on DEV. ",
          color: "#fc1f20",
        },
        
      ],
    },
  ],
}

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create full-stack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Kiran_profile-fotor.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://dev.to/dev_kiran",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ranebennur, T.A.-Ranebennur, Dist.-Haveri, Karnataka - 581115",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/cU6oYqqj55KfoH9w5",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9035918593",
  },
};

export {
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader, 
  competitiveSites,
  contactPageData,
};
