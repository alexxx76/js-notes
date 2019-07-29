import text2json from './text2json'

test('test nesting', () => {
  expect(JSON.stringify(text2json('/alex.txt\n/olga.txt\n/bd.txt\n/name/names.txt\ndir/dirs.txt\nlog/time.txt\ndir/name/list.txt\nlog/day.txt\nlog/id/sheet.txt')))
    .toBe(JSON.stringify({
      "/": [
        {"id": 1, "text": "alex.txt"},
        {"id": 2, "text": "olga.txt"},
        {"id": 3, "text": "bd.txt"},
        {"id": 4, "text": "name/names.txt"}
      ],
      "dir": [
        {"id": 5, "text": "dir/dirs.txt"},
        {"id": 7, "text": "dir/name/list.txt"}
      ],
      "log": [
        {"id": 6, "text": "log/time.txt"},
        {"id": 8, "text": "log/day.txt"},
        {"id": 9, "text": "log/id/sheet.txt"}
      ]
    }))
})