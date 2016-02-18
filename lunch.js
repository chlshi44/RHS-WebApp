//Now input days of the month into a single array. Then set the days to match the lunch//
var lunch = {
1: "Cheeseburger",
2: "Taco",
3: "Saimin",
4: "Steak",
5: "Udon",
6: "Katsu",
7: "Kim Chee",
8: "Pizza",
9: "Egg Roll",
10: "Food1",
11: "Food2",
12: "Food3",
13: "Food4",
14: "Food5",
15: "Food6",
16: "Food7",
17: "Food8",
18: "Food9",
19: "Food10",
20: "FoodA",
21: "FoodB",
22: "FoodC",
23: "FoodD",
24: "FoodE",
25: "FoodF",
26: "FoodG",
27: "FoodH",
28: "FoodI",
29: "FoodJ",
30: "FoodK",
31: "FoodL"
};

var weekday = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

//Based on the reported day of the clients computer, the food in the array will be displayed.//
function lunchDay() {
    var d = new Date();
    var n = d.getDate();
    var w = d.getDay();
    document.getElementById('demo').innerHTML = lunch[n] + weekday[w];
}
