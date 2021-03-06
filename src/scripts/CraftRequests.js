// Module Responsibility - Generate HTML for the dropdown of craftRequests

import { GetCraftRequests, setRequestId } from "./dataAccess.js"

document.addEventListener(
  "change",
  (evt) => {
      if (evt.target.id === "requestDropdown") {
        setRequestId(parseInt(evt.target.value))
      }
  }
)


export const CraftRequestDropdown = () => {

  const craftRequests = GetCraftRequests()

  return `
  <h3>Craft Requests</h3>
  <select id="requestDropdown">
    <option value="0">--Choose A Request--</option>
    ${
      craftRequests.map(
        (craftRequestObj) => {
          return `
            <option value="${craftRequestObj.id}">${craftRequestObj.name}</option>
          `
        }
      )
    }
  </select>
  `
}
