import { Home } from "./components/Home/Home.js";

const pageWrapper = document.getElementById("root");

const homePage = new Home(pageWrapper, "13:00:59");
homePage.render();
