import { v4 as uuidv4 } from "uuid";
import WhyCtruh from "./components/WhyCtruh";
import Products from "./components/Products";
import Solutions from "./components/Solutions";
import Resources from "./components/Resources";
import About from "./components/About";

interface NavLinkTypes {
  id: string;
  name: string;
  component: React.FC;
}

export const navLinks: NavLinkTypes[] = [
  { name: "Why Ctruh?", id: uuidv4(), component: WhyCtruh },
  { name: "Products", id: uuidv4(), component: Products },
  { name: "Solutions", id: uuidv4(), component: Solutions },
  { name: "Resources", id: uuidv4(), component: Resources },
  { name: "About", id: uuidv4(), component: About },
];
