var DaysInMonth = {
		0: 31,
    1: 29,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31
}

var bSchedule = {
1: "Normal day",
2: "Normal day",
3: "Normal day",
4: "Normal day",
5: "Normal day",
6: "Normal day",
7: "Normal day",
8: "Normal day",
9: "Normal day",
10: "Normal day",
11: "Normal day",
12: "Normal day",
13: "Normal day",
14: "Normal day",
15: "Food15",
16: "No school, No lunch service",
17: "Food17",
18: "Food18",
19: "Advisory. Single assembly schedule.",
20: "No school, No lunch service",
21: "No school, No lunch service",
22: "Normal day",
23: "Normal day",
24: "Normal day",
25: "Advisory. Double assembly schedule.",
26: "Normal day",
27: "Normal day",
28: "Normal day",
29: "Advisory. Double assembly schedule.",
};

var bSchedule2 = {
1: "Normal day",
2: "Normal day",
3: "Normal day",
4: "Normal day",
5: "Normal day",
6: "Normal day",
7: "Normal day",
8: "Normal day",
9: "Normal day",
10: "Normal day",
11: "Normal day",
12: "Normal day",
13: "Normal day",
14: "Normal day",
15: "Food15",
16: "No school, No lunch service",
17: "Food17",
18: "Food18",
19: "Advisory. Single assembly schedule.",
20: "No school, No lunch service",
21: "No school, No lunch service",
22: "Normal day",
23: "Normal day",
24: "Normal day",
25: "Advisory. Double assembly schedule.",
};

//Based on the reported day of the clients computer, the food in the array will be displayed.//
function bellSchedule() {
    var d1 = new Date();
    var n1 = d1.getDate();
    var m1 = d1.getMonth();
    var nextMonth = m1 + 1;
    document.getElementById('showSchedule').innerHTML = bSchedule[n1];
    if (n1 > DaysInMonth[m1]) {
    		document.getElementById('showSchedule2').innerHTML = bSchedule[n1+1];
    }
    else {
    		document.getElementById('showSchedule2').innerHTML = bSchedule2[n1-nextMonth+1];
    }
}

bellSchedule();
