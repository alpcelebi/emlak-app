import { useLocation, Link } from "react-router-dom"

export default function Breadcrum() {
  let currentLink = ''
  const location = useLocation()
  const crumbs = location.pathname.split('/').filter(crumb => crumb !== '')

  const breadcrumbElements = crumbs.map(crumb => {
    currentLink += `/${crumb}`
    return (
      <div className="crumb" key={crumb}>
        <Link to={currentLink}>{crumb}</Link>
      </div>
    )
  })

  return (
    <div className="breadcrumbs">
      {breadcrumbElements}
    </div>
  )
}
