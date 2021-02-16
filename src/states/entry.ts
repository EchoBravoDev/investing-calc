import { ref, readonly } from 'vue'
import { Entry } from '../lib/calcule'

const state = ref<Entry>({
  initialValue: 2000,
  monthlyValue: 0,
  monthlyTax: 20,
  period: 12,
})

const setState = (newEntry: Entry) => {
  state.value = {
    ...state.value,
    ...newEntry
  }
}

const useEntryData = () => {
  return  {
    setState,
    entry: readonly(state)
  }
}

export {
  useEntryData
}