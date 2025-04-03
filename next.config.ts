// import { NextConfig } from "next";
import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production";

// make error in webpack   only one sciprt 
// const nextConfig : NextConfig = {
//   output: "export",
//   basePath: "",
//   // assetPrefix: "./", // This is key for relative paths
//   images: {
//     unoptimized: true, // Required for static exports
//   },
// };
// export default nextConfig;




  const nextConfig: NextConfig = {
    output: "export",
    // basePath: "",
    // webpack: (config) => {
    //   config.output.publicPath = "./";
    //   return config;
    // }    ,
    assetPrefix: "./", // This is key for relative paths
    images: {
      unoptimized: true,
      // path: "./", // This is the key change
      loader: "custom",
      loaderFile: "./image-loader.js",
    },

  };
  export default nextConfig;


