// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, changeTab, isActive} = props
  const {tabId, displayText} = tabsList

  const onTabchange = () => {
    changeTab(tabId)
  }

  const activeClassName = isActive ? 'active' : ''

  return (
    <li className="list-tab-item">
      <button type="button" className="button" onClick={onTabchange}>
        <p className={`tab-item ${activeClassName}`}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
