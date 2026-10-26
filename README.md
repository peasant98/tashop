# Tashop Crafts

Live site: https://peasant98.github.io/tashop/

## Selling a piece with Stripe (about 2 minutes per piece)
1. Stripe Dashboard → **Payment Links** → **+ New**.
2. Add a product: name and photo (from `img/`), price, "one-time". Under **Advanced**, turn on **Collect customers' addresses** (shipping), and set **Limit the number of payments** to the quantity in stock (1 for one-of-a-kind).
3. Copy the link (https://buy.stripe.com/...).
4. In `products.js`, find the piece and set `price: 25` and `stripe: "https://buy.stripe.com/..."`.
5. When it sells out, set `status: "sold"`.

Pieces without a Stripe link show "Ask Tash about this", which opens an Instagram DM.
