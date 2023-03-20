import { getYear } from "/core/helpers/utils"

export default function Copyright({ title, author, authorUrl }) {
    return (
        <small className="copyright centered">
            <span>
                © {getYear()} {title} [ разработчик{" "}
                <a href={authorUrl}>{author}</a> ]
            </span>
        </small>
    )
}
