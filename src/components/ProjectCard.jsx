/**
 * 
 * @param {Object} props
 * @param {String} props.className
 * @param {String} props.title
 * @param {String} props.content
 * @param {String} props.imageUrl 
 * @param {Array<String>} props.tags
 * @param {Array<Object>} props.urls {string: "text", url: "urlpath"}
 */
function ProjectCard({ className, title, content, imageUrl, tags, urls}) {
    return(
        <div className={`${className} project-card`}>
            <h3 className="title">
                {title}
            </h3>
            <div className="content-image">
                <div className="content">
                    <div dangerouslySetInnerHTML={{ __html: content }}>
                    </div>
                    {urls.map(url=>{return(<a key={url.text} href={url.url}>{url.text}</a>)})}
                </div>
                <figure>
                    <img src={imageUrl} alt={`${title} screenshot`} />
                </figure>
            </div>
            <ul className="tags-list">
                {tags.map(tag=>{return(<li key={tag}>{tag}</li>)})}
            </ul>
        </div>

    )

}

export default ProjectCard;

