import { useEffect, useState } from 'react';
import markdownIt from 'markdown-it';
import markdownItAnchor from "markdown-it-anchor";
import mermaid from 'mermaid';
import "../assets/styles/components/MarkdownRenderer.css"

function MarkdownRenderer ( {markdownContent }) {

    const [htmlContent, setHtmlContent] = useState("");
    //const md = markdownIt({html: true});

    const md = markdownIt({ html: true }).use(markdownItAnchor, {
        level: [1, 2, 3, 4], // Add IDs to h1, h2, h3, h4
        slugify: (s) => 
            s.toLowerCase()
            .replace(/[']/g, '') // Remove apostrophes
            .replace(/[^\p{L}\d]+/gu, '-') // Replace spaces and special chars with hyphens (preserves Unicode letters)
            .replace(/^-+|-+$/g, ''), // Remove leading/trailing hyphens
        permalink: markdownItAnchor.permalink.ariaHidden({ // Add a permalink symbol
            placement: 'before',
            symbol: '#',
        }),
    });
    
    useEffect(()=>{
        mermaid.initialize({ startOnLoad: false });
        setHtmlContent(md.render(markdownContent));



        mermaid.run({querySelector: ".language-mermaid"});

    },[markdownContent]);

    useEffect(() => {
        mermaid.run({ querySelector: '.language-mermaid' });
    }, [htmlContent]);
    
    return (

        <article className="markdown" dangerouslySetInnerHTML={{ __html: htmlContent }} ></article>
    )

}

export default MarkdownRenderer;