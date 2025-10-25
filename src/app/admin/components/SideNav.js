import DashboardIcon from '@mui/icons-material/Dashboard';
import UsersIcon from '@mui/icons-material/People';
import CalendarIcon from '@mui/icons-material/CalendarToday';

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: <DashboardIcon /> },
  { name: "Users", href: "/admin/users", icon: <UsersIcon /> },
  { name: "Calendar", href: "/admin/calendar", icon: <CalendarIcon /> }, // Added Calendar link
  // ...other nav items...
];

export default function Sidebar() {
  return (
    <div>
      {navItems.map((item) => (
        <div key={item.name}>
          <a href={item.href}>
            {item.icon}
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
}