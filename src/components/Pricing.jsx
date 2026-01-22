import { MoveLeft } from "lucide-react";

const Pricing = () => {
  const cakeSizes = [
    { size: '6"', prices: ["18k", "30k", "40k", "50k"] },
    { size: '7"', prices: ["22k", "35k", "50k", "65k"] },
    { size: '8"', prices: ["27k", "40k", "55k", "70k"] },
    { size: '9"', prices: ["32k", "50k", "60k", "80k"] },
    { size: '10"', prices: ["35k", "55k", "75k", "95k"] },
  ];

  return (
    <section className="py-16 font-['Quicksand'] bg-[var(--color-primary)]">
      <div className="cont">
        <a href="/" className="flex items-center gap-2">
          {" "}
          <MoveLeft /> Back to Home{" "}
        </a>
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2 tracking-tight text-[var(--color-secondary)]">
            Tabbie Bakes
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[var(--color-secondary)] opacity-30"></div>
            <h2 className="text-xl tracking-[0.2em] font-medium text-stone-600 uppercase">
              Price List
            </h2>
            <div className="h-px w-12 bg-[var(--color-secondary)] opacity-30"></div>
          </div>
          <p className="italic text-stone-500 max-w-md mx-auto text-sm">
            Note: Prices differ based on cake sizes, flavors, frosting, and
            designs.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bento & Cupcakes */}
          <section className="min-h-fit bg-white/50 p-8 rounded-2xl shadow-sm border border-[var(--color-secondary)]/20 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 border-b border-[var(--color-secondary)]/10 pb-2">
              Bento & Cupcakes
            </h3>
            <ul className="space-y-4 text-stone-700 font-medium">
              <li className="flex justify-between">
                <span>
                  Bento Size 4{" "}
                  <span className="text-xs opacity-60">(1 Layer)</span>
                </span>
                <span className="font-bold text-[var(--color-secondary)]">
                  8k
                </span>
              </li>
              <li className="flex justify-between">
                <span>
                  Bento Size 5{" "}
                  <span className="text-xs opacity-60">(1 Layer)</span>
                </span>
                <span className="font-bold text-[var(--color-secondary)]">
                  10k
                </span>
              </li>
              <div className="my-4 border-t border-dashed border-[var(--color-secondary)]/20"></div>
              <li className="flex justify-between">
                <span>Box of 6 Cupcakes</span>
                <span className="font-bold text-[var(--color-secondary)]">
                  10k
                </span>
              </li>
              <li className="flex justify-between">
                <span>Box of 12 Cupcakes</span>
                <span className="font-bold text-[var(--color-secondary)]">
                  20k
                </span>
              </li>
            </ul>
          </section>

          {/* Wedding Cakes */}
          <section className="min-h-fit bg-[var(--color-secondary)] p-8 rounded-2xl shadow-lg text-[var(--color-primary)] relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-2">Wedding Cakes</h3>
            <p className="opacity-80 text-sm mb-6 uppercase tracking-wider font-semibold">
              Two Tiers (5" & 8")
            </p>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-[var(--color-primary)]/20 pb-2">
                <span className="text-lg">Fondant</span>
                <span className="text-2xl font-bold">170k</span>
              </li>
              <li className="flex justify-between items-center border-b border-[var(--color-primary)]/20 pb-2">
                <span className="text-lg">Buttercream</span>
                <span className="text-2xl font-bold">80k</span>
              </li>
            </ul>
          </section>

          {/* Buttercream High Layer Cakes Table */}
          <section className="min-h-fit md:col-span-2 bg-white/50 p-4 sm:p-8 rounded-2xl shadow-sm border border-[var(--color-secondary)]/20">
            <h3 className="text-2xl font-bold text-[var(--color-secondary)] mb-6">
              Buttercream High Layer Cakes
            </h3>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[var(--color-secondary)] text-[var(--color-primary)]">
                    <th className="p-4 font-bold uppercase text-xs tracking-widest">
                      Size
                    </th>
                    <th className="p-4 font-bold uppercase text-xs tracking-widest text-center">
                      1 Layer
                    </th>
                    <th className="p-4 font-bold uppercase text-xs tracking-widest text-center">
                      2 Layers
                    </th>
                    <th className="p-4 font-bold uppercase text-xs tracking-widest text-center">
                      3 Layers
                    </th>
                    <th className="p-4 font-bold uppercase text-xs tracking-widest text-center">
                      4 Layers
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {cakeSizes.map((item) => (
                    <tr
                      key={item.size}
                      className="hover:bg-white/80 transition-colors"
                    >
                      <td className="p-4 font-bold text-stone-800 bg-stone-100/50">
                        {item.size}
                      </td>
                      {item.prices.map((price, idx) => (
                        <td
                          key={idx}
                          className="p-4 text-center text-stone-600 font-semibold"
                        >
                          {price}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Cake Cuts */}
          <section className="min-h-fit bg-white/50 p-8 rounded-2xl shadow-sm border border-[var(--color-secondary)]/20">
            <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-1">
              Cake Cuts
            </h3>
            <p className="text-xs text-stone-400 mb-6 italic font-medium">
              Fancy paper box packaging
            </p>
            <div className="space-y-4 font-medium">
              <div className="flex justify-between">
                <span className="text-stone-700">Vanilla</span>
                <span className="text-[var(--color-secondary)] font-bold">
                  500{" "}
                  <small className="text-[10px] opacity-60 font-normal">
                    / CUT
                  </small>
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-700">Red Velvet / Chocolate</span>
                <span className="text-[var(--color-secondary)] font-bold">
                  700{" "}
                  <small className="text-[10px] opacity-60 font-normal">
                    / CUT
                  </small>
                </span>
              </div>
              <p className="text-[10px] bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] py-1 px-3 rounded-full inline-block mt-4">
                * Minimum order: 100pcs
              </p>
            </div>
          </section>

          {/* Small Chops */}
          <section className="min-h-fit bg-white/50 p-8 rounded-2xl shadow-sm border border-[var(--color-secondary)]/20">
            <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-1">
              Small Chops
            </h3>
            <p className="text-xs text-stone-400 mb-6 italic font-medium">
              1 Samosa, 1 Spring roll, 3 Puff, 1 Protein
            </p>
            <div className="space-y-4 font-medium text-stone-700">
              <div className="flex justify-between">
                <span>With Peppered Meat</span>
                <span className="text-[var(--color-secondary)] font-bold">
                  1,500
                </span>
              </div>
              <div className="flex justify-between">
                <span>With Peppered Chicken</span>
                <span className="text-[var(--color-secondary)] font-bold">
                  2,500
                </span>
              </div>
              <p className="text-[10px] bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] py-1 px-3 rounded-full inline-block mt-4">
                * Minimum order: 20 plates
              </p>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <footer className="text-center mt-16 pt-8 border-t border-[var(--color-secondary)]/20">
          <p className="text-stone-500 text-sm mb-4 font-medium">
            Ready to place an order?
          </p>

          <a href="https://wa.me/c/2348078391732" target="_blank">
            <button className="bg-[var(--color-secondary)] text-[var(--color-primary)] px-10 py-3 rounded-full hover:brightness-110 transition-all shadow-md active:scale-95 font-bold uppercase tracking-widest text-xs">
              Contact Tabbie Bakes
            </button>
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Pricing;
