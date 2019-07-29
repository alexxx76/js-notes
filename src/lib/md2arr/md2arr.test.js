import md2arr from './md2arr'

test('test headers', () => {
  expect(JSON.stringify(md2arr('# заголовок')))
    .toBe(JSON.stringify([{ "h1": "заголовок" }]))

  expect(JSON.stringify(md2arr('## заголовок')))
    .toBe(JSON.stringify([{ "h2": "заголовок" }]))

  expect(JSON.stringify(md2arr('### заголовок')))
    .toBe(JSON.stringify([{ "h3": "заголовок" }]))

  expect(JSON.stringify(md2arr('#### заголовок')))
    .toBe(JSON.stringify([{ "h4": "заголовок" }]))

  expect(JSON.stringify(md2arr('##### заголовок')))
    .toBe(JSON.stringify([{ "h5": "заголовок" }]))

  expect(JSON.stringify(md2arr('###### заголовок')))
    .toBe(JSON.stringify([{ "h6": "заголовок" }]))
})

test('test hr', () => {
  expect(JSON.stringify(md2arr('---')))
    .toBe(JSON.stringify([{ "hr": "" }]))

  expect(JSON.stringify(md2arr('----')))
    .toBe(JSON.stringify([{ "hr": "" }]))

  expect(JSON.stringify(md2arr('-----')))
    .toBe(JSON.stringify([{ "hr": "" }]))
})

test('test br', () => {
  expect(JSON.stringify(md2arr('---\n')))
    .toBe(JSON.stringify([{ "hr": "" }, { "br": "" }]))
})

test('test pre', () => {
  expect(JSON.stringify(md2arr('    if (true) console.log(true)')))
    .toBe(JSON.stringify([{ "pre": "if (true) console.log(true)" }]))

  expect(JSON.stringify(md2arr('    if (true) {\n      console.log(true)\n    }')))
    .toBe(JSON.stringify([{ "pre": "if (true) {\n  console.log(true)\n}" }]))

})