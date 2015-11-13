import ko from "knockout";
import router from "./Router";
import NavBar from "./components/nav-bar/nav-bar";
import HomePage from "./components/home-page/home";
import HelloWorld from "./components/hello-world/hello-world";
import DiscountWidget from "./components/discount-widget/discount-widget";
import AboutPage from "./components/about-page/about.html";

ko.components.register("nav-bar", NavBar);
ko.components.register("home-page", HomePage);
ko.components.register("hello-world", HelloWorld);
ko.components.register("discount-widget", DiscountWidget);
ko.components.register("about-page", {template: AboutPage});

ko.applyBindings({ route: router.currentRoute });