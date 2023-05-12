import { Layout } from "/components/Layout"
import { Navbar } from "/components/navbar/Navbar"
import { Header } from "/components/header/Header"
import { Portfolio } from "/components/portfolio/Portfolio"
import { About } from "/components/about/About"
import { Offers } from "/components/offers/Offers"
import { Promotion } from "/components/promotion/Promotion"
import { Skills } from "/components/skills/Skills"
import { Footer } from "/components/footer/Footer"

import { getAllPages, getMenuItems } from "/core/api/api"

export default function Index({ nav, pages }, preview) {
    return (
        <Layout preview={preview}>
            <Navbar nav={nav} />
            <Header {...pages["index"]} />
            <About {...pages["about-us"]} />
            <Portfolio {...pages["portfolio"]} />
            <Offers {...pages["offers"]} />
            <Promotion {...pages["promotion"]} />
            <Skills {...pages["skills"]} />
            <Footer {...pages["contacts"]} />
        </Layout>
    )
}

export async function getStaticProps({ preview = false }) {
    let nav = await getMenuItems(preview)
    let pages = await getAllPages(preview)

    return {
        props: { nav, pages, preview },
        revalidate: 60 * 60 * 24,
    }
}
