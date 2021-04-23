import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Страница не найдена" />
    <h1>404: Страница не найдена</h1>
    <p>Такого адреса не существует!</p>
  </Layout>
)

export default NotFoundPage
