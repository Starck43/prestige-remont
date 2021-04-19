import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Страница не найдена" />
    <h1>404: Страница не найдена</h1>
    <p>Такого адреса не существует!</p>
  </Layout>
)

export default NotFoundPage
