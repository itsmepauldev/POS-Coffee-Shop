let Total = 0;
let Price, Add, Remove, Update;
let all = [];

Price = (number) => {
  const price = {
    1: { name: "Espresso", price: 120 },
    2: { name: "Cappuccino", price: 160 },
    3: { name: "Latte", price: 170 },
    4: { name: "Americano", price: 130 },
    5: { name: "Mocha", price: 180 },
    6: { name: "Flat White", price: 170 },
    7: { name: "Macchiato", price: 150 },
    8: { name: "Cortado", price: 160 },
    9: { name: "Affogato", price: 190 },
    10: { name: " Irish Coffee", price: 200 },
    11: { name: "Ristretto", price: 120 },
    12: { name: "Iced Latte", price: 180 },
  };
  const selectItem = price[number];
  all.push({ name: selectItem.name, price: selectItem.price });
  Add(selectItem.price);
  Update();
};

Add = (item) => {
  Total += item;
  return Total;
};

Remove = (index) => {
  Total -= all[index].price;
  all.splice(index, 1);
  Update();
};

Update = () => {
  document.getElementById("result").innerHTML =
    `<table class="border-collapse border border-gray-200 mt-10 bg-[#7a5e46] min-w-full">
    <tr>
    <thead>
    <th class="border-2 border-[#F7E1BC] px-4 py-2 text-center text-[#F7E1BC] font-semibold">Order #</th>
    <th class="border-2 border-[#F7E1BC] px-4 py-2 text-center text-[#F7E1BC] font-semibold">Name</th>
    <th class="border-2 border-[#F7E1BC] px-4 py-2 text-center text-[#F7E1BC] font-semibold">Price</th>
    <th class="border-2 border-[#F7E1BC] px-4 py-2 text-center text-[#F7E1BC] font-semibold">Remove Item</th>
    </tr>
    </thead>` +
    all
      .map(
        (item, index) => `
 
    <div>
    <tbody>
    <tr>
    <td class="border-2 border-[#F7E1BC] px-4 py-2 text-center text-[#F7E1BC] font-semibold">${
      index + 1
    }</td>
    <td class="border-2 border-[#F7E1BC] px-4 py-2 text-center text-[#F7E1BC] font-semibold"> ${
      item.name
    }</td>
    <td class="border-2 border-[#F7E1BC] px-4 py-2 text-center text-[#F7E1BC] font-semibold"> ${
      item.price
    } </td>
     <td class="border-2 border-[#F7E1BC] px-4 py-2 text-center text-[#F7E1BC] font-semibold">    <button onclick="Remove(${index})">Remove</button></td>
    </tr>
  
    `
      )
      .join("") +
    `</tbody>
      <tfoot>
        <tr class="border-2 border-[#F7E1BC] px-4 py-2 text-end text-[#F7E1BC] font-semibold">
          <td colspan="3" ><strong>Total:</strong></td>
          <td class="text-center"> ₱ ${Total}</td>
        </tr>
      </tfoot>
    </table>`;
};
