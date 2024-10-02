import Link from "next/link";

export const metadata = {
  title: "Next.js App",
  description: "Regular user pages",
};
export const Navbar = () => (
  <nav style={styles.navbar}>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
    <Link href="/login">Login</Link>
  </nav>
);
export const AdminNavbar = () => (
  <nav style={styles.navbar}>
    <Link href="/admin/dashboard">Dashboard</Link>
    <Link href="/admin/users">Manage Users</Link>
    <Link href="/admin/settings">Settings</Link>
    <Link href="/logout">Logout</Link>
  </nav>
);

const styles = {
  navbar: {
    background: "#333",
    padding: "10px",
  },
  link: {
    color: "#fff",
    marginRight: "15px",
    textDecoration: "none",
  },
};
