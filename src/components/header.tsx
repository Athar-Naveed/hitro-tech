import Link from "next/link";

const Header = () => {
  return (
    <div className="text-white bg-gradient-to-r from-primary via-secondary to-tertiary text-center grid md:flex md:gap-2 justify-center mx-auto">
      <h1>
        Hitrotech Discount: Starting at <strong> $3.49/month </strong> for a
        Limited Time.
      </h1>
      <Link href={"/"} className="text-white font-bold underline">
        View Details
      </Link>
    </div>
  );
};

export default Header;
