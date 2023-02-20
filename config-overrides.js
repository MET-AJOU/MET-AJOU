const { useBabelRc, addWebpackAlias, override } = require("customize-cra");
const path = require("path");

const resolve = (src) => path.resolve(__dirname, src);

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    "@Pages": resolve("src/Components/Pages/"),
    "@Atoms": resolve("src/Components/Atoms/"),
    "@Molecules": resolve("src/Components/Molecules/"),
    "@Organisms": resolve("src/Components/Organisms/"),
    "@Templates": resolve("src/Components/Templates/"),
    "@Constant": resolve("src/Common/Constant/"),
    "@Style": resolve("src/Common/Style/"),
    "@Util": resolve("src/Common/Util/"),
    "@Type": resolve("src/Common/Type/"),
    "@Store": resolve("src/Common/Store/"),
    "@Route": resolve("src/Routes/"),
    "@Recoils": resolve("src/Recoils/"),
    "@THREE": resolve("src/THREE/"),
    "@Hook": resolve("src/Hook/"),
    "@Socket": resolve("src/Socket/"),
  })
);
