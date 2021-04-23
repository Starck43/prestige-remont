import React from "react"
import { Link } from "gatsby"

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <Link
      className="card-wrapper"
      to={projectLink}
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h3 className="header">{heading}</h3>
        <p className="text" dangerouslySetInnerHTML={{ __html: paragraph }} />
        <div
          className="btn"
          href={projectLink ? projectLink : "#"}
          rel="noopener noreferrer"
        >
          Просмотр
        </div>
      </div>
    </Link>
  )
}

export default Card
