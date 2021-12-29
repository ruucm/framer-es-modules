import React from "react"
import { motion } from "framer-motion"

export function ESMSpinner({ color = "hsl(150, 100%, 50%)" }) {
  return (
    <motion.div
      style={containerStyle}
      animate={{ rotate: 360 }}
      transition={{ loop: Infinity, duration: 3, ease: "linear" }}
    >
      <div style={{ ...roundStyle, background: color }} />
    </motion.div>
  )
}

const containerStyle = {
  width: 100,
  height: 100,
  padding: 20,
}

const roundStyle = {
  width: 10,
  height: 10,
}
