import { Bell, ChevronDown, Search, Settings } from "lucide-react"; // Optional, use any icon lib or SVGs
import { useLocation } from "react-router-dom";
// import profilePic from "../assets/admin.jpg"; // Replace with your correct image path

const getHeaderFromPath = (pathname) => {
    if (pathname === "/admin") return "Dashboard";
    if (pathname.startsWith("/admin/products")) return "Products";
    if (pathname.startsWith("/admin/orders")) return "Orders";
    if (pathname.startsWith("/admin/customers")) return "Customers";
    return "Admin";
};
const AdminNavbar = ({ pageName }) => {
    const { pathname } = useLocation();
    const header = getHeaderFromPath(pathname);
    return (
        <nav className="w-full flex items-center justify-between p-5   bg-white shadow-sm">
            {/* Left Side: Title + Search */}
            <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">{header}</h1>
                <div className="flex items-center gap-2">
                    {/* Search input */}
                    <div className="relative">
                        <Search
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                        />
                        <input
                            type="text"
                            placeholder="Search for something..."
                            className="pl-10 pr-4 py-2 w-[250px] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Filter dropdown */}
                    <select className="border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option>This Month</option>
                        <option>Last Month</option>
                        <option>This Year</option>
                    </select>
                </div>
            </div>

            {/* Right Side: Icons + Profile */}
            <div className="flex items-center gap-5">
                {/* Settings Icon */}
                <Settings className="text-gray-500 cursor-pointer" />

                {/* Bell Icon with notification dot */}
                <div className="relative cursor-pointer">
                    <Bell className="text-gray-500" />
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-2">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACUCAMAAAA9M+IXAAAAQlBMVEX////s7Oyenpzv7++bm5ny8vL7+/uYmJb19fX4+Pjp6emUlJLb29vW1taioqDk5OS4uLivr67KysnDw8KoqKbQ0ND39IuMAAAGxUlEQVR4nO2c647jIAyFmwAhF3JP3v9VF9pO20xjsA1JR6se7Y+VVmK+9ZwYYy6Xy1dfffXV4SqKqiqvqqqi+DQNqKIoSiWyus4y++cpocrir2FXjnSLmf1irj7N+KNSCJBzw1x+mvRSVAKO6ZtqUX3SFlWJR33Y4lOuqHAeeCf+BDDJBVvV2dnA3Mh+JMKFH1bc9UeAlQ/U/q77dp2m1lizeInFKbBgNhDCgs5D1zTaqmmafFiNl/iEAEOhVaIdxkVrmT8kpe6G1mcKdTBsAcRVqGmxePmbpByNgoHFodMGYARRr13zjnoHbgZTwyE+bmYuACOodtQQrJOW42QEFOOjDAGkLyHmfMcFvyzRLXOv9omPMUQFBMcs3tA+Y9zIweyb4oAMAdG2ex8Y6IqhP4cXoBVT0AhbV3Sn8IK0JFjHq80ub9IEUe1XX2LF2RYR3zphfKHYGjKs4x33R0vGuz+V2YiMVCtcpef9/J2IF6LNZroVrmr2P7csTf6F5s++YwXX2QGYcFLQQiWYmJjBtWr3eRPMx2B5q/i0egB+Y9HpDEgKLi2ANVhQcoCWpbGfG0SbqYHpXIc79tCwcbSeZdnCps3lAuJG2Re0Qib6LgIXjm6MHTwLdNHyab24EdWvpwVmS7EYXE8HiJ0dwOnM4c78L81mBs/I7MnN1yIQ3BnYSc/eoXm08HfmxozIY7kEipyo8Pp7XDG4+Zq+G+UNbhxut7+ieIiTzLy/rzjcJdAaZswVvrQQiwsUkE/R3RsIbgyuHEKD08MbauVH4Gr/l+ZEpQ3u6UTgNnUQlzq1hQaMmSZ0yAvkXBbIYlG4ckRsx9FyWXDAiJpBT+Ho0twQ2NrJOO2mJy6wbt+OT8IND9dyy3MZmiRuoqTeoHUjVhP+6vEhinkRvy3F6zhZ3HDWvcaDgIsZrmUu3EP1zY/wtGHrWilaI/oRXN/C51V486KOKYiWlXkDpflT+FSG3E4fWLxLixsdb14crspGVng7pBvQuLj//drxGjkN0H/k4oazrlPJ+9TcJIzDxWZeJC63xsFGF4uLO79Usqc1uOO0/QFIXFymUbzE4Gnu/v4BSXE5m2pXXKR10ZkMOVzP+9Swk3BqXN40AW377ODipuFwbX4fznA+No3MC8lxWVtVekSWDOlxM7USDjNcBW0In4KbiXomwS4TnvYA3EwoiiGaFu2EY3AzkeEXFVKSDnoegZupBW1ff4//HFxCO0diJwgSLnqauKlH02JXaYfi1uheJHqCuOPiaJElzmPUFUlLSLkH4mYZ7mNrcO2Qp9IWkM9hUZWkxM++d2HLc+ptCFwuw/QdN0q7VntKmHB4iTmXgovqOW14g7mXmsSckLTIPsMrbugAHHRS0zsoGpc+dKDbS6ttqLiMm0f+c08N4xILfiuQbF4bXi/uwsAldPsT4+KXky/C03LM68WlZzFSs7+kph1/65+RdEkba/TM622lc3ApG1W0Cj0LdaAYuLRNYWoq87ccJHSiFBZty51aNvgPcEp6IiMex6HWpv5tCsQJhq2oh52obvBPwtDpeFDk0y2k0YMHOCVtnVZTaYlLiuDysiMVOfSjQwV6phACcVJa5lOJDzDjWCEmGu7mat9PGrNY013bIy/vc45Ih3KZDWpt1nlYNLJLJvUymcxz8fIh1glpz7gWVfXrsHS5pHR4r5cCjQi9kMA7EQsUDsLdB17HXJNIn8RaW+Q68yAzj5/vDShE386j1DHHYS1xN0ymBnzBPdz/Hl53d3nJo1gfQe7Gud8FZp+V305t1gRTx3IAhCyX9v1SecRFmtexRD+jEhZJzTL9KidiruE+k5kQc5cc1kkv6ybCUbd+fuYK1Y/pXLCVlONLgCPvgN0GEuQNNBLwywmHONqbHQTl7jIL+Kf3G33fsnQtMO41Rbxu8U1wW1jFXelA6npdNMljAgq7+RAjt5xL89hI5X99IRXvqhI9fBBzkw6POya7hm2O924uTSray4V7+BWvpk1Ha3kPtq9OSmv9wD1CiJHMEzrhzpugyoVodXLaA3llyq/sqQz5RAtReoytawCVzFOPftrhsHeHqim1IWQzHflsFvsJCYC26w+EvThDpFxbHmeEh0yeyME6b095FTJJgKUezmB16qOBrQ8Odu2rChNVA8tmNOe+DlqZjpvUZNOZDzy0aUbOR6fz8ZA5F6F+JoZY6m4+0bNvUmZoGiSxbKxlj35KMaiiHTvXm/aS2n/uhpM/L1ClmVzbd5dZaq3zZZjM5982flEh6itz46Rvcn+Vo+uTH/s6JV/ucWbTrlbT2ppa/bU3ub/66qv/Uf8Aft94ZbtOwPwAAAAASUVORK5CYII="
                        alt="Admin"
                        className="h-8 w-8 rounded-full border-2 border-green-400 object-cover"
                    />
                    <div className="text-sm">
                        <p className="font-medium">Antono</p>
                        <p className="text-xs text-gray-500">Admin</p>
                    </div>
                    {/* <ChevronDown className="text-gray-500" size={18} /> */}
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;
