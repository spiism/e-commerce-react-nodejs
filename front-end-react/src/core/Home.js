// import React, { useState, useEffect } from "react";
// import Layout from "./Layout";
// import { getProducts } from "./apiCore";
// import Card from "./Card";
// import Search from "./Search";
//
// const Home = () => {
//   const [productsBySell, setProductsBySell] = useState([]);
//   const [productsByArrival, setProductsByArrival] = useState([]);
//   const [error, setError] = useState(false);
//
//   const loadProductsBySell = () => {
//     getProducts("sold").then((data) => {
//       if (data.error) {
//         setError(data.error);
//       } else {
//         setProductsBySell(data);
//       }
//     });
//   };
//
//   const loadProductsByArrival = () => {
//     getProducts("createdAt").then((data) => {
//       console.log(data);
//       if (data.error) {
//         setError(data.error);
//       } else {
//         setProductsByArrival(data);
//       }
//     });
//   };
//
//   useEffect(() => {
//     loadProductsByArrival();
//     loadProductsBySell();
//   }, []);
//
//   return (
//     <Layout
//       title="E book store"
//       description="E book store"
//       className="container-fluid"
//     >
//       <Search />
//       <h2 className="mb-4">New Arrivals</h2>
//       <div className="row">
//         {productsByArrival.map((product, i) => (
//           <div key={i} className="col-md-4 col-12 mb-3">
//             <Card product={product} />
//           </div>
//         ))}
//       </div>
//
//       <h2 className="mb-4">Best Sellers</h2>
//       <div className="row">
//         {productsBySell.map((product, i) => (
//           <div key={i} className="col-4 mb-3">
//             <Card product={product} />
//           </div>
//         ))}
//       </div>
//     </Layout>
//   );
// };
//
// export default Home;





import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadProductsBySell = () => {
    return getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    return getProducts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    Promise.all([loadProductsByArrival(), loadProductsBySell()])
        .finally(() => setLoading(false));
  }, []);

  return (
      <Layout
          title="E book store"
          description="E book store"
          className="container-fluid"
      >
        <Search />

        {loading ? (
            <div className="text-center mt-5 mb-5">
              <div className="custom-spinner mb-4" />
              <h4>This app currently uses free-tier API hosting</h4>
              <p>Please wait ~1 minute for the content to load.</p>
            </div>
        ) : (
            <>
              <h2 className="mb-4">New Arrivals</h2>
              <div className="row">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-md-4 col-12 mb-3">
                      <Card product={product} />
                    </div>
                ))}
              </div>

              <h2 className="mb-4">Best Sellers</h2>
              <div className="row">
                {productsBySell.map((product, i) => (
                    <div key={i} className="col-md-4 col-12 mb-3">
                      <Card product={product} />
                    </div>
                ))}
              </div>
            </>
        )}

        {/* Spinner Styles */}
        <style jsx="true">{`
        .custom-spinner {
          width: 50px;
          height: 50px;
          margin: 0 auto;
          border: 6px solid #ccc;
          border-top: 6px solid #007bff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      </Layout>
  );
};

export default Home;


