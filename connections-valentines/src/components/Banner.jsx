import './Banner.css'
import { motion } from 'framer-motion'

function Banner({ color, category, wordList }) {

  return (
    <motion.div 
    className='banner'
    style={{ backgroundColor: color}}
    initial= {{ scale: 0 }}
    animate= {{ scale: 1 , transition: { duration: 0.5, ease: "easeInOut" }}}
    >
      <div className='text'>
        <p className='category'>
          {category}
        </p>
        <p className='elements'>
          {wordList.map(word => word.name).join(`${category === "VALENTINES" ? " " : ", "}`)}
         </p>
      </div>
    </motion.div>
  )
}

export default Banner