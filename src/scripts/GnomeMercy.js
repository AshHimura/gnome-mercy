import { Completions } from "./Completions.js"
import { CrafterList } from "./CrafterList.js"
import { CraftList } from "./CraftList.js"
import { IngredientPicker } from "./IngredientList.js"
import { completeTheRequest } from "./repository.js"
import { RequestForm } from "./RequestForm.js"

document.addEventListener(
    "click",
    e => {
        if (e.target.id === "completeOrderButton") {
            completeTheRequest()
        }
    }
)

export const GnomeMercy = () => {
    return `
        <article>
            <nav class="siteNav">
                <img src="/images/gnome.png" style="margin-right: 3rem" width="50px" height="50px" alt="Nigel the Gnome" />
                <h1>Gnome Mercy Magical Crafting</h1>
            </nav>
            <section class="requestForm">
                ${RequestForm()}
            </section>


            <h2>Crafting Table</h2>
            <section class="craftingTable">
                <div class="ingredientPicker">
                    ${IngredientPicker()}
                </div>
                <div class="craftList">
                    <div>${CrafterList()}</div>
                    <div>${CraftList()}</div>
                    <div>
                        <button id="completeOrderButton">Complete Order</button>
                    </div>
                </div>
            </section>

            <h2>Completed Requests</h2>
            <section class="completions">
                ${Completions()}
            </section>
        </article>
    `
}