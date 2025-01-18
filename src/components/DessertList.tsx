function DessertList() {
  return (
    <section>
      <header className="mb-[2.5rem] w-fit text-[3rem] font-bold text-rose-900">
        Desserts
      </header>
      <div role="menu">
        <ul className="grid gap-[2.5rem] md:grid-cols-2 lg:grid-cols-3">
          <li>
            <picture>
              <source
                media="min-width:768px"
                srcSet="../images/image-waffle-tablet.jpg"
              />
              <source
                media="min-width:1024px"
                srcSet="../images/image-waffle-desktop.jpg"
              />
              <img
                src="../images/image-waffle-mobile.jpg"
                alt="dessert"
                className="w-auto rounded-[1.2rem] border-2 border-transparent object-cover md:h-[25rem] md:w-full lg:aspect-auto lg:h-[23rem]"
              />
            </picture>
            <div className="font-semibold">
              <button className="relative left-[50%] top-[-2.5rem] flex translate-x-[-50%] gap-5 rounded-full border-2 border-rose-300 bg-rose-50 px-10 py-4 hover:border-red">
                <img src="/images/icon-add-to-cart.svg" alt="add to cart" />
                <span className="text-[1.5rem] text-rose-900">Add to Cart</span>
              </button>
              <div className="text-[3rem]">
                <p className="font-light text-rose-400">Waffle</p>
                <p>Waffle with Berries</p>
                <p className="text-red">$6.50</p>
              </div>
            </div>
          </li>

          <li>
            <picture>
              <source
                media="min-width:768px"
                srcSet="../images/image-creme-brulee-tablet.jpg"
              />
              <source
                media="min-width:1024px"
                srcSet="../images/image-creme-brulee-desktop.jpg"
              />
              <img
                src="../images/image-creme-brulee-mobile.jpg"
                alt="dessert"
                className="w-auto rounded-[1.2rem] border-2 border-transparent object-cover md:h-[25rem] md:w-full lg:h-[23rem]"
              />
            </picture>
            <div className="font-semibold">
              <button className="relative left-[50%] top-[-2.5rem] flex translate-x-[-50%] gap-5 rounded-full border-2 border-rose-300 bg-rose-50 px-10 py-4 hover:border-red">
                <img src="/images/icon-add-to-cart.svg" alt="add to cart" />
                <span className="text-[1.5rem] text-rose-900">Add to Cart</span>
              </button>
              <div className="text-[3rem]">
                <p className="font-light text-rose-400">Crème Brûlée</p>
                <p>Vanilla Bean Crème Brûlée</p>
                <p className="text-red">$7.00</p>
              </div>
            </div>
          </li>

          <li>
            <picture>
              <source
                media="min-width:768px"
                srcSet="../images/image-macaron-tablet.jpg"
              />
              <source
                media="min-width:1024px"
                srcSet="../images/image-macaron-desktop.jpg"
              />
              <img
                src="../images/image-macaron-mobile.jpg"
                alt="dessert"
                className="w-auto rounded-[1.2rem] border-2 border-transparent object-cover md:h-[25rem] md:w-full lg:h-[23rem]"
              />
            </picture>
            <div className="font-semibold">
              <button className="relative left-[50%] top-[-2.5rem] flex translate-x-[-50%] gap-5 rounded-full border-2 border-rose-300 bg-rose-50 px-10 py-4 hover:border-red">
                <img src="/images/icon-add-to-cart.svg" alt="add to cart" />
                <span className="text-[1.5rem] text-rose-900">Add to Cart</span>
              </button>
              <div className="text-[3rem]">
                <p className="font-light text-rose-400">Macaron</p>
                <p>Macaron Mix of Five</p>
                <p className="text-red">$8.00</p>
              </div>
            </div>
          </li>

          <li>
            {" "}
            <picture>
              <source
                media="min-width:768px"
                srcSet="../images/image-macaron-tablet.jpg"
              />
              <source
                media="min-width:1024px"
                srcSet="../images/image-macaron-desktop.jpg"
              />
              <img
                src="../images/image-macaron-mobile.jpg"
                alt="dessert"
                className="w-auto rounded-[1.2rem] border-2 border-transparent object-cover md:md:h-[25rem] md:w-full lg:h-[23rem]"
              />
            </picture>
            <div className="font-semibold">
              <button className="relative left-[50%] top-[-2.5rem] flex translate-x-[-50%] gap-5 rounded-full border-2 border-rose-300 bg-rose-50 px-10 py-4 hover:border-red">
                <img src="/images/icon-add-to-cart.svg" alt="add to cart" />
                <span className="text-[1.5rem] text-rose-900">Add to Cart</span>
              </button>
              <div className="text-[3rem]">
                <p className="font-light text-rose-400">Brownie</p>
                <p>Salted Caramel Brownie</p>
                <p className="text-red">$4.50</p>
              </div>
            </div>
          </li>

          <li>
            {" "}
            <picture>
              <source
                media="min-width:768px"
                srcSet="../images/image-tiramsu-tablet.jpg"
              />
              <source
                media="min-width:1024px"
                srcSet="../images/image-tiramsu-desktop.jpg"
              />
              <img
                src="/images/image-tiramisu-mobile.jpg"
                alt="dessert"
                className="w-auto rounded-[1.2rem] border-2 border-transparent object-cover md:h-[25rem] md:w-full lg:h-[23rem]"
              />
            </picture>
            <div className="font-semibold">
              <button className="relative left-[50%] top-[-2.5rem] flex translate-x-[-50%] gap-5 rounded-full border-2 border-rose-300 bg-rose-50 px-10 py-4 hover:border-red">
                <img src="/images/icon-add-to-cart.svg" alt="add to cart" />
                <span className="text-[1.5rem] text-rose-900">Add to Cart</span>
              </button>
              <div className="text-[3rem]">
                <p className="font-light text-rose-400">Tiramisu</p>
                <p>Classic Tiramisu</p>
                <p className="text-red">$5.50</p>
              </div>
            </div>
          </li>

          <li>
            <picture>
              <source
                media="min-width:768px"
                srcSet="../images/image-creme-brulee-tablet.jpg"
              />
              <source
                media="min-width:1024px"
                srcSet="../images/image-creme-brulee-desktop.jpg"
              />
              <img
                src="../images/image-creme-brulee-mobile.jpg"
                alt="dessert"
                className="w-auto rounded-[1.2rem] border-2 border-transparent object-cover md:h-[25rem] md:w-full lg:h-[23rem]"
              />
            </picture>
            <div className="font-semibold">
              <button className="relative left-[50%] top-[-2.5rem] flex translate-x-[-50%] gap-5 rounded-full border-2 border-rose-300 bg-rose-50 px-10 py-4 hover:border-red">
                <img src="/images/icon-add-to-cart.svg" alt="add to cart" />
                <span className="text-[1.5rem] text-rose-900">Add to Cart</span>
              </button>
              <div className="text-[3rem]">
                <p className="font-light text-rose-400">Crème Brûlée</p>
                <p>Vanilla Bean Crème Brûlée</p>
                <p className="text-red">$7.00</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default DessertList;
