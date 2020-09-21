import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Services() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Header headerText="Services" />
      <p>This is a services page</p>
    </div>
  )
}
