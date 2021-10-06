import React from 'react'

export default function Page({id, children, bgColor}) {
  const styles = {
    width: '100%',
    height: '100vh',
    backgroundColor: bgColor,
  }
  return (
    <section id={id} style={styles}>
      {children}
    </section>
  )
}
