import { App } from 'vue'
import Maska from 'maska'

const formater = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 3,
})

export const install = (app: App) => {
  app.use(Maska)

  app.config.globalProperties.$filters = {
    money(value: number ) {
      return formater.format(value)
    }
  }
}