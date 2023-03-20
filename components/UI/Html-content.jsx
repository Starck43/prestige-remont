export const HtmlContent = ({ Tag = "div", children, className }) => (
    <Tag className={className} dangerouslySetInnerHTML={{ __html: children }} />
)
