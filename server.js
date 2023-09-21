// sk_test_51NggeCCh6R5ApbyipO2pVwIqCSJvcBEDJEXUkvWuQLwMbvEUTGC3pjDIPYnrIbyW2Z3ST4QNKGd9KQOXXHKp8Ggs006hmdvEpe

// prod_OTeD71FrgaLWi0 : Pierced Owl Rose Gold Plated Stainless Steel Double

// Solid Gold Petite Micropave : prod_OTeA27JhXaY1kI
// Mens Casual Slim Fit: prod_OTe75ZnHPBmBRP
// Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops : prod_OTe5WYMPvqPm0Z;
// Mens Cotton Jacket : prod_OTe4OwwMUWqHxu

const expreess = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NggeCCh6R5ApbyipO2pVwIqCSJvcBEDJEXUkvWuQLwMbvEUTGC3pjDIPYnrIbyW2Z3ST4QNKGd9KQOXXHKp8Ggs006hmdvEpe"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://locahost:3000/success",
    cancel_url: "http://locahost:3000/cancel",
  });
  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("listening on port 4000"));
