document.write("<h2 class='percentage'> Sum </h2>");
let number_1 = 3;
let number_2 = 5;
let mathamatical;
(numberp = number_1 + number_2),
  (numbers = number_1 - number_2),
  (numberm = number_1 * number_2);
numberd = number_1 / number_2;
console.log(mathamatical);
document.write("sum of 3 and 5 is " + numberp + "<br>" + "<br>");

document.write("<h2 class='percentage'>Mathamatical Expression</h2>");
let value;
value = 11;
values = value++;
new_value = value + 7;
new_1value = new_value--;
new_2value = new_value / 3;

document.write("value after declaration is : undefined" + "<br>");
document.write("initial value :11" + "<br>");
document.write("value after increment :12" + "<br>");
document.write("value after addition is :19" + "<br>");
document.write("value after decreement is :18" + "<br>");
document.write("the remainder is :0" + "<br>");

let counter= localStorage.getItem("counter")
if (counter === null){
    counter=0;
}
else {
counter =parseInt(counter);
}
counter++;
localStorage.setItem("counter",counter);
alert("you have visited " + counter + " times " );


let movie_tickets;
(ticket_price = 1200), (total_tickets = 5);
tickets_cost = ticket_price * total_tickets;
document.write(
  "<h2 id='tickets' class='percentage'> Calculate The Cost Of 5 Movie Tickets </h2>"
);
document.write(
  "<h4 id='tickets'>The Cost Of Buying 5 Ticket Is 4000</h4>" + "<br>"
);

document.write("<h2 class='percentage'>table of 7</h2>");
document.write("7 * 1 = 7" + "<br>");
document.write("7 * 2 = 14" + "<br>");
document.write("7 * 3 = 21" + "<br>");
document.write("7 * 4 = 28" + "<br>");
document.write("7 * 5 = 35" + "<br>");
document.write("7 * 6 = 42" + "<br>");
document.write("7 * 7 = 49" + "<br>");
document.write("7 * 8 = 56" + "<br>");
document.write("7 * 9 = 63" + "<br>");
document.write("7 * 10 = 70" + "<br>" + "<br>" + "<br>");

document.write(
  "<h2 class='percentage'>conversion of  °F into °C or °C into °F </h2>"
);
let celcius = 30;
let fahrenheit = 100;

calculate_fahrenheit = (celcius * 9) / 5 + 32;

document.write(
  "<h4>" + celcius + " \xB0C " + calculate_fahrenheit + " \xB0F </h4>"
);

calculate_celcius = ((fahrenheit - 32) * 5) / 9;

document.write(
  "<h4 >" + fahrenheit + " \xB0F " + calculate_celcius + "\xB0C </h4>" + "<br>"
);

document.write("<h2 class='percentage'>shopping cart</h2>" + "<br>");
let price_item_1 = 300;
document.write("<h4> price of item 1 is " + price_item_1 + "</h4>");
let quantity_item_1 = 4;
document.write("<h4> order quantity of item 1 is " + quantity_item_1 + "</h4>");
let price_item_2 = 140;
document.write("<h4> price of item 2 is " + price_item_2 + "</h4>");

let quantity_item_2 = 7;
document.write("<h4> order quantity of item 2 is " + quantity_item_2 + "</h4>");

let shipping_charges = 200;
document.write(
  "<h4> shipping charges of item 1 and item 2 is " +
    shipping_charges +
    "</h4>" +
    "<br>"
);

let total_cost_item_1 = price_item_1 * quantity_item_1;
let total_cost_item_2 = price_item_2 * quantity_item_2;
let total_cost_item_1_and_2 =
  total_cost_item_1 + total_cost_item_2 + shipping_charges;
document.write(
  "<h4>total cost of orders is " +
    total_cost_item_1_and_2 +
    "</h4>" +
    "<br>" +
    "<br>"
);

document.write("<h3 class='percentage'>PERCENTAGE</h3>");
let total_marks = 900;
document.write("<h4>Total marks = " + total_marks + "</h4>");
let obtained_marks = 700;
document.write("<h4>obtained_marks = " + obtained_marks + "</h4>");
percentage = (obtained_marks / total_marks) * 100;
document.write("<h4>percentage = " + percentage + "</h4>" + "<br>");

let dollar_in_pkr = 140;
let riyal_in_pkr = 28;
document.write("<h2 class='percentage'>Total currency in pkr</h2>");
let total_currency = 10 * dollar_in_pkr + 28 * riyal_in_pkr;
document.write("Total Currency in pkr is " + total_currency + "<br>" + "<br>");

let random_num = 10;
let arithmetic_sequence = ((random_num + 5) * 10) / 2;

document.write("<h2 class='percentage'>Age Calculator</h2>");
let current_year = 2024;
document.write("current year = " + current_year + "<br>");
let birth_year = 1990;
document.write("birth year = " + birth_year + "<br>");
let your_age = current_year - birth_year;
document.write(" your age = " + your_age + "<br>");

document.write("<h2 class='percentage'> The Geometrizer</h2>");
let radius = 80;
document.write("Radius of a circle = " + radius + "<br>");
let pi = 3.142;
let circumference = 2 * pi * radius;
document.write("The circumference   = " + circumference + "<br>");
let area = pi * radius * radius;
document.write("The area = " + area);

document.write(" <h2 class='percentage'>Life Time Supply Calculator</h2>");
let snack = "popcorns";
document.write("Favourate Snack: " + snack + "<br>");
let current_age = 23;
document.write("Current age" + current_age + "<br>");
let maximum_age = 40;
document.write("Estimated Maximum Age: " + maximum_age + "<br>");
let per_day = 2;
document.write("Amount of snacks per day: " + per_day + "<br>");
let need_total_snacks = (maximum_age - current_age) * 2;
document.write(
  "You will need " +
    need_total_snacks +
    " popcorn to last you until the ripe old age of 40"
);
