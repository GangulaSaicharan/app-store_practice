// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, changeTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onChangeTab = () => {
    changeTab(tabId)
    console.log(tabId)
  }

  const activeTabItem = isActive ? 'active-tab' : ''
  console.log(activeTabItem)

  return (
    <li className="tab-item">
      <button
        className={`button ${activeTabItem}`}
        type="button"
        onClick={onChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
