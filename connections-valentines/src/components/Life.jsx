import './Life.css'
import {motion} from 'framer-motion'

function Life({animateLoss}) {
  const style = {
    borderRadius: '50px',
    width: '20px',
    position: 'relative',
    top: '22.5px'
  }

  return (
    <motion.div 
    className="circle"
    animate={
      animateLoss
        ? { scale: [1, 1.4, 0], opacity: [1, 1, 0] }
        : { scale: 1, opacity: 1 }
    }
    transition={{ duration: 0.4, ease: "easeInOut" }}
    >
    </motion.div>
  )
}

export default Life