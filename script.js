var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];
// console.log(programmingLanguages)

// for (var language of programmingLanguages) {
//   console.log(`I want to learn ${language}!`);
// };

// programmingLanguages.forEach(function (element, index) {
//   console.log(`${index + 1}. ${element.toUpperCase()}`);
// });

var updatedLanguages = programmingLanguages.filter(function (item) {
  return item.includes("y");
});
console.log(updatedLanguages);
