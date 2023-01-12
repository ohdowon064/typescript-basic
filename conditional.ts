let score = 770;

if (score >= 700) {
  console.log("Good");
} else if (score >= 600) {
  console.log("Fair");
} else {
  console.log("Fail");
}

enum Category {
  VVIP,
  VIP,
  REGULAR,
}

let mycategory: Category = Category.VIP;

function classification(category: Category): void {
  switch (category) {
    case Category.VVIP:
      console.log("VVIP");
      break;
    case Category.VIP:
      console.log("VIP");
      break;
    case Category.REGULAR:
      console.log("REGULAR");
      break;
    default:
      console.log("Unknown");
  }
}

classification(mycategory);

let isMember: boolean = true;
let fee = isMember ? 5 : 10;
console.log(fee);
