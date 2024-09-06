// const params = ['all', 'hori', 'vert', 'top', 'left', 'right', 'bottom']


// const border = ['all','top','left','right','bottom']

// function getFirstChineseLetter(obj) {
//   let str = obj.charAt(0);
//   let uni = obj.charCodeAt(0);
//   //不是中文，直接返回
//   if (uni > 40869 || uni < 19968) {
//       return str;
//   } else {
//       return C2Pin.firstChar(str);
//   }
// }

// const json = (p, arr) => {
//   return border.reduce((acc, i) => {
//     const firstChar = getFirstChineseLetter(p)
//     acc[`${p}-${i}`] = {
//       "prefix": `${firstChar}-${i}`,
//       "body": [`${p}='${i}'`],
//       "description": `${p}='${i}' ${p} width 1`
//     }
//     if (arr && arr.length) {
//       arr.forEach(element => {
//         acc[`${p}-${i}-x${element}`] = {
//           "prefix": `${firstChar}-${i}x${element}`,
//           "body": [`${p}='${i}x${element}'`],
//           "description": `${p}='${i}x${element}' ${p} width 1x${element}`
//         }
//       });
//     }
//     return acc
//   }, {})
// }

// console.log(JSON.stringify(json('border',[2])))


// const texts = ['center', 'start', 'end']

// const json = texts.reduce((acc, i) => {
//   acc[`justify-content-${i}`] = {
//     "prefix": `justify-content-${i}`,
//     "body": [`justify-content='${i}'`],
//     "description": `justify-content ${i}`
//   }
//   return acc
// }, {})

// console.log(JSON.stringify(json))


