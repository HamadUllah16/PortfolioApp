
import littleLemon from "../misc/LittleLemonHome.jpg";
import kensTree from "../misc/Ken's Discount Tree.jpg";
import demolition from "../misc/demolition.jpg";
import shopCo from "../misc/ShopCo.png";
import { motion } from "framer-motion";
import Card from '../components/Card';

const projects = [
  { name: "ShopCo. - Ecommerce Website", description: "An ecommerce website powered by Next14, TailwindCSS & Framer-Motion to build a fast and search engine optimized website with a touch of animation.", image: shopCo, gif: null, github: "https://github.com/HamadUllah16/EcommerceWebsite", live: "https://shopco-ecommerce-website.vercel.app", technologies: ["Nextjs", "TailwindCSS", "Framer-Motion"] },
  { name: "Little Lemon Restaurant", description: "Little Lemon a Mediterranean restaurant, focused on traditional receipes served with modern twist.", image: littleLemon, gif: null, github: "https://github.com/HamadUllah16/LittleLemon-Reservations", live: "https://littlelemonchicago.vercel.app", technologies: ["React", "Bootstrap5", "CSS", "UI/UX"] },
  { name: "Ken's Discount Tree", description: "Affordable tree services in Atlanta.", image: kensTree, gif: null, github: null, live: "https://www.kensdiscounttreeservice.com", technologies: ["WordPress", "WordPress Customization"] },
  { name: "Demolition & Hauling", description: "Family owned and operated, demolition and hauling for less has earned the reputation for providing top quality residential and commercial building demolition services to clients throughout Atlanta.", image: demolition, gif: null, github: null, live: "https://www.demolitionandhaulingforless.com", technologies: ["WordPress", "WordPress Customization"] },
  { name: "Yelp Camps", description: "A MERN Stack App with CRUD functionalities", image: "", gif: null, github: "https://yelpcamps-client.vercel.app", live: "https://yelpcamps-client.vercel.app", technologies: ["React", "Express", "NodeJs", "MongoDB", "Bootstrap5"] }
]


function Projects() {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <section className='mainContainer ' style={{ overflowX: "scroll", overflowY: "hidden" }}>
        {/* <Toolbar /> */}
        <motion.section key={"projects"} variants={container} exit={"hidden"} initial={"hidden"} animate={"visible"} className='gap-3 px-3 projectRow' >
          {projects.map((item, index) => {
            return (
              <Card item={item} index={index} />
            )
          })}

        </motion.section>
      </section >
    </>
  )
}

export default Projects
