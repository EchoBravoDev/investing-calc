import { App } from 'vue'

const formater = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 3,
})

export const install = (app: App) => {

  app.config.globalProperties.$filters = {
    money(value: number ) {
      return formater.format(value)
    }
  }
}