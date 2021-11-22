import React from 'react'

export default function Page({id, children, bgColor}) {
  const styles = {
    width: '100%',
    minHeight: '100vh',
    height: 'auto',
    padding: '40px',
    backgroundColor: bgColor,
  }
  return (
    <section id={id} style={styles}>
      {children}
    </section>
  )
}
