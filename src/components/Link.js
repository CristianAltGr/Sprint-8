import { Link as NavLink } from "react-router-dom";

const Link = ({ to, ...props }) => <NavLink {...props} to={process.env.PUBLIC_URL + to}></NavLink >;

export default Link;