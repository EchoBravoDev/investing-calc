const call = (fn: Function) => {
  setTimeout(fn)
}

const onReady = (fn: Function) => {
  if (document.readyState !== 'loading') {
    call(fn)
  } else {
    document.addEventListener('DOMContentLoaded', () => call(fn))
  }
}

export { onReady }