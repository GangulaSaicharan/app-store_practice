// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="app-item">
      <img alt={appName} src={imageUrl} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
