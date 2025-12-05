import lap from "./assets/laptop.jpg"
import mob from "./assets/phone.jpg"
import tab from "./assets/tablet.jpg"

function Head() {

  let product = [
    {
      pname: "Laptop",
      pprice: 20000,
      pbrand: "Acer",
      pimg: lap
    },
    {
      pname: "Mobile",
      pprice: 50000,
      pbrand: "iPhone",
      pimg: mob
    },
    {
      pname: "Tablet",
      pprice: 10000,
      pbrand: "Redmi",
      pimg: tab
    }
  ];

  return (
    <>
      <section className="py-10">
        <div className="flex justify-center gap-10">
          {product.map((item, index) => (
            <div key={index} className="w-72 text-center">
              <img
                src={item.pimg}
                alt={item.pname}
                className="h-56 w-full object-cover"
              />
              <h2 className="text-lg font-semibold mt-3">{item.pname}</h2>
              <p className="text-sm text-gray-600">{item.pbrand}</p>
              <p className="font-bold mt-1">₹{item.pprice}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Head;
