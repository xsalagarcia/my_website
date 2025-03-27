import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import markdownIt from 'markdown-it';
import markdownItAnchor from "markdown-it-anchor";
import mermaid from 'mermaid';
import styles from "./MarkdownRenderer.module.css"

function MarkdownRenderer ( {markdownContent }) {

    const [htmlContent, setHtmlContent] = useState("");

    useEffect(()=>{

        //const md = markdownIt({ html: true }).use(markdownItAnchor);
        
        const md = markdownIt({ html: true }).use(markdownItAnchor, {
            level: [1, 2, 3, 4, 5, 6], // Add IDs to h1, h2, h3, h4
            slugify: (s) => 
                s.toLowerCase()
                .replace(/[']/g, '') // Remove apostrophes
                .replace(/[^\p{L}\d/_]+/gu, '-') //replace all that it is not a letter `\p{L}`, digit`\d`, / or _
                .replace(/\//g, '')  // remove /
                .replace(/^-+|-+$/g, ''), // Remove leading/trailing hyphens
                
            /*permalink: markdownItAnchor.permalink.ariaHidden({ // Add a permalink symbol
                placement: 'before',
                symbol: '#',
            }),*/
        });
        

        mermaid.initialize({ startOnLoad: false });
        setHtmlContent(md.render(markdownContent));



        mermaid.run({querySelector: ".language-mermaid"});

    },[markdownContent]);

    useEffect(() => {
        mermaid.run({ querySelector: '.language-mermaid' });
    }, [htmlContent]);
    
    return (

        <div className={styles.MarkdownRenderer} dangerouslySetInnerHTML={{ __html: htmlContent }} ></div>
    )

}

MarkdownRenderer.propTypes = {
    markdownContent: PropTypes.string.isRequired
}

export default MarkdownRenderer;

