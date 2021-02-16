export type Entry = {
  initialValue: number
  monthlyValue: number
  monthlyTax: number
  period: number
}

export type Result = {
  index: number
  value: number
  tax: number
  accumulative: number
}

type CalculeAcc = {
  current: number;
  entries: Result[];
}

const calcule = async (entry: Entry): Promise<Result[]> => {
  const monthlyTax = entry.monthlyTax / 100
  const initial: CalculeAcc = {
    current: entry.initialValue,
    entries: []
  }

  const values = Array.from({ length: entry.period })
    .reduce<CalculeAcc>((acc, _, index) => {
      const tax = (acc.current + entry.monthlyValue) * monthlyTax

      const current: Result = {
        index,
        tax,
        accumulative: ((index + 1) * entry.monthlyValue) + entry.initialValue,
        value: (acc.current + entry.monthlyValue) + tax
      }

      acc.current = current.value
      acc.entries.push(current)

      return acc
    }, initial)

  console.log(values);


  return values.entries
}

export {
  calcule
}