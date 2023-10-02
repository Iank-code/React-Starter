function Navbar() {
  const navLinks = [
    {
      name: "Everest",
      to: "#",
    },
    {
      name: "About",
      to: "#",
    },
    {
      name: "Contact",
      to: "#",
    },
    {
      name: "Event",
      to: "#",
    },
    {
      name: "Careers",
      to: "#",
    },
  ];
  return (
    <div>
      {navLinks.map((link, index) => {
        return (
          <a key={index} href={link.to}>
            {" "}
            {link.name}{" "}
          </a>
        );
      })}
    </div>
  );
}

export default Navbar;
