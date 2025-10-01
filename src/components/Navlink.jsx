import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-2 pl-3 pr-4 text-gray-200 hover:text-white rounded md:p-0"
    >
      {title}
    </Link>
  );
};

export default NavLink;
