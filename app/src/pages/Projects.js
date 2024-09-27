
import littleLemon from "../misc/LittleLemonHome.jpg";
import kensTree from "../misc/Ken's Discount Tree.jpg";
import demolition from "../misc/demolition.jpg";
import shopCo from "../misc/ShopCo.png";
import trustVote from '../misc/trustVote.png'
import { motion } from "framer-motion";
import Card from '../components/Card';

import { FaFigma, FaGit } from 'react-icons/fa6';
import { RiAndroidFill, RiBootstrapFill, RiCss3Fill, RiGithubFill, RiHtml5Fill, RiJavaFill, RiJavascriptFill, RiNextjsFill, RiNodejsFill, RiReactjsFill, RiWordpressFill, RiTailwindCssFill } from 'react-icons/ri';
import { AiOutlinePython } from 'react-icons/ai';
import { TbBrandFramerMotion, TbBrandReactNative } from 'react-icons/tb';
import { SiExpress, SiMongoose, SiSolana } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb, DiRust } from "react-icons/di";


const projects = [
  { name: "Trust Vote - Solana based dApp - On going", description: "A decentralized application designed to ease, and secure the process of voting.", image: trustVote, gif: null, github: "https://github.com/HamadUllah16/trustvote-client", live: "https://trustvote-client.vercel.app", technologies: [<RiNextjsFill size={"1.5em"} />, <RiTailwindCssFill size={"1.5em"} />, <SiExpress size={'1.5em'} />, <SiMongoose size={'1.5em'} />, <BiLogoTypescript size={'1.5em'} />, <SiSolana size={'1.5em'} />, <DiRust size={'1.5em'} />] },
  { name: "ShopCo. - Ecommerce Website", description: "An ecommerce website powered by Next14, TailwindCSS & Framer-Motion to build a fast and search engine optimized website with a touch of animation.", image: shopCo, gif: null, github: "https://github.com/HamadUllah16/EcommerceWebsite", live: "https://shopco-ecommerce-website.vercel.app", technologies: [<RiNextjsFill size={"1.5em"} />, <RiTailwindCssFill size={"1.5em"} />, <TbBrandFramerMotion size={"1.5em"} />] },
  { name: "Little Lemon Restaurant", description: "Little Lemon a Mediterranean restaurant, focused on traditional receipes served with modern twist.", image: littleLemon, gif: null, github: "https://github.com/HamadUllah16/LittleLemon-Reservations", live: "https://littlelemonchicago.vercel.app", technologies: [<RiReactjsFill size={"1.5em"} />, <RiBootstrapFill size={"1.5em"} />, <RiCss3Fill size={"1.5em"} />] },
  { name: "Ken's Discount Tree", description: "Affordable tree services in Atlanta.", image: kensTree, gif: null, github: null, live: "https://www.kensdiscounttreeservice.com", technologies: [<RiWordpressFill size={"1.5em"} />] },
  { name: "Demolition & Hauling", description: "Family owned and operated, demolition and hauling for less has earned the reputation for providing top quality residential and commercial building demolition services to clients throughout Atlanta.", image: demolition, gif: null, github: null, live: "https://www.demolitionandhaulingforless.com", technologies: [<RiWordpressFill size={"1.5em"} />] },
  { name: "Yelp Camps", description: "A MERN Stack App with CRUD functionalities", image: "", gif: null, github: "https://yelpcamps-client.vercel.app", live: "https://yelpcamps-client.vercel.app", technologies: [<RiReactjsFill size={"1.5em"} />, <SiExpress size={"1.5em"} />, <RiNodejsFill size={"1.5em"} />, <DiMongodb size={"1.5em"} />, <RiBootstrapFill size={"1.5em"} />] }
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
        <motion.section key={"projects"} variants={container} exit={"hidden"} initial={"hidden"} animate={"visible"} className='gap-1 p-3 projectRow' >
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
