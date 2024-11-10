import handwritingProj from "../assets/projects/handwriting.jpg";
import digitaltwinProj from "../assets/projects/digitaltwin.jpg";
import portfolioProj from "../assets/projects/portfolio.png";
import blogProj from "../assets/projects/blog.jpeg";
import opensourceProj from "../assets/projects/opensource.jpg";

export const HERO_CONTENT = `I am an enthusiastic full stack developer with a strong passion for building robust and scalable web applications. Through hands-on practice, I have developed proficiency in front-end technologies like React and Next.js, as well as back-end tools including Node.js, MySQL, PostgreSQL, and MongoDB. My focus is on leveraging my skills to develop innovative web solutions that provide outstanding user experiences and contribute to meaningful projects.`;

export const ABOUT_TEXT = `I am an aspiring full stack developer with a passion for building efficient and user-friendly web applications. I have experience working with technologies like React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB through personal projects. My journey in web development began with a curiosity for how things work and has grown into a commitment to continuously learn and take on new challenges. I enjoy collaborating with others and problem-solving to create high-quality solutions. Outside of coding, I love staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Android Development Coordinator",
    company: "Google Developer Student Club",
    description: `Worked with a team of developers to design and develop Android applications using Java and Kotlin. Organize workshops and events to promote Android development among students.`,
    technologies: ["Java", "Kotlin", "Android Studio"],
  },
];

export const PROJECTS = [
  {
    title: "Handwriting Font Generator",
    image: handwritingProj,
    description:
      "A web-based solution to automate the creation of a personalized handwriting font using image processing techniques. Users upload scanned images of handwritten characters, which are then processed to generate a TrueType Font (.ttf) file.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express.js", "Javascript", "Multer"],
  },
  {
    title: "Blockchain-Based Digital Twin",
    image: digitaltwinProj,
    description:
      "A blockchain-based solution aiming to create digital twins of documents for tracking ownership and authenticity. Users can upload documents, which are stored on the blockchain using NFT (Non-Fungible Token) technology.",
    technologies: ["Javascript", "ZByte Platform", "IPFS", "Cloudflare IPFS Gateway"],
  },
  {
    title: "Blogging Platform",
    image: blogProj,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
  {
    title: "Open-Source Contributions - OpenSearch",
    image: opensourceProj,
    description:
      "Reviewed various pull requests and contributed to enhancement of the code changes in open-source projects.",
    technologies: ["Github", "Git", "Open Source"],
  },
  {
    title: "Portfolio Website",
    image: portfolioProj,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "106, Musa (G) Hostel, Symbiosis Institute of Technology, Pune, Maharashtra, India",
  phoneNo: "+91 9537940308",
  email: "devvratsaini4@gmail.com.com",
};
