const staticData = require('@groceristar/sd-wrapper')

const mealCalendar = staticData.mealCalendar

const firstVeganGLMC =
  require('@groceristar/sd-wrapper/dist/data/MealCalendar/First-Vegan-Grocery-List-MC.json')

module.exports = {
  mealCalendar,
  firstVeganGLMC
}
