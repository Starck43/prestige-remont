import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Stack from "@mui/material/Stack"
import { NavLogo } from "./NavLogo"

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
                <NavLogo />

                <div className={"navbar-items centered"}>
                    {nav?.map(node => (
                        <Link
                            key={node.databaseId}
                            href={
                                router.pathname === "/"
                                    ? "/#" + node.path.replace(/^\/|\/$/g, "")
                                    : node.path
                            }
                        >
                            {node.label}
                        </Link>
                    ))}
                </div>
            </Stack>
        </nav>
    )
}
