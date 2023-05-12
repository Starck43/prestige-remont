import { useRouter } from "next/router"
import Link from "next/link"
import Stack from "@mui/material/Stack"
import Image from "next/image"
import DATA from "/core/constants"

export const Navbar = ({ nav }) => {
    const router = useRouter()
    return (
        <nav id="navbar">
            <Stack
                direction={{ mobile: "column", tablet: "row" }}
                spacing={2}
                alignItems="center"
                justifyContent={{ tablet: "space-between", mobile: "center" }}
                sx={{
                    mt: 2,
                }}
            >
                <Image src={DATA.logo} alt={DATA.siteName} width={100} height={100} className="logo" />

                <div className={"navbar-items centered"}>
                    {nav?.map((node) => (
                        <Link
                            key={node.databaseId}
                            href={router.pathname === "/" ? "/#" + node.path.replace(/^\/|\/$/g, "") : node.path}
                        >
                            {node.label}
                        </Link>
                    ))}
                </div>
            </Stack>
        </nav>
    )
}
