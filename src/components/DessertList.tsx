function DessertList() {
  return (
    <section>
      <header className="text-[2.5rem] w-fit font-bold text-rose-900 mb-[1.5rem]">Desserts</header>
      <div role="menu">
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2.5rem]">
          <li>
            <picture>
              <source media="min-width:768px" srcSet="../images/image-waffle-tablet.jpg" />
              <source media="min-width:1024px" srcSet="../images/image-waffle-desktop.jpg" />
              <img
                src="../images/image-waffle-mobile.jpg"
                alt="dessert"
                className="w-auto lg:aspect-auto object-cover md:w-full md:h-[25rem] lg:h-[23rem] rounded-[1.2rem] border-2 border-transparent"
              />
            </picture>
            <div className="text-[3rem] font-semibold">
              <button className="relative top-[-2.5rem] left-[50%] translate-x-[-50%] px-10 py-4 bg-rose-50 rounded-full border-2 border-rose-300  hover:border-red flex gap-5 ">
                <img src="/public/images/icon-add-to-cart.svg" alt="add to cart" />
                <span className="text-rose-900 text-[1.5rem]">Add to Cart</span>
              </button>
              <p className="font-light text-rose-400">Waffle</p>
              <p>Waffle with Berries</p>
              <p className="text-red">$6.50</p>
            </div>
          </li>

          <li>
            <picture>
              <source media="min-width:768px" srcSet="../images/image-creme-brulee-tablet.jpg" />
              <source media="min-width:1024px" srcSet="../images/image-creme-brulee-desktop.jpg" />
              <img
                src="../images/image-creme-brulee-mobile.jpg"
                alt="dessert"
                className="md:w-full w-auto object-cover md:h-[25rem] lg:h-[23rem] rounded-[1.2rem] border-2 border-transparent"
              />
            </picture>
            <div className="text-[3rem] font-semibold">
              <button className="relative top-[-2.5rem] left-[50%] translate-x-[-50%] px-10 py-4 bg-rose-50 rounded-full border-2 border-rose-300  hover:border-red flex gap-5">
                <img src="/public/images/icon-add-to-cart.svg" alt="add to cart" />
                <span className="text-rose-900 text-[1.5rem]">Add to Cart</span>
              </button>
              <p className="font-light text-rose-400">Crème Brûlée</p>
              <p>Vanilla Bean Crème Brûlée</p>
              <p className="text-red">$7.00</p>
            </div>
          </li>

          <li>
            <picture>
              <source media="min-width:768px" srcSet="../images/image-macaron-tablet.jpg" />
              <source media="min-width:1024px" srcSet="../images/image-macaron-desktop.jpg" />
              <img
                src="../images/image-macaron-mobile.jpg"
                alt="dessert"
                className="md:w-full w-auto object-cover md:h-[25rem] lg:h-[23rem] rounded-[1.2rem] border-2 border-transparent"
              />
            </picture>
            <div className="text-[3rem] font-semibold">
              <button className="relative top-[-2.5rem] left-[50%] translate-x-[-50%] px-10 py-4 bg-rose-50 rounded-full border-2 border-rose-300  hover:border-red flex gap-5">
                <img src="/public/images/icon-add-to-cart.svg" alt="add to cart" />
                <span className="text-rose-900 text-[1.5rem]">Add to Cart</span>
              </button>
              <p className="font-light text-rose-400">Macaron</p>
              <p>Macaron Mix of Five</p>
              <p className="text-red">$8.00</p>
            </div>
          </li>

          <li>
            {' '}
            <picture>
              <source media="min-width:768px" srcSet="../images/image-macaron-tablet.jpg" />
              <source media="min-width:1024px" srcSet="../images/image-macaron-desktop.jpg" />
              <img
                src="../images/image-macaron-mobile.jpg"
                alt="dessert"
                className="md:w-full w-auto object-cover md:md:h-[25rem] lg:h-[23rem] rounded-[1.2rem] border-2 border-transparent"
              />
            </picture>
            <div className="text-[3rem] font-semibold">
              <button className="relative top-[-2.5rem] left-[50%] translate-x-[-50%] px-10 py-4 bg-rose-50 rounded-full border-2 border-rose-300  hover:border-red flex gap-5">
                <img src="/public/images/icon-add-to-cart.svg" alt="add to cart" />
                <span className="text-rose-900 text-[1.5rem]">Add to Cart</span>
              </button>
              <p className="font-light text-rose-400">Brownie</p>
              <p>Salted Caramel Brownie</p>
              <p className="text-red">$4.50</p>
            </div>
          </li>

          <li>
            {' '}
            <picture>
              <source media="min-width:768px" srcSet="../images/image-tiramsu-tablet.jpg" />
              <source media="min-width:1024px" srcSet="../images/image-tiramsu-desktop.jpg" />
              <img
                src="/images/image-tiramisu-mobile.jpg"
                alt="dessert"
                className="md:w-full w-auto object-cover md:h-[25rem] lg:h-[23rem] rounded-[1.2rem] border-2 border-transparent"
              />
            </picture>
            <div className="text-[3rem] font-semibold">
              <button className="relative top-[-2.5rem] left-[50%] translate-x-[-50%] px-10 py-4 bg-rose-50 rounded-full border-2 border-rose-300  hover:border-red flex gap-5">
                <img src="/public/images/icon-add-to-cart.svg" alt="add to cart" />
                <span className="text-rose-900 text-[1.5rem]">Add to Cart</span>
              </button>
              <p className="font-light text-rose-400">Tiramisu</p>
              <p>Classic Tiramisu</p>
              <p className="text-red">$5.50</p>
            </div>
          </li>

          <li>
            <picture>
              <source media="min-width:768px" srcSet="../images/image-creme-brulee-tablet.jpg" />
              <source media="min-width:1024px" srcSet="../images/image-creme-brulee-desktop.jpg" />
              <img
                src="../images/image-creme-brulee-mobile.jpg"
                alt="dessert"
                className="md:w-full w-auto object-cover md:h-[25rem] lg:h-[23rem] rounded-[1.2rem] border-2 border-transparent"
              />
            </picture>
            <div className="text-[3rem] font-semibold">
              <button className="relative top-[-2.5rem] left-[50%] translate-x-[-50%] px-10 py-4 bg-rose-50 rounded-full border-2 border-rose-300  hover:border-red flex gap-5">
                <img src="/public/images/icon-add-to-cart.svg" alt="add to cart" />
                <span className="text-rose-900 text-[1.5rem]">Add to Cart</span>
              </button>
              <p className="font-light text-rose-400">Crème Brûlée</p>
              <p>Vanilla Bean Crème Brûlée</p>
              <p className="text-red">$7.00</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default DessertList;
